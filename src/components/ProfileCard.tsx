import { Avatar, Box, Button, Card, Group, Text } from "@mantine/core";
import { t } from "i18next";
import { FaGithub } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import { IoMdMail } from "react-icons/io";
import { IoCodeSlash } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import "./ProfileCard.css";

const stats = [
  { value: <MdDesignServices />, label: "Design" },
  { value: <GiArchiveResearch />, label: "Research" },
  { value: <IoCodeSlash />, label: "Code" },
];

function sendMail() {
  window.location.href = "mailto:hampus.isebring@gmail.com";
}

function visitGithub() {
  window.open("https://github.com/Isebring", "_blank");
}

function ProfileCard() {
  const items = stats.map((stat) => (
    <Box key={stat.label}>
      <Text ta="center" fz="lg" fw={500}>
        {stat.value}
      </Text>
      <Text ta="center" fz="sm" c="dimmed" lh={1}>
        {stat.label}
      </Text>
    </Box>
  ));

  return (
    <Card
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
      })}
      withBorder
      padding="xl"
      radius="md"
      className="card"
    >
      <Card.Section
        h={140}
        style={{
          backgroundImage: "url(/imgs/Banner-img.jpg)",
          backgroundSize: "cover",
        }}
      />
      <Avatar
        src="/imgs/toon-hampus.jpg"
        alt="A picture of a toon version of Hampus Isebring"
        size={80}
        radius={80}
        mx="auto"
        mt={-30}
        className="avatar"
      />
      <Text ta="center" fz="lg" fw={500} mt="sm">
        Hampus Isebring
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        Front End Developer • UX Designer
      </Text>
      <Group mt="md" position="center" spacing="md">
        {items}
      </Group>
      <Button
        radius="md"
        fullWidth
        mt="md"
        color="blue.8"
        aria-label="Contact me"
        onClick={sendMail}
        leftIcon={<IoMdMail size="1rem" />}
      >
        {t("contact")}
      </Button>
      <Button
        radius="md"
        fullWidth
        mt="md"
        variant="outline"
        aria-label="Contact me"
        onClick={visitGithub}
        leftIcon={<FaGithub size="1rem" />}
      >
        {t("github")}
      </Button>
    </Card>
  );
}

export default ProfileCard;
