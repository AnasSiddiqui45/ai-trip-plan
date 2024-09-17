import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for location: Las vegas,for 3 days for couple with a cheap budget,Give me a hotels options list with HotelName , Hotel address, Price,hotel image url,geo coordinates,rating,descriptions and suggest itinerary with PlaceName,Pllace Details,Place image url,geo coordinates , ticket pricing,rating,Time travel each of the location for 3 days with each day plan with best time to visit in JSON format."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "## Las Vegas Budget Trip for a Couple (3 Days)\n\n**Hotels (Sorted by Price Low to High)**\n\n```json\n[\n  {\n    \"HotelName\": \"The D Las Vegas\",\n    \"HotelAddress\": \"301 Fremont Street, Las Vegas, NV 89101\",\n    \"Price\": \"$50-$100/night\",\n    \"HotelImageURL\": \"https://www.thed.com/assets/images/hotel/exterior/the-d-las-vegas.jpg\",\n    \"GeoCoordinates\": \"36.1696° N, 115.1430° W\",\n    \"Rating\": \"3.5 stars\",\n    \"Description\": \"A downtown hotel with a retro vibe, offering affordable rooms and access to Fremont Street Experience.\"\n  },\n  {\n    \"HotelName\": \"Golden Nugget Las Vegas\",\n    \"HotelAddress\": \"129 E Fremont Street, Las Vegas, NV 89101\",\n    \"Price\": \"$75-$150/night\",\n    \"HotelImageURL\": \"https://www.goldennugget.com/images/hotel/exterior/golden-nugget-hotel-exterior.jpg\",\n    \"GeoCoordinates\": \"36.1683° N, 115.1414° W\",\n    \"Rating\": \"4 stars\",\n    \"Description\": \"A classic casino hotel with a luxurious feel, known for its aquarium and pool.\"\n  },\n  {\n    \"HotelName\": \"Circus Circus Hotel & Casino\",\n    \"HotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n    \"Price\": \"$60-$120/night\",\n    \"HotelImageURL\": \"https://www.circuscircus.com/sites/default/files/styles/hero_desktop/public/hotel-exterior-1.jpg\",\n    \"GeoCoordinates\": \"36.1051° N, 115.1725° W\",\n    \"Rating\": \"3 stars\",\n    \"Description\": \"A family-friendly hotel with a circus theme, offering budget-friendly rooms and entertainment.\"\n  },\n  {\n    \"HotelName\": \"Stratosphere Hotel, Casino & Tower\",\n    \"HotelAddress\": \"2000 S Las Vegas Blvd, Las Vegas, NV 89104\",\n    \"Price\": \"$80-$160/night\",\n    \"HotelImageURL\": \"https://www.stratospherehotel.com/sites/default/files/styles/hero_desktop/public/hotel-exterior-1.jpg\",\n    \"GeoCoordinates\": \"36.1177° N, 115.1699° W\",\n    \"Rating\": \"3.5 stars\",\n    \"Description\": \"A hotel with a tower offering thrilling rides and panoramic views of the Strip.\"\n  }\n]\n```\n\n**Itinerary (3 Days)**\n\n```json\n[\n  {\n    \"Day\": 1,\n    \"DayPlan\": [\n      {\n        \"Time\": \"10:00 AM\",\n        \"PlaceName\": \"Fremont Street Experience\",\n        \"PlaceDetails\": \"Explore the vibrant pedestrian mall with its light shows, street performers, and casinos.\",\n        \"PlaceImageURL\": \"https://www.vegasexperience.com/media/uploads/fremont-street-experience.jpg\",\n        \"GeoCoordinates\": \"36.1686° N, 115.1423° W\",\n        \"TicketPricing\": \"Free\",\n        \"Rating\": \"4 stars\"\n      },\n      {\n        \"Time\": \"1:00 PM\",\n        \"PlaceName\": \"The D Las Vegas\",\n        \"PlaceDetails\": \"Enjoy a casual lunch at one of the hotel's restaurants.\",\n        \"PlaceImageURL\": \"https://www.thed.com/assets/images/hotel/restaurants/d-bar.jpg\",\n        \"GeoCoordinates\": \"36.1696° N, 115.1430° W\",\n        \"TicketPricing\": \"Varies\",\n        \"Rating\": \"3.5 stars\"\n      },\n      {\n        \"Time\": \"3:00 PM\",\n        \"PlaceName\": \"Golden Nugget Las Vegas\",\n        \"PlaceDetails\": \"Visit the impressive Golden Nugget Aquarium and enjoy the casino's atmosphere.\",\n        \"PlaceImageURL\": \"https://www.goldennugget.com/images/attractions/aquarium/golden-nugget-aquarium-main.jpg\",\n        \"GeoCoordinates\": \"36.1683° N, 115.1414° W\",\n        \"TicketPricing\": \"Free for the casino, $20 for the aquarium\",\n        \"Rating\": \"4 stars\"\n      },\n      {\n        \"Time\": \"6:00 PM\",\n        \"PlaceName\": \"El Cortez Hotel & Casino\",\n        \"PlaceDetails\": \"Dine on a budget at the historic El Cortez, known for its cheap eats and vintage charm.\",\n        \"PlaceImageURL\": \"https://www.elcortezhotelcasino.com/sites/default/files/styles/hero_image/public/el-cortez-lobby-2.jpg\",\n        \"GeoCoordinates\": \"36.1668° N, 115.1407° W\",\n        \"TicketPricing\": \"Varies\",\n        \"Rating\": \"3.5 stars\"\n      },\n      {\n        \"Time\": \"8:00 PM\",\n        \"PlaceName\": \"Fremont Street Experience\",\n        \"PlaceDetails\": \"Catch the nightly light show and enjoy the lively atmosphere.\",\n        \"PlaceImageURL\": \"https://www.vegasexperience.com/media/uploads/fremont-street-experience.jpg\",\n        \"GeoCoordinates\": \"36.1686° N, 115.1423° W\",\n        \"TicketPricing\": \"Free\",\n        \"Rating\": \"4 stars\"\n      }\n    ]\n  },\n  {\n    \"Day\": 2,\n    \"DayPlan\": [\n      {\n        \"Time\": \"9:00 AM\",\n        \"PlaceName\": \"The Strip\",\n        \"PlaceDetails\": \"Walk along the famous Strip, exploring the themed casinos and resorts.\",\n        \"PlaceImageURL\": \"https://www.visitlasvegas.com/sites/default/files/styles/hero_desktop/public/2023-02/the-strip-las-vegas.jpg\",\n        \"GeoCoordinates\": \"36.1146° N, 115.1729° W\",\n        \"TicketPricing\": \"Free\",\n        \"Rating\": \"5 stars\"\n      },\n      {\n        \"Time\": \"12:00 PM\",\n        \"PlaceName\": \"Bellagio Conservatory & Botanical Garden\",\n        \"PlaceDetails\": \"Admire the beautiful and ever-changing floral displays.\",\n        \"PlaceImageURL\": \"https://www.bellagio.com/sites/default/files/styles/gallery_main/public/conservatory/conservatory-carousel-3.jpg\",\n        \"GeoCoordinates\": \"36.1173° N, 115.1735° W\",\n        \"TicketPricing\": \"Free\",\n        \"Rating\": \"4.5 stars\"\n      },\n      {\n        \"Time\": \"2:00 PM\",\n        \"PlaceName\": \"The LINQ Promenade\",\n        \"PlaceDetails\": \"Enjoy a casual lunch and stroll through the outdoor shopping and entertainment district.\",\n        \"PlaceImageURL\": \"https://www.caesars.com/content/dam/caesars/linq/linq-promenade.jpg\",\n        \"GeoCoordinates\": \"36.1166° N, 115.1725° W\",\n        \"TicketPricing\": \"Free\",\n        \"Rating\": \"4 stars\"\n      },\n      {\n        \"Time\": \"5:00 PM\",\n        \"PlaceName\": \"The Venetian and The Palazzo\",\n        \"PlaceDetails\": \"Experience the luxurious ambiance and marvel at the Grand Canal Shoppes.\",\n        \"PlaceImageURL\": \"https://www.venetian.com/media/images/venetian-exterior-2.jpg\",\n        \"GeoCoordinates\": \"36.1203° N, 115.1741° W\",\n        \"TicketPricing\": \"Free\",\n        \"Rating\": \"4.5 stars\"\n      },\n      {\n        \"Time\": \"8:00 PM\",\n        \"PlaceName\": \"The Strip\",\n        \"PlaceDetails\": \"Enjoy a romantic dinner at a restaurant with a view or take in a free show.\",\n        \"PlaceImageURL\": \"https://www.visitlasvegas.com/sites/default/files/styles/hero_desktop/public/2023-02/the-strip-las-vegas.jpg\",\n        \"GeoCoordinates\": \"36.1146° N, 115.1729° W\",\n        \"TicketPricing\": \"Varies\",\n        \"Rating\": \"5 stars\"\n      }\n    ]\n  },\n  {\n    \"Day\": 3,\n    \"DayPlan\": [\n      {\n        \"Time\": \"10:00 AM\",\n        \"PlaceName\": \"Red Rock Canyon National Conservation Area\",\n        \"PlaceDetails\": \"Enjoy scenic drives and hiking amidst dramatic sandstone cliffs.\",\n        \"PlaceImageURL\": \"https://www.nps.gov/redr/planyourvisit/images/redrock-canyon-landscape.jpg\",\n        \"GeoCoordinates\": \"36.1560° N, 115.2672° W\",\n        \"TicketPricing\": \"$15 per vehicle\",\n        \"Rating\": \"4.5 stars\"\n      },\n      {\n        \"Time\": \"1:00 PM\",\n        \"PlaceName\": \"Downtown Summerlin\",\n        \"PlaceDetails\": \"Enjoy a casual lunch and browse upscale shops and boutiques.\",\n        \"PlaceImageURL\": \"https://www.downtown-summerlin.com/media/images/summerlin-aerial.jpg\",\n        \"GeoCoordinates\": \"36.1387° N, 115.2201° W\",\n        \"TicketPricing\": \"Free\",\n        \"Rating\": \"4 stars\"\n      },\n      {\n        \"Time\": \"4:00 PM\",\n        \"PlaceName\": \"The Neon Museum\",\n        \"PlaceDetails\": \"Explore a collection of iconic Las Vegas neon signs.\",\n        \"PlaceImageURL\": \"https://www.neonmuseum.org/media/images/neon-museum-exterior.jpg\",\n        \"GeoCoordinates\": \"36.1777° N, 115.1434° W\",\n        \"TicketPricing\": \"$20 per person\",\n        \"Rating\": \"4 stars\"\n      },\n      {\n        \"Time\": \"7:00 PM\",\n        \"PlaceName\": \"Hofbrauhaus Las Vegas\",\n        \"PlaceDetails\": \"Enjoy authentic German food and beer in a festive atmosphere.\",\n        \"PlaceImageURL\": \"https://www.hofbrauhauslasvegas.com/assets/images/home/hofbrau-las-vegas-exterior.jpg\",\n        \"GeoCoordinates\": \"36.1199° N, 115.1748° W\",\n        \"TicketPricing\": \"Varies\",\n        \"Rating\": \"4 stars\"\n      }\n    ]\n  }\n]\n```\n\n**Important Notes:**\n\n* Prices for hotels and attractions are approximate and may vary based on season and availability.\n* Consider using public transportation or ride-sharing services to save on parking and gas costs.\n* Pack comfortable shoes and light clothing for walking around the city.\n* Drink plenty of water, especially when walking in the desert heat.\n* Be aware of your surroundings and take precautions to protect yourself from crime.\n* Have fun and enjoy your budget-friendly Las Vegas adventure! \n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for location: Las vegas,for 3 days for couple with a cheap budget,Give me a hotels options list with HotelName , Hotel address, Price,hotel image url,geo coordinates,rating,descriptions and suggest itinerary with PlaceName,Place Details,Place image url,Geo Coordinates , ticket pricing,rating,Time travel each of the location for 3 days with each day plan with best time to visit in JSON format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"hotels\": [\n    {\n      \"HotelName\": \"The D Las Vegas\",\n      \"HotelAddress\": \"301 Fremont Street, Las Vegas, NV 89101\",\n      \"Price\": \"$50-$100/night\",\n      \"HotelImageURL\": \"https://www.thed.com/assets/images/hotel/exterior/the-d-las-vegas.jpg\",\n      \"GeoCoordinates\": \"36.1696° N, 115.1430° W\",\n      \"Rating\": \"3.5 stars\",\n      \"Description\": \"A downtown hotel with a retro vibe, offering affordable rooms and access to Fremont Street Experience.\"\n    },\n    {\n      \"HotelName\": \"Golden Nugget Las Vegas\",\n      \"HotelAddress\": \"129 E Fremont Street, Las Vegas, NV 89101\",\n      \"Price\": \"$75-$150/night\",\n      \"HotelImageURL\": \"https://www.goldennugget.com/images/hotel/exterior/golden-nugget-hotel-exterior.jpg\",\n      \"GeoCoordinates\": \"36.1683° N, 115.1414° W\",\n      \"Rating\": \"4 stars\",\n      \"Description\": \"A classic casino hotel with a luxurious feel, known for its aquarium and pool.\"\n    },\n    {\n      \"HotelName\": \"Circus Circus Hotel & Casino\",\n      \"HotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"Price\": \"$60-$120/night\",\n      \"HotelImageURL\": \"https://www.circuscircus.com/sites/default/files/styles/hero_desktop/public/hotel-exterior-1.jpg\",\n      \"GeoCoordinates\": \"36.1051° N, 115.1725° W\",\n      \"Rating\": \"3 stars\",\n      \"Description\": \"A family-friendly hotel with a circus theme, offering budget-friendly rooms and entertainment.\"\n    },\n    {\n      \"HotelName\": \"Stratosphere Hotel, Casino & Tower\",\n      \"HotelAddress\": \"2000 S Las Vegas Blvd, Las Vegas, NV 89104\",\n      \"Price\": \"$80-$160/night\",\n      \"HotelImageURL\": \"https://www.stratospherehotel.com/sites/default/files/styles/hero_desktop/public/hotel-exterior-1.jpg\",\n      \"GeoCoordinates\": \"36.1177° N, 115.1699° W\",\n      \"Rating\": \"3.5 stars\",\n      \"Description\": \"A hotel with a tower offering thrilling rides and panoramic views of the Strip.\"\n    }\n  ],\n  \"itinerary\": [\n    {\n      \"Day\": 1,\n      \"DayPlan\": [\n        {\n          \"Time\": \"10:00 AM\",\n          \"PlaceName\": \"Fremont Street Experience\",\n          \"PlaceDetails\": \"Explore the vibrant pedestrian mall with its light shows, street performers, and casinos.\",\n          \"PlaceImageURL\": \"https://www.vegasexperience.com/media/uploads/fremont-street-experience.jpg\",\n          \"GeoCoordinates\": \"36.1686° N, 115.1423° W\",\n          \"TicketPricing\": \"Free\",\n          \"Rating\": \"4 stars\",\n          \"BestTime\": \"Morning or evening for the best light shows\"\n        },\n        {\n          \"Time\": \"1:00 PM\",\n          \"PlaceName\": \"The D Las Vegas\",\n          \"PlaceDetails\": \"Enjoy a casual lunch at one of the hotel's restaurants.\",\n          \"PlaceImageURL\": \"https://www.thed.com/assets/images/hotel/restaurants/d-bar.jpg\",\n          \"GeoCoordinates\": \"36.1696° N, 115.1430° W\",\n          \"TicketPricing\": \"Varies\",\n          \"Rating\": \"3.5 stars\",\n          \"BestTime\": \"Any time\"\n        },\n        {\n          \"Time\": \"3:00 PM\",\n          \"PlaceName\": \"Golden Nugget Las Vegas\",\n          \"PlaceDetails\": \"Visit the impressive Golden Nugget Aquarium and enjoy the casino's atmosphere.\",\n          \"PlaceImageURL\": \"https://www.goldennugget.com/images/attractions/aquarium/golden-nugget-aquarium-main.jpg\",\n          \"GeoCoordinates\": \"36.1683° N, 115.1414° W\",\n          \"TicketPricing\": \"Free for the casino, $20 for the aquarium\",\n          \"Rating\": \"4 stars\",\n          \"BestTime\": \"Afternoon for a break from the heat\"\n        },\n        {\n          \"Time\": \"6:00 PM\",\n          \"PlaceName\": \"El Cortez Hotel & Casino\",\n          \"PlaceDetails\": \"Dine on a budget at the historic El Cortez, known for its cheap eats and vintage charm.\",\n          \"PlaceImageURL\": \"https://www.elcortezhotelcasino.com/sites/default/files/styles/hero_image/public/el-cortez-lobby-2.jpg\",\n          \"GeoCoordinates\": \"36.1668° N, 115.1407° W\",\n          \"TicketPricing\": \"Varies\",\n          \"Rating\": \"3.5 stars\",\n          \"BestTime\": \"Early evening for dinner\"\n        },\n        {\n          \"Time\": \"8:00 PM\",\n          \"PlaceName\": \"Fremont Street Experience\",\n          \"PlaceDetails\": \"Catch the nightly light show and enjoy the lively atmosphere.\",\n          \"PlaceImageURL\": \"https://www.vegasexperience.com/media/uploads/fremont-street-experience.jpg\",\n          \"GeoCoordinates\": \"36.1686° N, 115.1423° W\",\n          \"TicketPricing\": \"Free\",\n          \"Rating\": \"4 stars\",\n          \"BestTime\": \"Evening for the light show\"\n        }\n      ]\n    },\n    {\n      \"Day\": 2,\n      \"DayPlan\": [\n        {\n          \"Time\": \"9:00 AM\",\n          \"PlaceName\": \"The Strip\",\n          \"PlaceDetails\": \"Walk along the famous Strip, exploring the themed casinos and resorts.\",\n          \"PlaceImageURL\": \"https://www.visitlasvegas.com/sites/default/files/styles/hero_desktop/public/2023-02/the-strip-las-vegas.jpg\",\n          \"GeoCoordinates\": \"36.1146° N, 115.1729° W\",\n          \"TicketPricing\": \"Free\",\n          \"Rating\": \"5 stars\",\n          \"BestTime\": \"Morning for less crowds\"\n        },\n        {\n          \"Time\": \"12:00 PM\",\n          \"PlaceName\": \"Bellagio Conservatory & Botanical Garden\",\n          \"PlaceDetails\": \"Admire the beautiful and ever-changing floral displays.\",\n          \"PlaceImageURL\": \"https://www.bellagio.com/sites/default/files/styles/gallery_main/public/conservatory/conservatory-carousel-3.jpg\",\n          \"GeoCoordinates\": \"36.1173° N, 115.1735° W\",\n          \"TicketPricing\": \"Free\",\n          \"Rating\": \"4.5 stars\",\n          \"BestTime\": \"Midday for a cool break indoors\"\n        },\n        {\n          \"Time\": \"2:00 PM\",\n          \"PlaceName\": \"The LINQ Promenade\",\n          \"PlaceDetails\": \"Enjoy a casual lunch and stroll through the outdoor shopping and entertainment district.\",\n          \"PlaceImageURL\": \"https://www.caesars.com/content/dam/caesars/linq/linq-promenade.jpg\",\n          \"GeoCoordinates\": \"36.1166° N, 115.1725° W\",\n          \"TicketPricing\": \"Free\",\n          \"Rating\": \"4 stars\",\n          \"BestTime\": \"Early afternoon for a relaxing break\"\n        },\n        {\n          \"Time\": \"5:00 PM\",\n          \"PlaceName\": \"The Venetian and The Palazzo\",\n          \"PlaceDetails\": \"Experience the luxurious ambiance and marvel at the Grand Canal Shoppes.\",\n          \"PlaceImageURL\": \"https://www.venetian.com/media/images/venetian-exterior-2.jpg\",\n          \"GeoCoordinates\": \"36.1203° N, 115.1741° W\",\n          \"TicketPricing\": \"Free\",\n          \"Rating\": \"4.5 stars\",\n          \"BestTime\": \"Late afternoon for a unique shopping experience\"\n        },\n        {\n          \"Time\": \"8:00 PM\",\n          \"PlaceName\": \"The Strip\",\n          \"PlaceDetails\": \"Enjoy a romantic dinner at a restaurant with a view or take in a free show.\",\n          \"PlaceImageURL\": \"https://www.visitlasvegas.com/sites/default/files/styles/hero_desktop/public/2023-02/the-strip-las-vegas.jpg\",\n          \"GeoCoordinates\": \"36.1146° N, 115.1729° W\",\n          \"TicketPricing\": \"Varies\",\n          \"Rating\": \"5 stars\",\n          \"BestTime\": \"Evening for dinner and shows\"\n        }\n      ]\n    },\n    {\n      \"Day\": 3,\n      \"DayPlan\": [\n        {\n          \"Time\": \"10:00 AM\",\n          \"PlaceName\": \"Red Rock Canyon National Conservation Area\",\n          \"PlaceDetails\": \"Enjoy scenic drives and hiking amidst dramatic sandstone cliffs.\",\n          \"PlaceImageURL\": \"https://www.nps.gov/redr/planyourvisit/images/redrock-canyon-landscape.jpg\",\n          \"GeoCoordinates\": \"36.1560° N, 115.2672° W\",\n          \"TicketPricing\": \"$15 per vehicle\",\n          \"Rating\": \"4.5 stars\",\n          \"BestTime\": \"Morning for cooler temperatures\"\n        },\n        {\n          \"Time\": \"1:00 PM\",\n          \"PlaceName\": \"Downtown Summerlin\",\n          \"PlaceDetails\": \"Enjoy a casual lunch and browse upscale shops and boutiques.\",\n          \"PlaceImageURL\": \"https://www.downtown-summerlin.com/media/images/summerlin-aerial.jpg\",\n          \"GeoCoordinates\": \"36.1387° N, 115.2201° W\",\n          \"TicketPricing\": \"Free\",\n          \"Rating\": \"4 stars\",\n          \"BestTime\": \"Afternoon for shopping and lunch\"\n        },\n        {\n          \"Time\": \"4:00 PM\",\n          \"PlaceName\": \"The Neon Museum\",\n          \"PlaceDetails\": \"Explore a collection of iconic Las Vegas neon signs.\",\n          \"PlaceImageURL\": \"https://www.neonmuseum.org/media/images/neon-museum-exterior.jpg\",\n          \"GeoCoordinates\": \"36.1777° N, 115.1434° W\",\n          \"TicketPricing\": \"$20 per person\",\n          \"Rating\": \"4 stars\",\n          \"BestTime\": \"Late afternoon for a break from the Strip\"\n        },\n        {\n          \"Time\": \"7:00 PM\",\n          \"PlaceName\": \"Hofbrauhaus Las Vegas\",\n          \"PlaceDetails\": \"Enjoy authentic German food and beer in a festive atmosphere.\",\n          \"PlaceImageURL\": \"https://www.hofbrauhauslasvegas.com/assets/images/home/hofbrau-las-vegas-exterior.jpg\",\n          \"GeoCoordinates\": \"36.1199° N, 115.1748° W\",\n          \"TicketPricing\": \"Varies\",\n          \"Rating\": \"4 stars\",\n          \"BestTime\": \"Evening for dinner and a lively atmosphere\"\n        }\n      ]\n    }\n  ]\n}\n```\n\n**Additional Tips for a Budget-Friendly Trip:**\n\n* **Food:**\n    * **Eat at casinos:** Many casinos offer affordable buffets and food courts.\n    * **Take advantage of happy hour:** Many bars and restaurants offer discounted drinks and appetizers during happy hour.\n    * **Pack snacks and drinks:** Avoid expensive snacks and drinks by bringing your own from the hotel or a nearby grocery store.\n* **Activities:**\n    * **Free shows:** Many casinos offer free live entertainment, such as music and magic shows.\n    * **Explore the Strip:** Walking along the Strip is a free activity that offers plenty of sights and entertainment.\n    * **Take advantage of free attractions:** Many casinos and hotels offer free attractions, such as art galleries, botanical gardens, and aquariums.\n    * **Visit the parks:** Take a walk or picnic at a park like the Clark County Wetlands Park or the Springs Preserve.\n* **Transportation:**\n    * **Walk:** Many attractions are within walking distance of each other.\n    * **Public transportation:** The Las Vegas Monorail and bus system offer affordable transportation options.\n    * **Ride-sharing:** Uber and Lyft are readily available in Las Vegas.\n* **Accommodation:**\n    * **Off-Strip hotels:** Consider staying at a hotel outside of the Strip for more affordable rates.\n    * **Airbnb:** Check out Airbnb for budget-friendly apartment rentals.\n* **Planning:**\n    * **Plan your trip in advance:** Booking hotels and attractions in advance can often lead to lower prices.\n    * **Use coupons and discounts:** Many attractions and restaurants offer discounts and coupons.\n    * **Take advantage of free events:** Las Vegas offers many free events and activities, such as concerts and festivals.\n* **Stay safe:**\n    * **Be aware of your surroundings:** Be aware of your surroundings and take precautions to protect yourself from crime.\n    * **Drink responsibly:** If you choose to drink alcohol, do so responsibly.\n    * **Stay hydrated:** Drink plenty of water, especially when walking in the desert heat.\n* **Enjoy yourself:** Most importantly, relax and enjoy your budget-friendly Las Vegas adventure! \n"},
          ],
        },
      ],
    });
    