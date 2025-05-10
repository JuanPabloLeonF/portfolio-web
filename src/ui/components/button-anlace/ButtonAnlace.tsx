import './ButtonAnlace.css';
import { useButtonAnlace } from './use-button-anlace';

export const ButtonAnlace: React.FC<{titleButton: string, titleAnlace: string}> = ({titleButton, titleAnlace}) => {

    const { activateStylesButton, activateStylesLink, onHover, handlerViewPDF, onScrollToTarget } = useButtonAnlace();

    return (
        <>
            <div
                onClick={titleButton === "¿Quién soy?" ? () => onScrollToTarget('#container-about-information') : handlerViewPDF}
                className={`button-fine ${activateStylesButton ? 'activate' : ''}`}
                onMouseEnter={() => onHover(true, 'button')}
                onMouseLeave={() => onHover(false, 'button')}
            >
                <p className='p'>{titleButton}</p>
            </div>
            <div
                onClick={() => onScrollToTarget('#contact')}
                className={`button ${activateStylesLink ? 'activate' : ''}`}
                onMouseEnter={() => onHover(true, 'link')}
                onMouseLeave={() => onHover(false, 'link')}
            >
                <p className='p'>{titleAnlace}</p>
            </div>
        </>
    )
}