# Portfolio Web

Un portfolio web moderno y profesional desarrollado con React, TypeScript y Vite.

## 🚀 Características

- **Diseño Moderno y Responsivo**
- **Modo Claro/Oscuro** con detección automática del tema del sistema
- **Secciones Principales**:
  - Header con navegación
  - Sección de inicio
  - Galería de proyectos
  - Acerca de mí
  - Formulario de contacto
- **Optimizado para SEO**
- **Rendimiento Optimizado**

## 🛠️ Tecnologías

- **Frontend**: React 19.1.0
- **Lenguaje**: TypeScript
- **Bundler**: Vite 6.3.1
- **Formularios**: React Hook Form 7.56.0
- **HTTP Client**: Axios 1.8.4
- **Linting**: ESLint 9.22.0

## ⚙️ CI/CD

Este proyecto cuenta con integración continua y despliegue continuo (CI/CD) usando **GitHub Actions**. En cada push o pull request a la rama `main`, automáticamente se:

- Instalan dependencias
- Construye la aplicación (build)
- Despliega el contenido de la carpeta `dist/` a GitHub Pages usando la rama `gh-pages`

El flujo está definido en `.github/workflows/deploy.yml`. ¡No necesitas hacer nada manualmente para publicar cambios!

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone [URL-del-repositorio]
cd portfolio-web
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## 🔧 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Compila TypeScript y construye la aplicación para producción
- `npm run lint`: Ejecuta el linter para verificar el código
- `npm run preview`: Vista previa de la versión de producción

## 📁 Estructura del Proyecto

```
portfolio-web/
├── public/           # Archivos estáticos
├── src/
│   ├── domain/      # Lógica de negocio y utilidades
│   ├── ui/          # Componentes de la interfaz
│   │   ├── app/     # Componente principal
│   │   ├── layouts/ # Secciones principales
│   │   └── ...      # Otros componentes
│   └── index.css    # Estilos globales
├── vite.config.ts   # Configuración de Vite
└── tsconfig.json    # Configuración de TypeScript
```

## 🎨 Temas

El portfolio incluye soporte para tema claro y oscuro:
- Detección automática del tema del sistema
- Persistencia de la preferencia del usuario
- Cambio dinámico sin recarga

## 🔍 ESLint y TypeScript

El proyecto está configurado con reglas estrictas de ESLint y TypeScript para mantener un código limpio y tipo-seguro. La configuración incluye:
- Reglas recomendadas de TypeScript
- Plugins específicos para React
- Validaciones de tipos en tiempo de desarrollo

## 🚀 Despliegue

Para construir la versión de producción:

```bash
npm run build
```

Los archivos de producción se generarán en el directorio `dist/`.

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

---

⭐️ ¡Si te gusta este proyecto, no olvides darle una estrella!
