import { Box, Flex } from '@mantine/core';
import { Element } from 'react-scroll';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';
import Welcome from '../components/Welcome';

function Home() {
  return (
    <Box>
      <Flex justify="center" direction="column" align="center">
        <Element name="welcome">
          <Welcome />
        </Element>
        <Element name="about"></Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="portfolio">
          <Portfolio />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </Flex>
    </Box>
  );
}

export default Home;
