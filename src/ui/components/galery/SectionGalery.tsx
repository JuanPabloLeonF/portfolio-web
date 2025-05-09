import "./SectionGalery.css"
import { useState } from "react";

export const SectionGalery = ({images, setIsActivateGalery}: {images: string[], setIsActivateGalery: React.Dispatch<React.SetStateAction<boolean>>}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlerLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }

    const handlerRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    const containerImgGaleryStyle = {
        transform: `translateX(-${currentIndex * 100}%)`,
    };

    return (
        <section className="container-galery">
            <i className="fas fa-times" onClick={() => setIsActivateGalery(false)}></i>
            <div className="container-img-galery" style={containerImgGaleryStyle}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Image ${index + 1}`} />
                ))}
            </div>
            <div className="container-buttons-galery">
                <i onClick={handlerLeft} className="fas fa-chevron-left"></i>
                <i onClick={handlerRight} className="fas fa-chevron-right"></i>
            </div>
        </section>
    )
}