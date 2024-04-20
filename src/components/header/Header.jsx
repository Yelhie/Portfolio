import "./header.scss";
import { useState, useEffect } from "react";

export const Header = ({ toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 899);
      if (window.innerWidth > 900) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header">
      <nav>
        {isMobile && (
          <button className="burger-icon" onClick={toggleMenu}>
            ☰
          </button>
        )}
        {(isMobile && isMenuOpen) || !isMobile ? (
          <div
            className={
              isMobile && isMenuOpen ? "link-container open" : "link-container"
            }
          >
            <a href="#section-about">A propos</a>
            <a href="#section-projetcontainer">Projets</a>
            <a href="#section-technocontainer">Technologies</a>
          </div>
        ) : null}
      </nav>

      <div className="darkmode-container">
        <div onClick={toggleDarkMode}>
          {document.documentElement.getAttribute("data-theme") === "light" ? (
            <img
              className="darkmode-icone"
              src="https://yelhie.github.io/Portfolio/assets/icones/moon.webp"
              alt="Moon Icon"
            />
          ) : (
            <img
              className="darkmode-icone"
              src="https://yelhie.github.io/Portfolio/assets/icones/sun.webp"
              alt="Sun Icon"
            />
          )}
        </div>
      </div>
    </header>
  );
};
