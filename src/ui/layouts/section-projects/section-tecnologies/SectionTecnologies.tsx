import './SectionTecnologies.css';
import { SvgTecnology } from '../../../components/svg-tecnology/SvgTecnology';
import { useSectionTecnologiesHook } from './use-section-tecnologies-hook';

export const SectionTecnologies: React.FC = () => {

  const { tecnologiesList, tecnologySelected, handleClickSectionTecnologies } = useSectionTecnologiesHook();

  return (
    <section className="section-tecnologies">
      <h2>PROYECTOS</h2>
      <div className="container-items">
        {tecnologiesList.map((tecnology, index) => (
          <SvgTecnology
            key={index}
            data={tecnology}
            dataSelected={tecnologySelected === tecnology}
            onDataSelectedOutput={() => handleClickSectionTecnologies(tecnology)}
          />
        ))}
      </div>
    </section>
  );
};