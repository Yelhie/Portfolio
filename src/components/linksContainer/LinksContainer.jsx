import "./linksContainer.scss";

export const LinksContainer = () => {
  const googleFormsURL =
    "https://docs.google.com/forms/d/e/1FAIpQLSdDQO2FWg_MadGhQb3mFEi9u5ITjp4s821RNiShXx2sOHcMYg/viewform?usp=sf_link";

  return (
    <div className="link-container-icones">
      <a
        href="https://github.com/Yelhie"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="link-icones"
          src="https://yelhie.github.io/Portfolio/assets/icones/github.webp"
          alt="icone github"
        />
      </a>
      <a
        href="https://bsky.app/profile/yelhie.bsky.social"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="link-icones"
          src="https://yelhie.github.io/Portfolio/assets/icones/blueky.webp"
          alt="icone bluesky"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/maelle-girard/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="link-icones"
          src="https://yelhie.github.io/Portfolio/assets/icones/linkedin.webp"
          alt="icone linkedin"
        />
      </a>
      <a href={googleFormsURL} target="_blank" rel="noopener noreferrer">
        <img
          className="link-icones"
          src="https://yelhie.github.io/Portfolio/assets/icones/email.webp"
          alt="icone email - Envoyer un email"
        />
      </a>
    </div>
  );
};
