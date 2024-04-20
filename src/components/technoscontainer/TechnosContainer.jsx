import technodata from "../../data/technodata.json";
import { TechnoCard } from "../technoCard/TechnoCard";
import "./technosContainer.scss";

export const TechnosContainer = () => {
  return (
    <section id="section-technocontainer">
      <div className="techno-container">
        <h1>Langages et Technologies :</h1>
        <div className="technocontainer-cards">
          {technodata.map((technologie, index) => (
            <TechnoCard key={index} technologie={technologie} />
          ))}
        </div>
      </div>
    </section>
  );
};
