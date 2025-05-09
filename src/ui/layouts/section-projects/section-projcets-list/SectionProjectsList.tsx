import "./SectionProjectsList.css"
import { TypeProject } from '../../../../domain/models/project';
import { TypeTecnology } from '../../../../domain/models/tecnology';
import { useSectionProjectsListHook } from "./use-section-projects-list-hook";

interface SectionProjectsList {
  tecnologySelected: TypeTecnology;
  filteredProjects: TypeProject[];
  projectSelectedOutput: (project: TypeProject) => void;
}

export const SectionProjectsList: React.FC = () => {

  const { 
    tecnologySelected,  
    filteredListProjects, 
    handleScrollToTargetProjectSelected, 
    handleProjectSelected, 
    isProjectFiltered 
  } = useSectionProjectsListHook();

  return (
    <section className="section-projects">
      {filteredListProjects.length === 0 && (
        <>
          <p className="p-list-nothing" style={{ color: tecnologySelected.color }}>
            🎉 Proximamente proyectos con {tecnologySelected.name} 🚀
          </p>
        </>
      )}
      {filteredListProjects.map((project, index) => (
        <div
          className="item"
          key={index}
          onClick={(event) => {
            handleScrollToTargetProjectSelected(event);
            handleProjectSelected(project);
          }}
          style={{
            border: isProjectFiltered(project) ? `1px solid ${tecnologySelected.color}` : '1px solid white'
          }}
        >
          <div className="container-img">
            <img src={project.urlImg} alt={project.title} />
          </div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div
            className="list-tecnologies"
            style={{
              borderTop: isProjectFiltered(project) ? `1px solid ${tecnologySelected.color}` : '1px solid white'
            }}
          >
            {project.tecnologiesList.map((tecnology, techIndex) => (
              <div key={techIndex} className="img-tecnology">
                <img src={tecnology.urlImg} alt={project.title} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};