import { Avatar, Box, Group, Text, createStyles } from "@mantine/core";
import { IconAt, IconMapPin, IconPhoneCall } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

export function ContactCard() {
  const { classes } = useStyles();
  return (
    <Box mt="lg">
      <Group pl="sm">
        <Avatar
          src="/imgs/hampus-isebring.png"
          alt="a picture of me, Hampus Isebring"
          size={104}
          style={{ borderRadius: "60px 70px 40px 140px" }}
        />
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            UX Designer & Front End Developer
          </Text>

          <Text fz="lg" fw={500} className={classes.name}>
            Hampus Isebring
          </Text>

          <Group noWrap spacing={10} mt={3}>
            <IconAt stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs">hampus.isebring@gmail.com</Text>
          </Group>

          <Group noWrap spacing={10} mt={5}>
            <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs">+46763117617</Text>
          </Group>
          <Group noWrap spacing={10} mt={5}>
            <IconMapPin stroke={1.5} size="1rem" className={classes.icon} />
            <Text fz="xs">Halmstad</Text>
          </Group>
        </div>
      </Group>
    </Box>
  );
}
