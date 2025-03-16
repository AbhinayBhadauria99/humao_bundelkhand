import React, { useState, useEffect } from "react";
import image1 from "../images/damru.jpg";
import image2 from "../images/nagariya.jpg";
import image3 from "../images/admi_damru.jpg";
import "../styles/hero.css";

const Hero = () => {
  const images = [image1, image2, image3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % images.length);
    }, 3000); // Change image every 3000 milliseconds (3 seconds)

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  return (
    <section className="hero" style={{ backgroundImage: `url(${images[currentImage]})` }}>
      <div className="hero-content">
      <marquee scrollamount="10"><h1>"हमाओ बुंदेलखंड, <br />&emsp;&emsp; &emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;हमाओ संस्कार"</h1></marquee>
        {/* <p>
        Bundeli LokGeet encapsulate the vibrant culture and traditions of the Bundeli region, 
          resonating with themes of love, nature, and daily life. These folk songs are often 
          performed during festivals, weddings, and agricultural activities, using traditional 
          instruments that enrich their melodious tunes. They not only entertain but also preserve 
          the history and folklore of the area, passing down stories and wisdom from generation to generation.
        </p> */}
      </div>
    </section>
  );
};

export default Hero;
