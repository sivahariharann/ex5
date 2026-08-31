import { useState } from "react";
import "./App.css";

import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";

function App() {
  const images = [image1, image2, image3];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Next image
  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  // Previous image
  const previousImage = () => {
    setCurrentIndex(
      (currentIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="container">
      <h1>Image Carousel</h1>

      <div className="carousel">

        <button className="prev" onClick={previousImage}>
          ❮
        </button>

        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
        />

        <button className="next" onClick={nextImage}>
          ❯
        </button>

      </div>

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? "dot active" : "dot"}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>

      <p>
        Image {currentIndex + 1} of {images.length}
      </p>
    </div>
  );
}

export default App;
