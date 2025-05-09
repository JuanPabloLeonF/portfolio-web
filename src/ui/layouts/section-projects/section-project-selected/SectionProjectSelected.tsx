import "./SectionProjectSelected.css"
import { useContext } from "react";
import { ProjectContextCreate } from "../context/project-context";
import { AnlaceSvg } from "../../../components/anlace-svg/AnlaceSvg";

export const SectionSelectedProject: React.FC = () => {

  const { projectSelected } = useContext(ProjectContextCreate);

  return (
    <div className="container-selected-project-2">
      <div className="container-img">
        <img src={projectSelected.urlImg} alt={projectSelected.title}/>
      </div>
      <div className="container-information">
        <h2>{projectSelected.title}</h2>
        <p>{projectSelected.description}</p>
        <div className="container-list-tecnologies">
          {projectSelected.tecnologiesList.map((tecnology, index) => (
            <div key={index} className="container-tecnology">
              <p>{tecnology.name}</p>
            </div>
          ))}
        </div>
        <div className="container-red">
          <AnlaceSvg link={projectSelected.urlRepositoryGit} title="Repositorio github" icon="fab fa-github"/>
          <AnlaceSvg link={projectSelected.urlDemo} title="Demo" icon="fas fa-play"/>
        </div>
      </div>
    </div>
  );
};
