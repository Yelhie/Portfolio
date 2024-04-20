import "./technoCard.scss";

export const TechnoCard = ({ technologie }) => {
  return (
    <div className="Card">
      <img
        className="icone"
        // src={process.env.PUBLIC_URL + technologie.icone}
        // src={`/src/assets/icones/${technologie.icone}`}

        src={`https://yelhie.github.io/Portfolio/assets/icones/${technologie.icone}`}
        alt={technologie.icone}
      />
      <p className="langagename">{technologie.nomdulangage}</p>
      <p className="level">{technologie.level}</p>
    </div>
  );
};
