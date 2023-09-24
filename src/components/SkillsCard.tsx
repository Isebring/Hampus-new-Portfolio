import {
  Badge,
  Card,
  Container,
  Group,
  Image,
  Text,
  createStyles,
  rem,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    maxWidth: '25rem',
  },

  section: {
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },

  skills: {
    '&:hover': {
      transform: 'scale(1.1)',
      transition: '0.4s ease-in-out',
    },
  },
}));

export interface BadgeCardProps {
  image: string;
  title: string;
  subject: string;
  description: React.ReactNode;
  badges: {
    emoji: string;
    label: string;
  }[];
}

export function SkillsCard({
  image,
  title,
  description,
  subject,
  badges,
}: BadgeCardProps) {
  const { classes, theme } = useStyles();

  const features = badges.map((badge) => (
    <Badge
      color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
      key={badge.label}
      leftSection={badge.emoji}
    >
      {badge.label}
    </Badge>
  ));

  return (
    <Container size="sm">
      <Card
        withBorder
        shadow="md"
        radius="md"
        p="md"
        className={`${classes.card} ${classes.skills}`}
      >
        <Card.Section>
          <Image src={image} alt={title} height={180} />
        </Card.Section>

        <Card.Section className={classes.section} mt="md">
          <Group position="apart">
            <Text fz="lg" fw={500}>
              {title}
            </Text>
            <Badge size="sm">{subject}</Badge>
          </Group>
          <Text fz="sm" mt="xs">
            {description}
          </Text>
        </Card.Section>

        <Card.Section className={classes.section}>
          <Text mt="md" className={classes.label} c="dimmed">
            Things I usually do:
          </Text>
          <Group spacing={7} mt={5}>
            {features}
          </Group>
        </Card.Section>
      </Card>
    </Container>
  );
}
