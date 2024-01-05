import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gridImages from "../../assets/gridImages.jpg";

const GridImages = ({ isInView }) => {
  return (
    <Link to="/menu" className="group hidden lg:block">
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {
              ease: "easeInOut",
              duration: 1,
            },
          },
        }}
        initial={"hidden"}
        animate={isInView ? "visible" : "hidden"}
        className="relative"
      >
        <img src={gridImages} alt="" />
        <span className="absolute top-1/2 left-1/2 z-20 -translate-y-1/2 -translate-x-1/2 bg-white p-4 rounded-lg text-lg text-gray-700 text-center font-medium capitalize transition duration-300 group-hover:text-primary">
          explore <br /> our <br /> menu
        </span>
      </motion.div>
    </Link>
  );
};

export default GridImages;
