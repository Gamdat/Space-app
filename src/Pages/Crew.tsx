import { useState } from "react";
import data from "../data.json";
import type { Crew } from "../types";
import "./Crew.css";

function CrewPage() {

  const crew: Crew[] = data.crew;

  const [activeIndex, setActiveIndex] = useState(0);



  return (

    <main className="crew">

      <h5><span>02</span> Meet your crew</h5>



      <div className="crew__content">

        <div>

          <h4>{crew[activeIndex].role}</h4>

          <h2>{crew[activeIndex].name}</h2>

          <p>{crew[activeIndex].bio}</p>

          <div className="crew__dots">

            {crew.map((_, index) => (

              <button 

                key={index} 

                className={activeIndex === index ? "active" : ""} 

                onClick={() => setActiveIndex(index)}

              />

            ))}

          </div>

        </div>

        <img src={crew[activeIndex].images.png} alt={crew[activeIndex].name} />

      </div>

    </main>

  );

}



export default CrewPage;

