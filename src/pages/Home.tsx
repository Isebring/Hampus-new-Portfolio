import About from '../components/About';
import Contact from '../components/Contact';
import MyTimeLine from '../components/Timeline';
import Welcome from '../components/Welcome';

function Home() {
  return (
    <>
      <Welcome />
      <MyTimeLine />
      <About />
      <Contact />
    </>
  );
}

export default Home;
