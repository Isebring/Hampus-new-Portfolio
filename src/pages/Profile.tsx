import {
  Avatar,
  BackgroundImage,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Group,
  Paper,
  Text,
  createStyles,
} from '@mantine/core';
import {
  IconBrandAdobe,
  IconBrandCss3,
  IconBrandFigma,
  IconBrandGit,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandNpm,
  IconBrandReact,
  IconBrandSketch,
  IconBrandTypescript,
  IconMail,
} from '@tabler/icons-react';
import MyCarousel from '../components/Carousel';
import { HobbyCards } from '../components/Hobbies';

const useStyles = createStyles((theme) => ({
  paper: {
    '&:hover': {
      transform: 'scale(1.1)',
      transition: '0.4s ease-in-out',
    },
  },
}));

export function Profile() {
  const { classes } = useStyles();
  function sendMail() {
    window.location.href = 'mailto:hampus.isebring@gmail.com';
  }
  return (
    <Box mt="xl">
      <BackgroundImage src="/imgs/shape1.svg">
        {/* <Paper
          radius="md"
          p="lg"
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          })}
        > */}
        <Avatar
          src="/imgs/hampusimg.png"
          alt="A picture of Hampus Isebring"
          size={120}
          radius={120}
          mx="auto"
        />
        <Text ta="center" fz="lg" weight={500} mt="md">
          Hampus Isebring
        </Text>
        <Text ta="center" c="dimmed" fz="sm">
          Front End Developer • UX | UI Designer
        </Text>
        <Flex align="center" mb="sm" mt="xs">
          <Container size="xs">
            <Paper
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === 'dark'
                    ? theme.colors.dark[6]
                    : theme.white,
              })}
              className={classes.paper}
              mt="sm"
              p="xs"
              shadow="sm"
            >
              <Text mb="sm" size="xs" ta="center">
                Some of my Coding Tools:
              </Text>
              <Group spacing="xs">
                <IconBrandReact stroke={1.3} color="lightblue" />{' '}
                <IconBrandJavascript stroke={1.3} color="yellow" />{' '}
                <IconBrandTypescript stroke={1.3} color="blue" />{' '}
                <IconBrandMongodb stroke={1.3} color="green" />{' '}
                <IconBrandHtml5 stroke={1.3} color="red" />{' '}
                <IconBrandCss3 stroke={1.3} color="blue" />{' '}
                <IconBrandGit stroke={1.3} color="darkred" />{' '}
                <IconBrandGithub stroke={1.3} color="grey" />{' '}
                <IconBrandNpm stroke={1.3} color="red" />
              </Group>
            </Paper>
          </Container>
        </Flex>
        <Flex align="center" mb="sm" mt="xs">
          <Container size="xs">
            <Paper
              className={classes.paper}
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === 'dark'
                    ? theme.colors.dark[6]
                    : theme.white,
                width: '10rem',
              })}
              mt="sm"
              shadow="sm"
              p="xs"
            >
              <Text mb="sm" size="xs" align="center">
                Some of my Design Tools:
              </Text>
              <Group position="center" spacing="xs">
                <IconBrandFigma stroke={1.3} color="#1877F2" />{' '}
                <IconBrandAdobe stroke={1.3} color="darkgrey" />{' '}
                <IconBrandSketch stroke={1.3} color="orange" />{' '}
              </Group>
            </Paper>
          </Container>
        </Flex>
        <Flex justify="center">
          <Button
            mt="md"
            color="blue.8"
            aria-label="Send an e-mail to Hampus Isebring"
            onClick={sendMail}
            leftIcon={<IconMail size="1rem" />}
          >
            Contact me
          </Button>
        </Flex>
        <Divider mt="xl" />
        <HobbyCards />
        <MyCarousel />
        {/* </Paper> */}
      </BackgroundImage>
    </Box>
  );
}
