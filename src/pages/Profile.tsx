import { Avatar, Button, Divider, Flex, Paper, Text } from '@mantine/core';
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
        <Avatar
          src="../public/imgs/hampusimg.png"
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
        <Flex justify="center">
          <Button variant="filled" mt="md">
            More about me
          </Button>
        </Flex>
        <Divider mt="lg" />
        <HobbyCards />
      </Paper>
    </>
  );
}
