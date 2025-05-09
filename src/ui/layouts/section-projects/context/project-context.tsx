import React, { createContext, useReducer } from "react";
import { initialProjectState, ProjectsState, useReducerProjectsContext } from "./useReducerProjectsContext";


export const ProjectContextCreate: React.Context<ProjectsState> = createContext(initialProjectState);

export const ProjectContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {

  const [state, dispatch] = useReducer(useReducerProjectsContext, initialProjectState);

  return <ProjectContextCreate.Provider 
  value={{
    projectSelected: state.projectSelected,
    tecnologySelected: state.tecnologySelected,
    filteredListProjects: state.filteredListProjects,
    projectsList: state.projectsList,
    tecnologiesList: state.tecnologiesList,
    dispatch: dispatch
  }}
  >{children}</ProjectContextCreate.Provider>;
};