export interface TypeTecnologyProject {
    urlImg: string;
    name: string;
}

export interface TypeProject {
    title: string;
    description: string;
    urlImg: string;
    urlRepositoryGit: string;
    urlDemo: string;
    tecnologiesList: TypeTecnologyProject[];
}

export const listProjects: TypeProject[] = [
    {
        title: "Cinemusic - Frontend",
        description: "(PROYECTO AUN EN DESARROLLO) - Cinemusic es una plataforma web interactiva desarrollada con Angular 19+ que ofrece una experiencia inmersiva para explorar y reproducir música de cine. Este proyecto destaca mi habilidad para construir aplicaciones web complejas y robustas, utilizando tecnologías modernas como TypeScript y RxJS para manejar la reactividad y la gestión de datos. La aplicación incluye un reproductor de música integrado, una interfaz atractiva y completamente responsiva, y soporte multilenguaje gracias a la biblioteca @ngx-translate. Este proyecto demuestra mi experiencia con el desarrollo de aplicaciones de una sola página (SPA), la arquitectura modular, y el uso de GitHub Actions para implementar un flujo de Integración y Despliegue Continuo (CI/CD). La plataforma está diseñada para ser escalable y de fácil mantenimiento, mostrando mi compromiso con las buenas prácticas de desarrollo.",
        urlRepositoryGit: "https://github.com/JuanPabloLeonF/cinemusic",
        urlDemo: "https://juanpabloleonf.github.io/cinemusic/",
        tecnologiesList: [
            {
                urlImg: "images/css.svg",
                name: "css"
            },
            {
                urlImg: "images/typescript.svg",
                name: "typescript"
            },
            {
                urlImg: "images/angular.svg",
                name: "angular"
            }
        ],
        urlImg: "images/cinemusic-frontend.png"
    },
    {
        title: "Proyecto tecnica",
        description: "Este proyecto, desarrollado con React JS y CSS puro, consistió en la maquetación responsiva de un e-commerce online especializado en productos tecnológicos. El objetivo fue crear una experiencia de usuario intuitiva y adaptable a diferentes dispositivos, permitiendo la visualización y compra de productos como cámaras, pantallas, CPUs, mouses, y otros dispositivos tecnológicos. Este proyecto destaca mi capacidad para trabajar con React, crear interfaces atractivas con CSS, y construir sitios web de comercio electrónico funcionales y responsivos.    ",
        urlRepositoryGit: "https://github.com/JuanPabloLeonF/project-tecnica/",
        urlDemo: "https://juanpabloleonf.github.io/project-tecnica/",
        tecnologiesList: [
            {
                urlImg: "images/react.svg",
                name: "react"
            },
            {
                urlImg: "images/css.svg",
                name: "css"
            },
            {
                urlImg: "images/javascript.svg",
                name: "javascript"
            }
        ],
        urlImg: "images/proyecto-tecnica.png"
    },
    {
        title: "Maquetacion web",
        description: "Este proyecto personal marcó un punto crucial en mi curva de aprendizaje como desarrollador web, enfocándome en el desarrollo de habilidades sólidas en maquetación web responsiva utilizando HTML y CSS como tecnologías principales. A través de la construcción de este sitio, profundicé en la implementación de layouts flexibles y dinámicos mediante el uso de Display Grid para estructuras complejas y Display Flexbox para la organización y alineación de elementos en una dimensión. Además, experimenté y comprendí a fondo el control del posicionamiento de elementos (relative, absolute, fixed) para lograr diseños precisos y efectos visuales deseados. Un aspecto fundamental de este proyecto fue la aplicación exhaustiva de Media Queries, lo que me permitió asegurar una experiencia de usuario consistente y optimizada en una amplia gama de dispositivos, desde pantallas de escritorio hasta tabletas y teléfonos móviles. Este proyecto representa mi dedicación a comprender los fundamentos del diseño responsivo y mi capacidad para aplicarlos de manera práctica.",
        urlRepositoryGit: "https://github.com/JuanPabloLeonF/aprendiendo-responsive",
        urlDemo: "https://juanpabloleonf.github.io/aprendiendo-responsive/",
        tecnologiesList: [
            {
                urlImg: "images/html.svg",
                name: "html"
            },
            {
                urlImg: "images/css.svg",
                name: "css"
            }
        ],
        urlImg: "images/maquetacion.png"
    },
    {
        title: "Juego de Preguntas Académicas",
        description: "Este proyecto es un juego interactivo de preguntas y respuestas diseñado para hacer el aprendizaje divertido y accesible. Desarrollado con HTML, CSS y JavaScript Vanilla, el juego ofrece una experiencia dinámica donde los usuarios pueden poner a prueba sus conocimientos en diversas materias como Ciencias, Química, Matemáticas, Español, Sociales y Biología. La aplicación cuenta con una interfaz atractiva y completamente responsiva, adaptándose perfectamente a cualquier dispositivo. Además, implementa un sistema de puntuación en tiempo real y retroalimentación inmediata, lo que hace que la experiencia sea más envolvente. Este proyecto demuestra mi habilidad para utilizar JavaScript puro en la creación de aplicaciones web funcionales y mi destreza en el diseño de experiencias de usuario intuitivas y visualmente agradables.",
        urlRepositoryGit: "https://github.com/JuanPabloLeonF/juego-academico",
        urlDemo: "https://juanpabloleonf.github.io/juego-academico/",
        tecnologiesList: [
            {
                urlImg: "images/html.svg",
                name: "html"
            },
            {
                urlImg: "images/css.svg",
                name: "css"
            },
            {
                urlImg: "images/javascript.svg",
                name: "javascript"
            }
        ],
        urlImg: "images/juego-academico.png"
    },
]
