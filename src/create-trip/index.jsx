import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AI_PROMPT, SelectBudgetOptions, SelectTravelesList } from '@/constants/options';
import { chatSession } from '@/service/AIModal';
import React, { useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { toast } from 'sonner';
import { AiOutlineLoading } from "react-icons/ai";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/service/firebaseConfig';
import { useNavigate} from 'react-router-dom';


function CreateTrip() {
  const [place, setPlace] = useState();

  const [formData, setFormData] = useState([]);
  const [openDailog, setOpenDailog] = useState(false);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleInputChange = (name, value) => {


    setFormData({ 
      ...formData,
      [name]: value
    })
  }

  useEffect(() => {
    console.log(formData);
  }, [formData])


  const OnGenerateTrip = async () => {

    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      setOpenDailog(true)
      return;
    }

    setLoading(true);
    if (formData?.noOfDays > 5 && !formData?.location || !formData?.budget || !formData?.traveler) {
      toast("Please fill all details")
      return;
    }

    const FINAL_PROMPT = AI_PROMPT
      .replace('{location}', formData?.location?.label)
      .replace('{totalDays}', formData?.noOfDays)
      .replace('{traveler}', formData?.traveler)
      .replace('{budget}', formData?.budget)
      .replace('{totalDays}', formData?.noOfDays)
    const result = await chatSession.sendMessage(FINAL_PROMPT);

    console.log("--", result?.response?.text());
    setLoading(false);
    SaveAiTrip(result?.response?.text());
  };

  const SaveAiTrip = async (TripData) => {

    setLoading(true);
    const user = JSON.parse(localStorage.getItem('user'));
    const docId = Date.now().toString()

    await setDoc(doc(db, 'AITrips', docId), {
      userSelection: formData,
      tripData: JSON.parse(TripData),
      userEmail: user?.email,
      id: docId,

    });
    setLoading(false);
    navigate('/view-trip/'+docId);
  }

  return (
    <div className='items-center px-5 mt-10 sm:px-10 md:px-32 lg:px-56 xl:px-72'>
      <h2 className='text-3xl font-bold'>Tell us your travel preferences 🏕️🎄</h2>
      <p className='mt-3 text-xl text-gray-500'>Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.</p>


      <div className='mt-20'>
        <div>
          <h2 className='my-3 text-xl font-medium'>What is destination of choice?</h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => { setPlace(v); handleInputChange('location', v) }
            }}
          />

        </div>
        <div>
          <h2 className='my-3 text-xl font-medium'>How many days are you planning your trip?</h2>
          <Input placeholder={'Ex.3'} type='number'
            onChange={(e) => handleInputChange('noOfDays', e.target.value)}
          />
        </div>

      </div>
      <div>
        <h2 className='my-3 text-xl font-medium'>What is Your Budget?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
          {SelectBudgetOptions.map((item, index) => (
            <div key={index}
              onClick={() => handleInputChange('budget', item.title)}
              className={`p-4 cursor-pointer border 
            rounded-lg hover:shadow-lg
            ${formData?.budget == item.title && 'shadow-lg border-black'}
            `}>
              <h2 className='text-4xl'>{item.icon}</h2>
              <h2 className='text-lg font-bold'>{item.title}</h2>
              <h2 className='text-sm text-gray-500'>{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>


      <div>
        <h2 className='my-3 text-xl font-medium'>Who do you plan on traveling with on your next adventure?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
          {SelectTravelesList.map((item, index) => (
            <div key={index}
              onClick={() => handleInputChange('traveler', item.people)}
              className={`p-4 cursor-pointer border 
              rounded-lg hover:shadow-lg
              ${formData?.traveler == item.people && 'shadow-lg border-black'}
            `}>
              <h2 className='text-4xl'>{item.icon}</h2>
              <h2 className='text-lg font-bold'>{item.title}</h2>
              <h2 className='text-sm text-gray-500'>{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>


      <div className='flex justify-end my-10'>
        <Button
          disabled={loading}

          onClick={OnGenerateTrip}>
          {loading ?
            <AiOutlineLoading className='h-7 w-7 animate-spin' /> : 'Generate Trip'
          }
        </Button>
      </div>


      <Dialog open={openDailog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <p className='text-2xl font-black'> Smart Trip Planner✈️</p>
              <h2 className='text-lg font-bold mt-7'>Sign In With Google</h2>
              <p>Sign in to the App with Google authentication securely</p>
              <GoogleLogin
              disabled= {loading}
                onSuccess={credentialResponse => {
                  const credentialResponseDecoded = jwtDecode(
                    credentialResponse.credential
                  );
                  console.log(credentialResponseDecoded);
                  localStorage.setItem('user',JSON.stringify(credentialResponseDecoded));
                  setOpenDailog(false);
                  OnGenerateTrip();
                }}
                onError={() => {

                  console.log('Login Failed');
                }}
              />

            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>



    </div>
  )
}

export default CreateTrip