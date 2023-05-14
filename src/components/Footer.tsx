import { ActionIcon, Anchor, Group, MediaQuery, createStyles, rem } from '@mantine/core';
import {
  IconArrowUp,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandSlack,
  IconMail,
} from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    // position: 'relative',
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.md} ${theme.spacing.md}`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
}));

function scrollBackToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

export interface FooterProps {
  links: { link: string; label: string }[];
}

export function MyFooter({ links }: FooterProps) {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Anchor<'a'>
      color="dimmed"
      key={link.label}
      href={link.link}
      sx={{ lineHeight: 1 }}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Group className={classes.links}>{items}</Group>

        <Group spacing="xs" position="left" noWrap>
          <ActionIcon
            aria-label="Contact Hampus on e-mail"
            component="a"
            href="mailto:hampus.isebring@gmail.com"
            size="lg"
            variant="default"
            radius="xl"
          >
            <IconMail size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            component="a"
            target="_blank"
            href="https://www.linkedin.com/in/hampus-isebring-6947b0230/"
            size="lg"
            variant="default"
            aria-label="Contact Hampus on LinkedIn"
            radius="xl"
          >
            <IconBrandLinkedin size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            component="a"
            aria-label="Contact Hampus on Github"
            href="https://github.com/Isebring"
            target="_blank"
            size="lg"
            variant="default"
            radius="xl"
          >
            <IconBrandGithub size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            aria-label="Contact Hampus on Slack"
            variant="default"
            radius="xl"
          >
            <IconBrandSlack size="1.05rem" stroke={1.5} />
          </ActionIcon>
        </Group>
        <MediaQuery
            query="(max-width: 758px)"
            styles={{
            marginTop: '1rem'
            }}
          >
        <ActionIcon
          onClick={scrollBackToTop}
          aria-label="Scroll to the top of the page"
          size="lg"
          variant="default"
          radius="xl"
        >
          <IconArrowUp size="1.05rem" stroke={1.5} />
        </ActionIcon>
        </MediaQuery>
      </div>
    </div>
  );
}
