export const SelectTravelesList=[
    {
        id:1,
        title:'Just Me',
        desc:'A sole traveles in exploration',
        icon:'✈️',
        people : '1'
    },
    {
        id:2,
        title:'Couple',
        desc:'Two travels in tandem',
        icon:'🥂',
        people : '2 people'
    },
    {
        id:3,
        title:'Family',
        desc:'A group of fun loving adv',
        icon:'🏡',
        people : '3 to 5 people'
    },
    {
        id:4,
        title:'Friends',
        desc:'Stay conscious of cost',
        icon:'💸',
        people : '5 to 10 people'
    }
]


export const SelectBudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc:'Stay conscious of cost',
        icon : '💵',
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep cost on the average side',
        icon : '💰',
    },
    {
        id:3,
        title:'Expensive',
        desc:'Dont worry about cost',
        icon : '🪙',
    }
]

export const AI_PROMPT="Generate Travel Plan for Location : {location} , for {totalDays} Days for {traveler} with a {budget} budget, give me hotels options list with HotelName,Hotel address , Price , hotel image url,geo coordinates,rating,descriptions and suggest itinerary with PlaceName,Place Details,Place image url,Geo Coordinates,ticket Pricing,Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format." 