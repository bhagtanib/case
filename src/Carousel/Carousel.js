import React, { useState } from "react";
import "./Carousel.css";
import Project from "../components/Project";

const Carousel = ({ items = [], itemsToShow = 1 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsToShow >= items.length ? 0 : prevIndex + itemsToShow
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsToShow < 0 ? items.length - itemsToShow : prevIndex - itemsToShow
    );
  };

  return (
    <div className="carousel-container">
      <button onClick={prevSlide} className="carousel-button left">
        ‹
      </button>
      <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}>
        {items.map((current, index) => (
          <div key={index} className="carousel-item" style={{ minWidth: `${100 / itemsToShow}%` }}>
            <Project index={index} currentProject={current} />
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="carousel-button right">
        ›
      </button>
    </div>
  );
};

export default Carousel;
