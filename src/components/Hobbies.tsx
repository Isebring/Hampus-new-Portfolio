import {
  Badge,
  Card,
  Container,
  Group,
  Paper,
  SimpleGrid,
  Text,
  Title,
  createStyles,
  rem,
} from "@mantine/core";
import { IconStretching } from "@tabler/icons-react";
import { GiRetroController } from "react-icons/gi";
import { IoMusicalNotes } from "react-icons/io5";

const mockdata = [
  {
    title: "Retro Games",
    description:
      "In recent years I have started collecting retro games, mostly from older Nintendo systems like SNES, N64 and GCN.",
    icon: GiRetroController,
  },
  {
    title: "Exercise",
    description:
      "A way to clear my head and come back refreshed, exercising is an important part of my daily life.",
    icon: IconStretching,
  },
  {
    title: "Music",
    description:
      "Music has been a part of my life since the beginning. Whatever my mood is, there is always a song to help me get through. I also play the guitar from time to time.",
    icon: IoMusicalNotes,
  },
];

const useStyles = createStyles((theme) => ({
  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      // backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  card: {
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
}));

export function HobbyCards() {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon size={rem(50)} color={theme.fn.primaryColor()} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl" mt="lg">
      <Group position="center">
        <Badge color="blue.8" variant="filled" size="lg">
          My hobbies
        </Badge>
      </Group>

      <Paper
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
        })}
        className={classes.card}
        shadow="md"
        mt="lg"
        p="sm"
        radius="md"
      >
        <Title order={2} ta="center" mt="sm">
          In my spare time I enjoy:
        </Title>

        <Text className={classes.description} ta="center" mt="md">
          spending time with my family, cats, and friends. I also enjoy watching
          hockey, art, tv-shows and movies.
        </Text>
      </Paper>

      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
