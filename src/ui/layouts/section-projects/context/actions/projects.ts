import { TypeProject } from "../../../../../domain/models/project";
import { TypeTecnology } from "../../../../../domain/models/tecnology";
import { ProjectAction } from "./actions-projects";
import { EnumEnviromentsProjectsReducer } from "./enviroments-projects-reducer";

export class ActionsProjects {

  public static setProjectSelected = (project: TypeProject): ProjectAction => {
    return {
      type: EnumEnviromentsProjectsReducer.SET_PROJECT_SELECTED,
      payload: project
    };
  };

  public static setHandlerFilterListProjects = (listProjects: TypeProject[], data: TypeTecnology): ProjectAction => {

    const listFiltered: TypeProject[] = listProjects.filter(project =>
      project.tecnologiesList.some(
        tecnology => tecnology.name.toLowerCase() === data.name.toLowerCase()
      )
    );

    return {
      type: EnumEnviromentsProjectsReducer.SET_FILTERED_LIST_PROJECTS_BY_TECNOLOGY_SELECTED,
      payload: listFiltered
    }
  }
  
}