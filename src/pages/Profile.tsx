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
  IconMail,
} from '@tabler/icons-react';
import MyCarousel from '../components/Carousel';
import { HobbyCards } from '../components/Hobbies';

export function Profile() {
  function sendMail() {
    window.location.href = "mailto:hampus.isebring@gmail.com";
  }
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
        </Flex>
        <Flex justify="center">
          <Button onClick={sendMail} leftIcon={<IconMail size="1rem" />}>Contact me</Button>
        </Flex>
        <Divider mt="lg" />
        <HobbyCards />
        <MyCarousel />
      </Paper>
    </>
  );
}
