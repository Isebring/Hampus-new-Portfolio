import { Container, Text, Title } from "@mantine/core";
import { ContactCard } from "./ContactCard";

function Contact() {
  return (
    <Container>
    <Title order={2} align="center">Feel free to reach out</Title>
    <Text align="center">I'd be happy to have a chat about anything</Text>
    <ContactCard/>
    </Container>
    
  )
}

export default Contact;
