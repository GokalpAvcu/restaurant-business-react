import React from "react";

const restaurant = {
  id: 6713,
  uid: "dbe4e50c-b78b-4414-bdd6-1b7addfdd8b4",
  name: "Green Grill \u0026 Tap",
  type: "Brazilian",
  description:
    "We earn the loyalty of the people we serve by first anticipating, then fulfilling their needs with our superior-quality products,a unique shopping experience, customer-focused service and continuous innovation,while generating long-term profitable growth for our shareholders.",
  review:
    "For dinner we ordered the shrimp enchiladas, chicken enchiladas, chicken burrito, chimichangas, and steak quesadillas. Everything was so tasty and amazing. I wasnt surprised because the food at the FiDi location is the best so I figured this location would be just as good and it was!!! The enchiladas with the green sauce is to die for. My go to at the FiDi location is usually the chicken enchiladas but I decided to try something new and the shrimp enchiladas did not disappoint.",
  logo: "https://loremflickr.com/500/500/restaurant",
  phone_number: "890-234-7743 x30701",
  address: "Apt. 641 8947 Russell Passage, Port Jerroldborough, NH 03030",
  hours: {
    monday: {
      opens_at: "10:35 AM",
      closes_at: "6:50 PM",
      is_closed: false,
    },
    tuesday: {
      opens_at: "11:25 AM",
      closes_at: "9:14 PM",
      is_closed: false,
    },
    wednesday: {
      opens_at: "6:13 AM",
      closes_at: "12:52 PM",
      is_closed: false,
    },
    thursday: {
      opens_at: "6:24 AM",
      closes_at: "4:43 PM",
      is_closed: false,
    },
    friday: {
      opens_at: "7:18 AM",
      closes_at: "12:22 PM",
      is_closed: true,
    },
    saturday: {
      opens_at: "6:25 AM",
      closes_at: "6:54 PM",
      is_closed: false,
    },
    sunday: {
      opens_at: "10:34 AM",
      closes_at: "10:58 PM",
      is_closed: false,
    },
  },
};

export default function Restaurant() {
  return (
    <div className="restaurantDiv">
      <div className="restaurant">
        <div className="logo">
          <img src={restaurant.logo} alt="awesome img" />
        </div>

        <div className="restaurantInfo">
          <div className="restaurantNameType">
            <h1 className="restaurantName">{restaurant.name}</h1>
            <h2 className="restaurantName">{restaurant.type}</h2>
          </div>

          <div className="restaurantDesc">{restaurant.description}</div>
          <div className="restaurantAddress">{restaurant.address}</div>
          <div className="restaurantDays">
            {Object.keys(restaurant.hours).map((day) => (
              <p
                key={day}
                style={{
                  color: restaurant.hours[day].is_closed ? "tomato" : "green",
                }}
                className="day"
              >
                {day}{" "}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
