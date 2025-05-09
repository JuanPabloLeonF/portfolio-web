import "./SectionProjects.css"
import { SectionTecnologies } from './section-tecnologies/SectionTecnologies';
import { SectionProjectsList } from './section-projcets-list/SectionProjectsList';
import { SectionSelectedProject } from './section-project-selected/SectionProjectSelected';

export const SectionProjects = () => {  

  return (
    <>
      <section id="container-projects" className="container-projects">
        <SectionTecnologies />
        <SectionProjectsList />
      </section>
      <section id="container-selected-project" className="container-selected-project">
        <SectionSelectedProject />
        <div className="demo-svg">
          <a href="#container-projects" rel="noopener noreferrer" title="Regresar">
            <i className="fas fa-play"></i>
          </a>
        </div>
      </section>
    </>
  );
};