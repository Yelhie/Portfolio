import "./projectCard.scss";

export const ProjectCard = ({ project }) => {
  return (
    <div className="projectcard-container">
      <div className="projectcard-header">
        <h3 className="projectcard-title">{project.title}</h3>
        <p className="projectcard-date">{project.date}</p>
        <img
          className="projectcard-img"
          src={`https://yelhie.github.io/Portfolio/assets/photos/${project.cover}`}
          alt={project.title}
        />
      </div>

      <div className="projectcard-body">
        <p className="projectcard-description">{project.description}</p>
        <div className="projectcard-tagcontainer">
          <div className="projectcard-tag">
            {project.langage.map((langage, index) => (
              <p key={`langage_${index}`} className={langage.class}>
                {langage.libelle}
              </p>
            ))}

            {project.librairie.map((librairie, index) => (
              <p key={`librairie_${index}`} className={librairie.class}>
                {librairie.libelle}
              </p>
            ))}
          </div>
        </div>
        <div className="projectcard-skillcontainer">
          {project.competences.map((competences, index) => (
            <li key={index}> ➥ {competences}</li>
          ))}
        </div>
      </div>

      <div className="projetcard-footer">
        <div className="button-container">
          <div>
            {project.link.map((item, index) => (
              <div key={index}>
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>Github</button>
                  </a>
                )}
                {item.site && (
                  <a href={item.site} target="_blank" rel="noopener noreferrer">
                    <button>Site Web</button>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
