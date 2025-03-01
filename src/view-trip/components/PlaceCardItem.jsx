import { Button } from '@/components/ui/button';
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function PlaceCardItem({ place }) {

  const [photoUrl,setPhotoUrl]=useState();
  useEffect(()=>{
    place&&GetPlacePhoto();
  },[place])
  const GetPlacePhoto=async()=>{
    const data = {
      textQuery : place.PlaceName
    }
    const result = await GetPlaceDetails(data).then(resp=>{

      const PhotoUrl = PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
      setPhotoUrl(PhotoUrl);
    })
  }
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+place?.PlaceName}target='_blank'>
      <div className='flex gap-5 p-3 mt-2 transition-all border cursor-pointer rounded-xl hover:scale-105 hover:shadow-md'>
        <img src={photoUrl?photoUrl:'/placeholder.jpg'}
          className='w-[130px] h-[130px] rounded-xl object-cover'
        />

        <div>

          <h2 className='text-lg font-bold'>{place.PlaceName}</h2>
          <h2 className='text-sm text-gray-500'>{place.PlaceDetails}</h2>
          {/* <Button size="sm" className="my-3">
          <FaMapLocationDot />
        </Button> */}



        </div>
      </div>
    </Link>
  )
}

export default PlaceCardItem
