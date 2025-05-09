import "./SectionContact.css";
import { AnlaceSvg } from '../../components/anlace-svg/AnlaceSvg';
import { Form } from "./form/Form";

export const SectionContact = () => {
  

  return (
    <section id="contact" className="contact">
      <Form/>
      <div className="container-information">
        <h2>Estás interesado en trabajar conmigo, No dudes en contactarme.</h2>
        <p>
          ¡Me encantaría saber de ti! Ya sea que tengas una idea de proyecto, necesites ayuda con el desarrollo web o simplemente quieras charlar sobre tecnología, no dudes en ponerte en contacto.
        </p>
        <div className="container-redes">
          <AnlaceSvg icon='fab fa-linkedin-in' link='https://www.linkedin.com/in/juanpablole%C3%B3nf/' title='Linkedin' />
          <AnlaceSvg icon='fab fa-github' link='https://github.com/juanpabloleonf' title='Github' />
          <AnlaceSvg icon='fab fa-whatsapp' link='https://wa.me/573228843600' title='Telefono' />
          <AnlaceSvg icon='fas fa-envelope' link='mailto:fonseca123papo@gmail.com' title='Correo' />
        </div>
      </div>
    </section>
  );
};