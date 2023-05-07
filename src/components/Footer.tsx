import { ActionIcon, Anchor, Group, createStyles, rem } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconBrandSlack, IconMail } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
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

        <Group spacing="xs" position="right" noWrap>
        <ActionIcon component="a" href="mailto:hampus.isebring@gmail.com" size="lg" variant="default" radius="xl">
            <IconMail size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandLinkedin size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon component="a" href="https://github.com/Isebring" target="_blank" size="lg" variant="default" radius="xl">
            <IconBrandGithub size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandSlack size="1.05rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}