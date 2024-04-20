import { useState, useEffect } from "react";
import projectsData from "../../data/projectsdata.json";
import { ProjectCard } from "../projectCard/ProjectCard";
import "./projectsContainer.scss";

export const ProjectsContainer = () => {
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterLangage, setFilterLangage] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (
        window.matchMedia("(max-width: 900px) and (min-width: 629px)").matches
      ) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(3);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredData = filterLangage
    ? projectsData.filter((projet) =>
        projet.langage.some((langage) => langage.libelle === filterLangage)
      )
    : projectsData;

  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleLangageFilter = (libelle) => {
    setFilterLangage(libelle);
    setCurrentPage(1);
  };

  return (
    <section id="section-projetcontainer">
      <div className="projetcontainer-maincontainer">
        <h1>Projets :</h1>
        <p id="line"></p>
        <div className="projetcontainer-filter">
          <label>Filtrer les projets : </label>
          <select
            onChange={(event) => handleLangageFilter(event.target.value)}
            value={filterLangage || ""}
          >
            <option value="">Tous</option>
            {[
              ...new Set(
                projectsData.flatMap((projet) =>
                  projet.langage.map((l) => l.libelle)
                )
              ),
            ].map((libelle, index) => (
              <option key={index} value={libelle}>
                {libelle}
              </option>
            ))}
          </select>
        </div>

        <div className="projetcontainer-cards">
          {currentItems.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="projetcontainer-pagination">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
