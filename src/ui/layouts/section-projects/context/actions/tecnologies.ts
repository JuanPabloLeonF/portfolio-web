import { TypeTecnology } from "../../../../../domain/models/tecnology";
import { ProjectAction } from "./actions-projects";
import { EnumEnviromentsProjectsReducer } from "./enviroments-projects-reducer";

export class ActionsTechnologies {
  public static setTechnologySelected = (technology: TypeTecnology): ProjectAction => {
    return {
        type: EnumEnviromentsProjectsReducer.SET_TECHNOLOGY_SELECTED,
        payload: technology
    }
  }
}