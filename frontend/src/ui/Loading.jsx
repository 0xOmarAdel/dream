import Lottie from "lottie-react";
import BurgerAnimation from "../../assets/burger-animation.json";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Lottie animationData={BurgerAnimation} loop={true} />
    </div>
  );
}
