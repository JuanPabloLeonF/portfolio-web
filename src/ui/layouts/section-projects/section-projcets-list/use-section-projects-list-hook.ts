import { useContext, useEffect } from "react";
import { TypeProject } from "../../../../domain/models/project";
import { ActionsProjects } from "../context/actions/projects";
import { ProjectContextCreate } from "../context/project-context";

export const useSectionProjectsListHook = () => {

    const {
        tecnologySelected,
        projectsList,
        filteredListProjects,
        dispatch
      } = useContext(ProjectContextCreate);

      useEffect(() => {
        dispatch(ActionsProjects.setHandlerFilterListProjects(projectsList, tecnologySelected));
      }, [tecnologySelected]);
    
      const handleProjectSelected = (data: TypeProject) => {
        dispatch(ActionsProjects.setProjectSelected(data));
      }
    
    const isProjectFiltered = (project: TypeProject): boolean => {
        return projectsList.includes(project);
    }
    
    const handleScrollToTargetProjectSelected = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
        const target = document.getElementById('container-selected-project');
        const offset = 56;

        if (target) {
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({
            top,
            behavior: 'smooth',
            });
        }
    };

    return {
        tecnologySelected,
        projectsList,
        filteredListProjects,
        handleProjectSelected,
        isProjectFiltered,
        handleScrollToTargetProjectSelected,
    }
}