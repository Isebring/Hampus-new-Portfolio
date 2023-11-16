import { Blockquote, Box, Container, Flex, MediaQuery } from '@mantine/core';

function About() {
  return (
    <Container size="xl">
      <MediaQuery
        query="(max-width: 780px)"
        styles={{
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Flex justify="center" align="center">
          <Box>
            <Blockquote color="blue" cite="– Nelson Mandela">
              The greatest glory in living lies not in never falling, but in
              rising every time we fall
            </Blockquote>
          </Box>
          <Box>
            <MediaQuery
              query="(max-width: 780px)"
              styles={{
                width: '80%',
                height: '60%',
              }}
            >
              <img
                src="/imgs/isebring-design.svg"
                alt="A cat mascot sketching on design ideas"
              />
            </MediaQuery>
          </Box>
        </Flex>
      </MediaQuery>
    </Container>
  );
}

export default About;
