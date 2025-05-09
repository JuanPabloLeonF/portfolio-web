import { TypeProject } from '../../../../../domain/models/project';
import { TypeTecnology } from '../../../../../domain/models/tecnology';
import { EnumEnviromentsProjectsReducer } from './enviroments-projects-reducer';

export type ProjectAction = {
  type: EnumEnviromentsProjectsReducer.SET_TECHNOLOGY_SELECTED;
  payload: TypeTecnology;
} | {
  type: EnumEnviromentsProjectsReducer.SET_PROJECT_SELECTED;
  payload: TypeProject;
} | {
  type: EnumEnviromentsProjectsReducer.SET_FILTERED_LIST_PROJECTS_BY_TECNOLOGY_SELECTED;
  payload: TypeProject[];
};