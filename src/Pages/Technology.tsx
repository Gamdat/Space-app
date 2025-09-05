import { useState } from "react";
import data from "../data.json";
import type { Technology } from "../types";
import "./Technology.css";


function TechnologyPage() {
  const tech: Technology[] = data.technology;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="technology">
      <h5><span>03</span> SPACE LAUNCH 101</h5>
      <div className="technology__content">
         <img src={tech[activeIndex].images.portrait} alt={tech[activeIndex].name} />
        <div className="technology__tabs">
          {tech.map((_, index) => (
            <button 
              key={index}
              className={activeIndex === index ? "active" : ""}
              onClick={() => setActiveIndex(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div>
          <h4>The Terminology...</h4>
          <h2>{tech[activeIndex].name}</h2>
          <p>{tech[activeIndex].description}</p>
        </div>
      </div>
    </main>
  );
}

export default TechnologyPage;

