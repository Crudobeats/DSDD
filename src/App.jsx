import "./styles.css";
import { useState } from "react";
import { useEffect } from "react";

import MyContext from "./MyContext"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

export default function App() {
  const endpoint = "/fotos.json";
  const [images, setImages] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => setImages(data.photos));
  }, []);



  return (
    <div className="App">
<MyContext.Provider value={images}>
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favoritos" element={<Favoritos favoritos={favoritos} />} />
    </Routes>
  </BrowserRouter>
</MyContext.Provider>

    </div>
  );
}
