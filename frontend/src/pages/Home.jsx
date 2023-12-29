import Hero from "../components/Hero/Hero";
import About from "../components/AboutRestaurant";
import Features from "../components/Features";
import SpecialOffers from "../components/SpecialOffers/SpecialOffers";
import ReservationsSystem from "../components/ReservationsSystem/ReservationsSystem";

const Home = () => {
  return (
    <>
      <Hero />
      <SpecialOffers />
      <ReservationsSystem />
      <About />
      <Features />
    </>
  );
};

export default Home;
