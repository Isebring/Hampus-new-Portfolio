import About from "../components/About";
import Contact from "../components/Contact";
import Slider from "../components/Slider";
import MyTimeLine from "../components/Timeline";
import Welcome from "../components/Welcome";
import "../data/imgs";
import { imgs } from "../data/imgs";
import Skills from "./Skills";

function Home() {
  return (
    <>
      <Welcome />
      <MyTimeLine />
      <Slider slides={imgs} />
      <Skills />
      <About />
      <Contact />
    </>
  );
}

export default Home;
