import React, { useState, useCallback } from "react";
import "./ImageSection.css";
import ImageViewer from "react-simple-image-viewer";
import Images from "./Images";

function ImageSection() {
  const [images, setData] = useState(Images);

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="imageSection">
      {images.map((src, index) => (
        <div
          className="frame"
          src={src}
          onClick={() => openImageViewer(index)}
          height="300"
          key={index}
          style={{ margin: "2px" }}
        >
          <img
            src={src}
            onClick={() => openImageViewer(index)}
            height="300"
            key={index}
            style={{ margin: "2px" }}
            alt=""
            display="flex"
            flexFlow="row wrap"
            justifyContent="center"
          />
        </div>
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
          }}
          closeOnClickOutside={true}
        />
      )}
    </div>
  );
}

export default ImageSection;
