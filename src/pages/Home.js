import React from "react";
import ImageGallery from "../components/ImageGallery";
import HeaderImage from "../assets/HeaderImage.png";

function Home() {
  return (
    <div>
      <img src={HeaderImage} alt="HeaderImage" className="w-full h-1/2" />
      <ImageGallery />
    </div>
  );
}

export default Home;
