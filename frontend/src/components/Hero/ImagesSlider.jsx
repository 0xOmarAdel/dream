import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.png";

const ImagesSlider = () => {
  const images = [
    {
      id: 1,
      src: slider1,
    },
    {
      id: 2,
      src: slider2,
    },
    {
      id: 3,
      src: slider3,
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
    <div className="col-span-2 hidden lg:block">
      <AnimatePresence>
        {images.map((image) => (
          <div key={image.id}>
            {activeImage === image.id && (
              <motion.img
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                src={image.src}
              />
            )}
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ImagesSlider;
