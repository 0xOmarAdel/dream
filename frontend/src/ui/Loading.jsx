import Lottie from "lottie-react";
import BurgerAnimation from "../../src/assets/BurgerAnimation.json";

export default function Loading() {
  return (
    <div className="absolute inset-0 z-[100] w-full min-h-screen bg-gray-50 flex justify-center items-center">
      <Lottie animationData={BurgerAnimation} loop={true} className="w-36" />
    </div>
  );
}
