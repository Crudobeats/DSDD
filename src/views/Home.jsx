import { useContext } from "react";
import "../assets/css/home.css";
import { useState } from "react";

import MyContext from "../MyContext";

export default function Home() {
  const images = useContext(MyContext);

  const [favoritos, setFavoritos] = useState([]);

  const handleFavoriteClick = (image) => {
    const newFavoritos = [
      ...favoritos,
      {
        id: image.id,
        src: image.src.tiny,
        alt: image.alt,
        photographer: image.photographer,
        liked: image.liked,
      },
    ];
    setFavoritos(newFavoritos);
  };

  return (
    <div className="grid-container">
      {images.map((image) => (
        <div className="card" key={image.id}>
          <img
            src={image.src.tiny}
            alt={image.alt}
            onClick={() => handleFavoriteClick(image)}
          />
          <div className="card-info">
            <p className="photographer">{image.photographer}</p>
            <button onClick={() => handleFavoriteClick(image)}>Agregar a favoritos</button>
          </div>
        </div>
      ))}
    </div>
  );
}
