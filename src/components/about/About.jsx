import { LinksContainer } from "../linksContainer/LinksContainer";
import "./about.scss";

export const About = () => {
  return (
    <section id="section-about">
      <div className="about-container">
        <h1>A propos de moi :</h1>
        <p id="line"></p>
        <div className="about-container-top">
          <div className="about-container-infos">
            <p className="about-text-name">Maëlle Girard</p>
            <p className="about-text-titre">Développeuse Web</p>
            <p className="about-text-satut">
              ● Available for new opportunities
            </p>
            <LinksContainer />
            <p className="about-text">
              Passionnée par la création numérique et le développement web,
              j&apos;ai travaillé sur une variété de projets, allant de sites
              web responsives à des applications innovantes en JavaScript, React
              et Python.
              <br />
              <br />
              Explorez mon portfolio pour découvrir mes réalisations et les
              compétences que j&apos;ai développées durant mon parcours en
              constante évolution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
