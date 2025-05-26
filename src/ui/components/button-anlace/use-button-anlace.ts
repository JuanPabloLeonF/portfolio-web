import { useState } from "react";
import pdfVidaHoja from "/pdfs/hoja-vida.pdf"

export const useButtonAnlace = () => {
    const [activateStylesButton, setActivateStylesButton] = useState(false);
    const [activateStylesLink, setActivateStylesLink] = useState(false);

    const handlerViewPDF = () => {
        globalThis.open(pdfVidaHoja, '_blank');
    }

    const onScrollToTarget = (target: string) => {
        const contactContainer = document.querySelector<HTMLDivElement>(target);
        contactContainer?.scrollIntoView({ behavior: 'smooth' });
    };
    
    const onHover = (isHovered: boolean, element: string) => {
        if (isHovered) {
            if (element === 'button') {
            setActivateStylesLink(true);
            } else if (element === 'link') {
            setActivateStylesButton(true);
            }
        } else {
            if (element === 'button') {
            setActivateStylesLink(false);
            } else if (element === 'link') {
            setActivateStylesButton(false);
            }
        }
    };

    return {
        activateStylesButton,
        activateStylesLink,
        onHover,
        handlerViewPDF,
        onScrollToTarget
    }
}
