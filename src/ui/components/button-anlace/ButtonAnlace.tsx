import './ButtonAnlace.css';
import { useButtonAnlace } from './use-button-anlace';

export const ButtonAnlace: React.FC<{titleButton: string, titleAnlace: string, hrefAnlace: string}> = ({titleButton, titleAnlace, hrefAnlace}) => {

    const { activateStylesButton, activateStylesLink, onHover, handlerViewPDF, onScrollToTarget } = useButtonAnlace();

    return (
        <>
            <div
                style={{ 
                    height: titleButton === 'Descargar CV' ? '3rem' : '4rem',
                  }}
                onClick={titleButton === "¿Quién soy?" ? onScrollToTarget : handlerViewPDF}
                className={`button ${activateStylesButton ? 'activate' : ''}`}
                onMouseEnter={() => onHover(true, 'button')}
                onMouseLeave={() => onHover(false, 'button')}
            >
                <p className='p'>{titleButton}</p>
            </div>
            <a
                href={hrefAnlace}
                className={`anlace ${activateStylesLink ? 'activate' : ''}`}
                onMouseEnter={() => onHover(true, 'link')}
                onMouseLeave={() => onHover(false, 'link')}
                rel="noopener noreferrer"
            >
                {titleAnlace}
            </a>
        </>
    )
}