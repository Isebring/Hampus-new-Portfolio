import { Blockquote, Box, Container, Flex, MediaQuery } from "@mantine/core";
import IdeaAnimation from "./IdeaAnimation";

function About() {
  return (
    <Container mt="xl" size="xl">
      <MediaQuery
        query="(max-width: 780px)"
        styles={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Flex justify="center" align="center">
          <Box style={{ width: "100%" }}>
            <Blockquote color="blue" cite="– Nelson Mandela">
              The greatest glory in living lies not in never falling, but in
              rising every time we fall
            </Blockquote>
          </Box>
          <Box style={{ width: "50%" }}>
            {/* <img
              loading="lazy"
              src="/imgs/isebring-design.svg"
              alt="A cat mascot sketching on design ideas"
            /> */}
            <IdeaAnimation />
          </Box>
        </Flex>
      </MediaQuery>
    </Container>
  );
}

export default About;
