import './Header.css';
import { useHeader } from './use-header';

export const Header: React.FC = () => {
  const { 
    activateMenu, 
    activateMenuBurguer, 
    typeMod, 
    typeTheme,
    handleActivateMenuTheme, 
    handleActivateMenuBurguer,  
    handleChangeTypeTheme,
    isActive
  } = useHeader();

  return (
    <header>
      <h2 className="logo">JuanPabloLeonF.</h2>
      <nav className="nav-max">
      <a href="#init" rel="noopener noreferrer">
          Inicio
        </a>
        <a href="#container-projects" rel="noopener noreferrer">
          Proyectos
        </a>
        <a href="#about" rel="noopener noreferrer">
          Sobre mi
        </a>
        <a href="#contact" rel="noopener noreferrer">
          Contacto
        </a>
        <div onClick={() => handleActivateMenuTheme(!activateMenu)} className="container-mod-theme">
          <img
            className={`theme-${typeMod === typeTheme.light ? 'light' : 'dark'}`}
            src={typeMod === typeTheme.dark ? '/images/sun.svg' : '/images/moon.svg'}
            alt="Cambiar tema"
          />
          <div className={`container-themes ${activateMenu ? 'activate' : ''}`}>
            <p onClick={(event) => handleChangeTypeTheme(typeTheme.light, event)}>Claro</p>
            <p onClick={(event) => handleChangeTypeTheme(typeTheme.dark, event)}>Oscuro</p>
            <p onClick={(event) => handleChangeTypeTheme(typeTheme.reset, event)}>Sistema</p>
          </div>
        </div>
      </nav>
      <nav className={`nav-responsive ${activateMenuBurguer ? 'activate' : ''}`}>
        <a href="#init" rel="noopener noreferrer">
          Inicio
        </a>
        <a href="#container-projects" rel="noopener noreferrer">
          Proyectos
        </a>
        <a href="#about" rel="noopener noreferrer">
          Sobre mi
        </a>
        <a href="#contact" rel="noopener noreferrer">
          Contacto
        </a>
        <div onClick={() => handleActivateMenuTheme(!activateMenu)} className="container-mod-theme">
          <img
            className={`theme-${typeMod === typeTheme.light ? 'light' : 'dark'}`}
            src={typeMod === typeTheme.dark ? '/images/sun.svg' : '/images/moon.svg'}
            alt="Cambiar tema"
          />
          <div className={`container-themes ${activateMenu ? 'activate' : ''}`}>
            <p onClick={(event) => handleChangeTypeTheme(typeTheme.light, event)}>Claro</p>
            <p onClick={(event) => handleChangeTypeTheme(typeTheme.dark, event)}>Oscuro</p>
            <p onClick={(event) => handleChangeTypeTheme(typeTheme.reset, event)}>Sistema</p>
          </div>
        </div>
      </nav>
      <div onClick={() => handleActivateMenuBurguer(!activateMenuBurguer)} className="container-img-menu">
        <img
          className={`theme-${typeMod === typeTheme.light ? 'light' : 'dark'}`}
          src="/images/menu.svg"
          alt="Menu"
        />
      </div>
    </header>
  );
};