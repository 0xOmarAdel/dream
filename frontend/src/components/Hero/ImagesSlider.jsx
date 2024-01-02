import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ImagesSlider = () => {
  const images = [
    {
      id: 1,
      src: "https://cafeu.vercel.app/img/slider/baner1.png",
    },
    {
      id: 2,
      src: "https://cafeu.vercel.app/img/slider/baner.png",
    },
    {
      id: 3,
      src: "https://cafeu.vercel.app/img/slider/first-slider.png",
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
