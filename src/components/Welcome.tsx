import {
  ActionIcon,
  Container,
  Divider,
  Flex,
  Group,
  Image,
  Title,
} from '@mantine/core';
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandLinkedin,
} from '@tabler/icons-react';
import Texteffect from './Texteffect';
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
          src="/imgs/hampus-landingpage.png"
          alt="a picture of me, Hampus Isebring"
        />
        {/* <Title
          mb="lg"
          order={2}
          sx={{
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '50%',
              transform: 'translate(-50%)',
              left: '20.5rem',
              width: '1.25rem',
              height: '0.125rem',
              background: '#B6C7F7;',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: '50%',
              transform: 'translate(-50%)',
              right: '19.2rem',
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
          Hello World
        </Title> */}

        <Title order={1} mb="sm" align="center">
          <Texteffect />I am <span style={{ color: '#3596e6' }}>Hampus</span>,
        </Title>
        <Typewriter />
        <Group mt="md" position="center">
          <ActionIcon
            component="a"
            href="https://github.com/Isebring"
            target="_blank"
            sx={{ borderRadius: '50%' }}
            size="lg"
            color="blue"
            aria-label="Reach out to me on Github"
            variant="filled"
          >
            <IconBrandGithub size="1.5rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href="https://www.linkedin.com/in/hampus-isebring-6947b0230/"
            target="_blank"
            sx={{ borderRadius: '50%' }}
            size="lg"
            color="blue"
            aria-label="Reach out to me on LinkedIn"
            variant="filled"
          >
            <IconBrandLinkedin size="1.5rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href="https://discord.com/users/alagos#3330"
            target="_blank"
            sx={{ borderRadius: '50%' }}
            size="lg"
            color="blue"
            aria-label="Reach out to me on Discord"
            variant="filled"
          >
            <IconBrandDiscord size="1.5rem" stroke={1.5} />
          </ActionIcon>
        </Group>
        <Divider mt="md" />
      </Container>
    </Flex>
  );
}

export default Welcome;
