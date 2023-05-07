import { Box } from '@mantine/core';
import About from '../components/About';
import Contact from '../components/Contact';
import MyTimeLine from '../components/Timeline';
import Welcome from '../components/Welcome';

function Home() {
  return (
    <Box>
      <Welcome />

      <MyTimeLine />
      <About />
      <Contact/>
    </Box>
  );
}

export default Home;
