import {
  Box
} from '@mantine/core';
import About from '../components/About';
import MyTimeLine from '../components/Timeline';
import Welcome from '../components/Welcome';

function Home() {
  return (
    <Box>

        <Welcome />

        <MyTimeLine />
    <About/>
    </Box>
  );
}

export default Home;
