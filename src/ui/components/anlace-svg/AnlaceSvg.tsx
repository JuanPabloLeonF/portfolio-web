import './AnlaceSvg.css';

export const AnlaceSvg: React.FC<{link: string, title: string, icon: string}> = ({link, title, icon}) => {
  return (
    <a className='container-img-social' href={link} target="_blank" rel="noopener noreferrer" aria-label={title} title={title}>
        <i className={icon}></i>
    </a>
  );
};