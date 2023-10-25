import { Container, Text } from '@mantine/core';
import { TypeAnimation } from 'react-type-animation';

function Typewriter() {
  return (
    <Container>
      <Text mb="xl" size="xl" align="center" fw={600}>
        <span style={{ color: '#3596e6' }}>I am a</span>{' '}
        <TypeAnimation
          sequence={[
            'UX Designer',
            2000,
            'Front End Developer',
            2000,
            'Music Lover',
            2000,
            'Gamer',
            2000,
            'Friend',
            2000,
          ]}
          repeat={Infinity}
        />
      </Text>
    </Container>
  );
}

export default Typewriter;
