"use client";

import { CSSProperties, useEffect, useState } from "react";

const images = ["/ci.jpg", "/co.jpg", "/cb.jpg", "/cv.jpg", "/cx.jpg", "/cs.jpg"];
const imageSizes = [
  { width: 900, height: 500 },
  { width: 782, height: 410 },
  { width: 677, height: 453 },
  { width: 1366, height: 768 },
  { width: 612, height: 408 },
  { width: 684, height: 448 },
];

type StepImageSlideshowProps = {
  offset?: number;
  wide?: boolean;
};

export default function StepImageSlideshow({ offset = 0, wide = false }: StepImageSlideshowProps) {
  const [imageIndex, setImageIndex] = useState(offset % images.length);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setImageIndex((current) => (current + 1) % images.length);
    }, 30000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div
      className={wide ? "step-image-frame step-image-frame-wide" : "step-image-frame"}
      style={{ "--image-ratio": `${imageSizes[imageIndex].width} / ${imageSizes[imageIndex].height}` } as CSSProperties}
    >
      <div className="step-image-thumbnails" aria-label="Hotel learning images">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            className={`step-image-thumbnail ${index === imageIndex ? "step-image-thumbnail-active" : ""}`}
            onClick={() => setImageIndex(index)}
            aria-label={`Show image ${index + 1}`}
            aria-pressed={index === imageIndex}
          >
            <img src={image} alt="" />
          </button>
        ))}
      </div>
      <div className="step-image-stage">
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt="Hotel learning moment"
            className={`step-image ${index === imageIndex ? "step-image-active" : ""}`}
            aria-hidden={index !== imageIndex}
          />
        ))}
      </div>
    </div>
  );
}
