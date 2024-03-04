import { Box, Container, Divider, Text, Title } from "@mantine/core";
import Banner from "./Banner";
import { ContactCard } from "./ContactCard";

function Contact() {
  return (
    <Container>
      <Box pl="sm" mb="xl">
        <Title ta="center" order={2}>
          Feel free to reach out
        </Title>
        <Text mt="xs" ta="center">
          I'd be happy to have a chat about anything
        </Text>
        <Divider mt="md" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", "row"],
          justifyContent: ["space-between", "center"],
          alignItems: "center",
          flexWrap: "wrap",
          gap: "5rem",
        }}
      >
        <ContactCard />
        <Banner />
      </Box>
    </Container>
  );
}

export default Contact;
