import { useContext } from "react";
import { TypeTecnology } from "../../../../domain/models/tecnology";
import { ActionsTechnologies } from "../context/actions/tecnologies";
import { ProjectContextCreate } from "../context/project-context";

export const useSectionTecnologiesHook = () => {

  const { tecnologiesList, tecnologySelected, dispatch } = useContext(ProjectContextCreate);

  const handleClickSectionTecnologies = (data: TypeTecnology) => {
    dispatch(ActionsTechnologies.setTechnologySelected(data));
  }

  return {
    tecnologiesList,
    tecnologySelected,
    handleClickSectionTecnologies
  }
    
}