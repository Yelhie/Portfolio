import { About } from "../../components/about/About";
import { ProjectsContainer } from "../../components/projectscontainer/ProjectsContainer";
import { TechnosContainer } from "../../components/technoscontainer/TechnosContainer";

export const HomePage = () => {
  return (
    <>
      <About />
      <ProjectsContainer />
      <TechnosContainer />
    </>
  );
};
