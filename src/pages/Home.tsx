import { Box, Flex } from '@mantine/core';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';
import MyTimeLine from '../components/Timeline';
import Welcome from '../components/Welcome';

function Home() {
  return (
    <Box>
      <Flex justify="center" direction="column" align="center">
        <Welcome />

        <MyTimeLine />

        <Portfolio />

        <Contact />
      </Flex>
    </Box>
  );
}

export default Home;
