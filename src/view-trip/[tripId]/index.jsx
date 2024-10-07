import { db } from '@/service/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner';
import InfoSection from '../components/InfoSection';
import Hotels from '../components/Hotels';
import PlacestoVisit from '../components/PlacesToVisit';
import Footer from '../components/Footer';

function ViewTrip() {
  const {tripId}=useParams();
  const [trip,setTrip]=useState([]);



  useEffect(()=>{
    tripId&&GetTripData();
  },[tripId])

  // Used to get information from firebase

  const GetTripData =async() =>{
    const docRef = doc(db,'AITrips',tripId);
    const docSnap = await getDoc(docRef);


    if (docSnap.exists()){
      console.log("Document",docSnap.data());
      setTrip(docSnap.data());
    }
    else{
      console.log("No such Documents");
      toast('No trip found')
    }
  }
  
  return (
    
    <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
      {/* Information Sections */}
        <InfoSection trip = {trip}/>
      {/* Recommended Hotels */}
        <Hotels trip = {trip}/>
      {/* Daily Plan */}
        <PlacestoVisit trip = {trip} />
      {/* Footer */}
        <Footer trip = {trip}/>

    </div>
  )
}

export default ViewTrip
