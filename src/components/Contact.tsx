import { Box, Container, Text, Title } from '@mantine/core';
import Banner from './Banner';
import { ContactCard } from './ContactCard';

function Contact() {
  return (
    <Container>
      <Box mb="xl">
        <Title order={2} align="center">
          Feel free to reach out
        </Title>
        <Text align="center">I'd be happy to have a chat about anything</Text>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: ['column', 'row'],
          justifyContent: ['space-between', 'center'],
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '5rem',
        }}
      >
        <ContactCard />
        <Banner />
      </Box>
    </Container>
  );
}

export default Contact;
