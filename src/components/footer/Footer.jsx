import { LinksContainer } from "../linksContainer/LinksContainer";
import "./footer.scss";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <p>Copyright © 2023, 2024 - Tous droits réservés</p>
        <LinksContainer />
      </div>
    </footer>
  );
};
