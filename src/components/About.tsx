import { Blockquote, Box, Container, Flex, MediaQuery } from "@mantine/core";

function About() {
  return (
    <Container size="xl">
      <MediaQuery
        query="(max-width: 780px)"
        styles={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
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
            <img
              loading="lazy"
              src="/imgs/isebring-design.svg"
              alt="A cat mascot sketching on design ideas"
            />
          </Box>
        </Flex>
      </MediaQuery>
    </Container>
  );
}

export default About;
