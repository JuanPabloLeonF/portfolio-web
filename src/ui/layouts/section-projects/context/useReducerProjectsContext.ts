import React from "react";
import { ProjectAction } from "./actions/actions-projects";
import { EnumEnviromentsProjectsReducer } from "./actions/enviroments-projects-reducer";
import { listProjects, TypeProject } from "../../../../domain/models/project";
import { tecnologies, TypeTecnology } from "../../../../domain/models/tecnology";

export interface ProjectsState {
  projectSelected: TypeProject;
  tecnologySelected: TypeTecnology;
  projectsList: TypeProject[];
  filteredListProjects: TypeProject[];
  tecnologiesList: TypeTecnology[];
  dispatch: React.Dispatch<ProjectAction>
} 

export const initialProjectState: ProjectsState = {
  projectSelected: listProjects[0],
  tecnologySelected: tecnologies[0],
  filteredListProjects: listProjects,
  projectsList: listProjects,
  tecnologiesList: tecnologies,
  dispatch: () => {}
}

export const useReducerProjectsContext: React.Reducer<ProjectsState, ProjectAction> = (state, action) => {
  switch (action.type) {
    case EnumEnviromentsProjectsReducer.SET_PROJECT_SELECTED:
      return {
        ...state,
        projectSelected: action.payload
      }
    case EnumEnviromentsProjectsReducer.SET_TECHNOLOGY_SELECTED:
      return {
        ...state,
        tecnologySelected: action.payload
      }
    case EnumEnviromentsProjectsReducer.SET_FILTERED_LIST_PROJECTS_BY_TECNOLOGY_SELECTED:
      return {
        ...state,
        filteredListProjects: action.payload
      }
    default:
      return state;
  }
};