import { Container, Flex, Image, Title } from '@mantine/core';
import Typewriter from './Typewriter';

function Welcome() {
  return (
    <Flex align="center">
      <Container size="xs">
        <Image
          mx="auto"
          maw={400}
          mt="sm"
          mb="md"
          src="/imgs/hampus.png"
          alt="a picture of me, Hampus Isebring"
        />
        <Title
          mb="lg"
          order={2}
          sx={{
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '50%',
              transform: 'translate(-50%)',
              left: '11.2rem',
              width: '1.25rem',
              height: '0.125rem',
              background: '#B6C7F7;',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: '50%',
              transform: 'translate(-50%)',
              right: '10rem',
              width: '1.25rem',
              height: '0.125rem',
              background: '#B6C7F7;',
            },
            position: 'relative',
            alignItems: 'center',
            columnGap: '0.5rem',
            fontSize: '1.4rem',
            textAlign: 'center',
          }}
        >
          Hello there
        </Title>
        <Title order={1} mb="sm" align="center">
          I am <span style={{ color: '#3596e6' }}>Hampus</span>, and..
        </Title>
        <Typewriter />
      </Container>
    </Flex>
  );
}

export default Welcome;
