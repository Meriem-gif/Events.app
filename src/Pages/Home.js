import axios from "axios";
import React, { useEffect, useState } from "react";
import CardEvent from "../component/CardEvent/CardEvent";

import Search from "../component/Navbar/Navbar";
import "./Home.css";

const Home = () => {


const [event, setEvent] = useState([]);

  const fetchEvents = async () => {
    const { data } = await axios.get(
      `https://tlv-events-app.herokuapp.com/events/uk/london`
    );
  
    setEvent(data);
  };

  useEffect(()=>{
    fetchEvents();

  },[])
  return (
    <div>
      <Search />
    <div className="Home">
        {event && event.map((e)=>(
          <CardEvent 
            key={e.id}
            img={e.flyerFront}
            title={e.title}
            date={e.date}
            startTime={e.startTime}
            endTime={e.endTime}
            location={e.venue.name} id={undefined}          />
        ))}
      
    </div>
    </div>
  );
};
export default Home;