import './ImgPerfil.css';

export const ImgPerfil: React.FC<{img: string, title: string}> = ({img, title}) => {
    return (
        <div className="container-img-person" title={title}>
            <img src={img} alt={title} />
        </div>
    )
}