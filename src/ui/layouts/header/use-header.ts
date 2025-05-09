import { useEffect, useState } from "react";
import { getSystemTheme, TypeTheme, TypeThemeInit, applyTheme } from "../../../domain/utilsmodstheme";

export const useHeader = () => {
    
    const [activateMenu, setActivateMenu] = useState(false);
    const [activateMenuBurguer, setActivateMenuBurguer] = useState(false);
    const [typeMod, setTypeMod] = useState<string>(getSystemTheme());
    const typeTheme: TypeTheme = TypeThemeInit;


    const isActive = (anchor: string) => {
        const hash = globalThis.location.hash;
        return hash === anchor;
    };

    const handleActivateMenuTheme = (value: boolean) => {
    setActivateMenu(value);
    };

    const handleActivateMenuBurguer = (value: boolean) => {
    setActivateMenuBurguer(value);
    };

    const handleClickOutside = (event: MouseEvent) => {
    const themeMenu = document.querySelector('.container-themes');
    const burguerMenu = document.querySelector('.nav-responsive');
    const themeButton = document.querySelector('.container-mod-theme');
    const burguerButton = document.querySelector('.container-img-menu');

    if (themeMenu && !themeMenu.contains(event.target as Node) && themeButton && !themeButton.contains(event.target as Node) && activateMenu) {
        setActivateMenu(false);
    }

    if (burguerMenu && !burguerMenu.contains(event.target as Node) && burguerButton && !burguerButton.contains(event.target as Node) && activateMenuBurguer) {
        setActivateMenuBurguer(false);
    }
    };


    const handleChangeTypeTheme = (value: string, event: React.MouseEvent): void => {
        event.stopPropagation();
        switch (value) {
            case (typeTheme.light):
                setTypeMod(applyTheme(value))
                setActivateMenu(false);
                setActivateMenuBurguer(false);
                break;
            case (typeTheme.dark):
                setTypeMod(applyTheme(value))
                setActivateMenu(false);
                setActivateMenuBurguer(false);
                break;
            case (typeTheme.reset):
                setTypeMod(applyTheme(value))
                setActivateMenu(false);
                setActivateMenuBurguer(false);
                break;
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [activateMenu, activateMenuBurguer, isActive]);

    return {
        activateMenu,
        activateMenuBurguer,
        typeMod,
        typeTheme,
        handleActivateMenuTheme,
        handleActivateMenuBurguer,
        handleChangeTypeTheme,
        isActive
    };
};
