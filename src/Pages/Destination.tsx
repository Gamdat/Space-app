import { useState } from "react";
import data from "../data.json";
import type { Destination } from "../types";
import "./Destination.css";


function DestinationPage() {

  const destinations: Destination[] = data.destinations;

  const [activeIndex, setActiveIndex] = useState(0);


  return (

    <main className="destination">

      <h5><span>01</span> Pick your destination</h5>



      <div className="destination__tabs">

        {destinations.map((dest, index) => (

          <button 

            key={dest.name} 

            className={activeIndex === index ? "active" : ""} 

            onClick={() => setActiveIndex(index)}

          >

            {dest.name}

          </button>

        ))}

      </div>



      <div className="destination__info">

        <img src={destinations[activeIndex].images.png} alt={destinations[activeIndex].name} />

        <h2>{destinations[activeIndex].name}</h2>

        <p>{destinations[activeIndex].description}</p>

        <div className="destination__stats">

          <div>

            <h6>Avg. Distance</h6>

            <p>{destinations[activeIndex].distance}</p>

          </div>

          <div>

            <h6>Est. Travel Time</h6>

            <p>{destinations[activeIndex].travel}</p>

          </div>

        </div>

      </div>

    </main>

  );

}



export default DestinationPage;

