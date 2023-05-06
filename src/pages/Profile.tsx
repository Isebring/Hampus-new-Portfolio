import {
  Avatar,
  Button,
  Divider,
  Flex,
  Group,
  Paper,
  Text,
} from '@mantine/core';
import {
  IconBrandCss3,
  IconBrandGit,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandNpm,
  IconBrandReact,
  IconBrandTypescript,
} from '@tabler/icons-react';
import MyCarousel from '../components/Carousel';
import { HobbyCards } from '../components/Hobbies';

export function Profile() {
  return (
    <>
      <Paper
        radius="md"
        withBorder
        p="lg"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        })}
      >
        <Avatar src="/imgs/hampusimg.png" size={120} radius={120} mx="auto" />
        <Text ta="center" fz="lg" weight={500} mt="md">
          Hampus Isebring
        </Text>
        <Text ta="center" c="dimmed" fz="sm">
          Front End Developer • UX | UI Designer
        </Text>
        <Flex justify="center" mb="sm" mt="lg">
          <Group spacing="xs">
            <IconBrandReact color="lightblue" />{' '}
            <IconBrandJavascript color="yellow" />{' '}
            <IconBrandTypescript color="blue" />{' '}
            <IconBrandMongodb color="green" /> <IconBrandHtml5 color="red" />{' '}
            <IconBrandCss3 color="blue" /> <IconBrandGit color="darkred" />{' '}
            <IconBrandGithub color="grey" /> <IconBrandNpm color="red" />
          </Group>
        </Flex>
        <Flex justify="center">
          <Button variant="filled" mt="md">
            More about me
          </Button>
        </Flex>
        <Divider mt="lg" />
        <HobbyCards />
        <MyCarousel/>
      </Paper>
    </>
  );
}
