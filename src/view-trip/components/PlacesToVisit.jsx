import React from 'react'
import PlaceCardItem from './PlaceCardItem'

function PlacestoVisit({trip}) {
  return (
    <div>
        <h2 className='text-lg font-bold'>Places to visit</h2>
        
        <div>
            {trip.tripData?.itinerary.map((item,index)=>(

                <div className='mt-5'>
                    <h2 className='text-lg font-medium'>Day{item.Day}</h2>
                    <div className='grid gap-5 md:grid-cols-2'>
                    {item.DayPlan.map((place,index)=>(

                        <div className='my-3'>
                            <h2 className='text-sm font-medium text-orange-600'>{place.Time}</h2>
                            <PlaceCardItem place = {place}/>
                        </div>

                    ))}
                    </div>

                </div>
            ))}
        </div>
    
    </div>
  )
}

export default PlacestoVisit
