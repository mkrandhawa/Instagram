import React from "react";
import { useState, useEffect } from "react";

const images = [
  "/images/feed.png",
  "/images/upload.png",
  "/images/message.png",
];

function Phones() {
  //Using States to create the slideshow

  const [image, setImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImage((image + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [image]);

  return (
    <article className="phoneHolder">
      <div className="slideshow">
        <div className="slideImage">
          <img src={images[image]} alt="Instagram feed"></img>
        </div>
      </div>
    </article>
  );
}

export default Phones;
