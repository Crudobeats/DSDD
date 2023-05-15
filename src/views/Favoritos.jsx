import { useState } from "react";
import Heart from "../components/Heart";

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {favoritos.map((favorito) => (
          <div className="card" key={favorito.id}>
            <img src={favorito.src} alt={favorito.alt} />
            <div className="card-info">
              <p className="photographer">{favorito.photographer}</p>
              <Heart filled={favorito.liked} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
