import "./SectionAbout.css";
import { useState, useEffect } from "react";
import { ButtonAnlace } from '../../components/button-anlace/ButtonAnlace';
import { SectionGalery } from "../../components/galery/SectionGalery";

const initialImages = [
  "images/tecnologo.png",
  "images/angularcurso.png",
  "images/gitgithubcurso.png",
  "images/mongodb-curso.png",
  "images/pythonflaskcurso.png",
  "images/sqlcurso.png",
  "images/typescriptcurso.png",
  "images/vainillawebcurso.png"
];


export const  SectionAbout = () => {

  const [images, setImages] = useState(initialImages.slice(0, 4));
  const [allImages] = useState(initialImages);
  const [replaceIndex, setReplaceIndex] = useState(0);
  const [isVisible, setIsVisible] = useState([true, true, true, true]);
  const [isActivateGalery, setIsActivateGalery] = useState(false);

  const handlerActivateGalery = () => {
    setIsActivateGalery(!isActivateGalery);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible((prevVisible) => {
        const newVisible = [...prevVisible];
        newVisible[replaceIndex] = false;
        return newVisible;
      });

      setTimeout(() => {
        setImages((prevImages) => {
          const newImages = [...prevImages];
          newImages[replaceIndex] = allImages[(replaceIndex + 4) % allImages.length];
          return newImages;
        });
        setIsVisible([true, true, true, true]);
        setReplaceIndex((prevIndex) => (prevIndex + 1) % 4);
      }, 500);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [allImages, replaceIndex]);

  return (
    <section id='about' className="about">
      <div className="container-about-main">
        <div className="container-img-about">
          <img src="/images/img-perfil.webp" alt="Foto de perfil" />
        </div>
        <div className="contaner-title-about">
          <div className="container-title">
            <h2>Juan Pablo León Fonseca</h2>
            <p>
              Desarrollador de <strong className="strong-color">sistemas web</strong>, utilizando diversas tecnologías de <strong className="strong-color">backend</strong> y <strong className="strong-color">frontend</strong> para crear soluciones robustas.
            </p>
          </div>
          <div className="container-buttons">
            <ButtonAnlace hrefAnlace='#contact' titleButton='¿Quién soy?' titleAnlace='Contactame' />
          </div>
        </div>
      </div>
      <div id="container-about-information" className="container-about-information">
        <div className="container-information">
          <h2>Quién soy? . . .</h2>
          <div className="about-me">
            <p>
              Soy un desarrollador web con una profunda pasión por la creación de soluciones digitales innovadoras. Mi formación como <strong className="strong-color">Tecnólogo en Análisis y Desarrollo de Software</strong> en el <strong className="strong-color">SENA</strong> - <strong className="strong-color">Servicio nacional de aprendizaje</strong> me ha proporcionado una base sólida en el desarrollo de aplicaciones web tanto en el backend como en el frontend.
            </p>

            <p>
              En el ámbito del backend, poseo conocimiento de <strong className="strong-color">Python</strong> y sus frameworks <strong className="strong-color">Flask</strong> y <strong className="strong-color">FastAPI</strong>, lo que me permite construir APIs REST robustas y eficientes, utilizando <strong className="strong-color">JWT</strong> para la autenticación y autorización. Mi experiencia se extiende a la gestión de bases de datos relacionales como <strong className="strong-color">PostgreSQL</strong> y <strong className="strong-color">MySQL</strong>, así como bases de datos NoSQL como <strong className="strong-color">MongoDB</strong>. Además, estoy familiarizado con los principios de programación asíncrona, lo que me permite optimizar el rendimiento de las aplicaciones.
            </p>

            <p>
              En el frontend, tengo experiencia en el desarrollo de interfaces de usuario atractivas y funcionales utilizando <strong className="strong-color">React</strong>, <strong className="strong-color">Angular</strong>, <strong className="strong-color">HTML</strong>, <strong className="strong-color">CSS</strong>, <strong className="strong-color">JavaScript</strong> y <strong className="strong-color">TypeScript</strong>. Mi flujo de trabajo se complementa con el uso de herramientas de control de versiones como <strong className="strong-color">Git</strong> y <strong className="strong-color">GitHub</strong>, y la implementación de contenedores con <strong className="strong-color">Docker</strong> para facilitar el despliegue de proyectos. Además, tengo conocimientos en la <strong className="strong-color">arquitectura hexagonal</strong>, que me permite escribir código limpio y mantenible.
            </p>

            <p>
              Mi objetivo es continuar creciendo como desarrollador y contribuir a proyectos que tengan un impacto positivo. Estoy siempre dispuesto a aprender nuevas tecnologías y enfrentar desafíos que me permitan expandir mis habilidades.
            </p>
          </div>
          <a href="#container-projects" rel="noopener noreferrer">
            Proyectos
          </a>
        </div>
        <div onClick={handlerActivateGalery} className="container-img-information">
          {images.map((imageUrl, index) => (
            <div key={index} className={isVisible[index] ? '' : 'fade-out'}>
              <img src={imageUrl} alt={`Imagen de perfil ${index + 1}`} style={{ transition: 'opacity 0.5s ease-in-out' }} />
            </div>
          ))}
        </div>
      </div>
      {isActivateGalery && <SectionGalery images={initialImages} setIsActivateGalery={setIsActivateGalery}/>}
    </section>
  );
}