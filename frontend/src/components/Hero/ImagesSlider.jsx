import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ImagesSlider = () => {
  const images = [
    {
      id: 1,
      src: "https://swigo.dexignzone.com/xhtml/assets/images/main-slider/slider2/pic1.png",
    },
    {
      id: 2,
      src: "https://swigo.dexignzone.com/xhtml/assets/images/main-slider/slider2/pic2.png",
    },
    {
      id: 3,
      src: "https://swigo.dexignzone.com/xhtml/assets/images/main-slider/slider2/pic3.png",
    },
  ];

  const [activeImage, setActiveImage] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveImage((prevIndex) => (prevIndex % images.length) + 1);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div>
      <AnimatePresence>
        {images.map((image) => (
          <>
            {activeImage === image.id && (
              <motion.img
                key={image.id}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale:1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                src={image.src}
                className="col-span-1"
              />
            )}
          </>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ImagesSlider;
