"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaAngleLeft, FaAngleRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ProjectImageCarousel = ({ path, count }) => {
  return (
    <Carousel
    className="rounded-lg overflow-hidden"
      interval={2000}
      autoPlay
      infiniteLoop
      stopOnHover
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      renderArrowPrev={(onClick, hasPrev, label) =>
        hasPrev && (
          <button
            className="absolute top-[calc(50%-25px)] left-4 z-[2] glass text-primary px-1 py-2 rounded-lg"
            onClick={onClick}
          >
            <FaAngleLeft className="text-3xl"/>
          </button>
        )
      }
      renderArrowNext={(onClick, hasNext, label) =>
        hasNext && (
          <button
            className="absolute top-[calc(50%-25px)] right-4 z-[2] glass text-primary px-1 py-2 rounded-lg"
            onClick={onClick}
          >
            <FaAngleRight className="text-3xl"/>
          </button>
        )
      }
    >
      {Array(count)
        .fill(null)
        .map((_, index) => (
          <div key={index}>
            <img className="aspect-video object-cover" src={`/projects/${path}/${index + 1}.png`} />
          </div>
        ))}
    </Carousel>
  );
};

export default ProjectImageCarousel;
