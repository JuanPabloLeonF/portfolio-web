import './SectionInit.css';
import { AnlaceSvg } from '../../components/anlace-svg/AnlaceSvg';
import { ImgPerfil } from '../../components/img-perfil/ImgPerfil';
import { ButtonAnlace } from '../../components/button-anlace/ButtonAnlace';

export const SectionInit: React.FC = () => {

  return (
    <div id='init' className="container-main">
      <section className="container-description">
        <h1>Hola, Soy Juan Pablo León</h1>
        <h2>
          <strong className="strong-color">Desarrollador de software</strong>
        </h2>
        <p>
          Desarrollador web apasionado con experiencia en <strong className="strong-color">backend</strong> (<strong className="strong-color">Python</strong>, <strong className="strong-color">Flask</strong>, <strong className="strong-color">FastAPI</strong>) y <strong className="strong-color">frontend</strong> (<strong className="strong-color">React</strong>, <strong className="strong-color">Angular</strong>). Especializado en <strong className="strong-color">APIs REST</strong>, bases de datos (<strong className="strong-color">PostgreSQL</strong>, <strong className="strong-color">MySQL</strong>, <strong className="strong-color">MongoDB</strong>) y soluciones eficientes con <strong className="strong-color">Docker</strong> y <strong className="strong-color">arquitectura hexagonal</strong>.
        </p>
        <div className="contaner-buttons">
          <ButtonAnlace titleButton="Descargar CV" titleAnlace="Contactame" hrefAnlace="#contact" />
        </div>
        <div className="container-social">
          <AnlaceSvg link="https://www.linkedin.com/in/juanpabloleónf/" title="Linkedin" icon='fab fa-linkedin-in' />
          <AnlaceSvg link="https://github.com/juanpabloleonF" title="Github" icon='fab fa-github' />
          <ImgPerfil img="images/img-perfil.webp" title="Perfil" />
        </div>
      </section>
    </div>
  );
};
