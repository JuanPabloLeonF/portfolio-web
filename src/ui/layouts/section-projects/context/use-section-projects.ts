import { useState } from "react";
import { TypeProject, listProjects } from "../../../../domain/models/project";
import { TypeTecnology, tecnologies } from "../../../../domain/models/tecnology";

export const useSectionProjects = () => {
  
    const [projectsList] = useState<TypeProject[]>(listProjects);
    const [tecnologySelected, setTecnologySelected] = useState<TypeTecnology>(tecnologies[0]);
    const [filteredProjects, setFilteredProjects] = useState<TypeProject[]>(listProjects);
    const [projectSelected, setProjectSelected] = useState<TypeProject>(listProjects[0]);
    const [tecnologiesList] = useState<TypeTecnology[]>(tecnologies);

    const filteredProjectsListByTecnologySelected = (data: TypeTecnology) => {
        const filtered = projectsList.filter(project =>
            project.tecnologiesList.some(
            tecnology => tecnology.name.toLowerCase() === data.name.toLowerCase()
            )
        );
        setFilteredProjects(filtered);
    };

    const isProjectFiltered = (project: TypeProject): boolean => {
        return filteredProjects.includes(project);
    };

    const handleProjectSelected = (data: TypeProject) => {
        setProjectSelected(data);
    };

    const handleClickSectionTecnologies = (data: TypeTecnology) => {
        setTecnologySelected(data);
        filteredProjectsListByTecnologySelected(data);
    };

    const handleScrollToTargetBack = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
        const target = document.getElementById('container-projects');
        const offset = 80;

        if (target) {
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({
            top,
            behavior: 'smooth',
            });
        }
    };

    const handleScrollToTargetProjectSelected = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
        const target = document.getElementById('container-selected-project');
        const offset = 80;

        if (target) {
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({
            top,
            behavior: 'smooth',
            });
        }
    };

    return {
        projectsList,
        tecnologySelected,
        filteredProjects,
        projectSelected,
        tecnologiesList,
        handleProjectSelected,
        handleClickSectionTecnologies,
        handleScrollToTargetBack,
        handleScrollToTargetProjectSelected,
        isProjectFiltered
    };
}