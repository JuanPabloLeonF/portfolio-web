export const useSectionProjectsHook = () => {

    const handleScrollToTargetBack = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
        const target = document.getElementById('container-projects');
        const offset = 56;
    
        if (target) {
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
    
            window.scrollTo({
            top,
            behavior: 'smooth',
            });
        }
    };

    return {
        handleScrollToTargetBack
    }
}