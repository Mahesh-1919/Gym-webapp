import Hero from "./hero";
import About from "./about";
import Workout from "./Workouts";
import Contact from "./contact";
import Services from "./services";
import Prices from "./pricres";
const home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Workout />
      <Prices />
      <Contact />
    </>
  );
};

export default home;
