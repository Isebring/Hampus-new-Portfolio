import {
  BackgroundImage,
  Box,
  Container,
  Divider,
  Flex,
  Group,
  Paper,
  Text,
  createStyles,
} from "@mantine/core";
import { IconBrandNpm } from "@tabler/icons-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt, FaGithub, FaHtml5, FaSketch } from "react-icons/fa";
import { FaGitAlt, FaReact } from "react-icons/fa6";
import { PiFigmaLogoDuotone } from "react-icons/pi";
import { RiJavascriptFill } from "react-icons/ri";
import { SiAdobe, SiMongodb } from "react-icons/si";
import MyCarousel from "../components/Carousel";
import { HobbyCards } from "../components/Hobbies";
import ProfileCard from "../components/ProfileCard";

const useStyles = createStyles((theme) => ({
  paper: {
    transition: "0.5s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
}));

export function Profile() {
  useEffect(() => {
    document.title = "Hampus Isebring - Profile";
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();
  const { classes } = useStyles();
  function sendMail() {
    window.location.href = "mailto:hampus.isebring@gmail.com";
  }
  return (
    <Box mt="xl">
      <BackgroundImage src="/imgs/shape1.svg">
        <Container size="xs">
          <Flex justify="center">
            <ProfileCard />
          </Flex>
        </Container>
        {/* <Paper
          radius="md"
          p="lg"
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          })}
        > */}
        {/* <Avatar
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
        </Text> */}
        <Flex align="center" mb="sm" mt="xs">
          <Container size="xs">
            <Paper
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.white,
              })}
              className={classes.paper}
              mt="sm"
              p="xs"
              shadow="sm"
            >
              <Text mb="sm" size="xs" ta="center">
                {t("codingTools")}
              </Text>
              <Group spacing="xs">
                <FaReact size="1.5rem" color="#61DAFB" />{" "}
                <RiJavascriptFill size="1.6rem" color="#e5de00" />{" "}
                <BiLogoTypescript size="1.5rem" color="blue" />{" "}
                <SiMongodb size="1.5rem" color="green" />{" "}
                <FaHtml5 size="1.5rem" color="red" />{" "}
                <FaCss3Alt size="1.5rem" color="blue" />{" "}
                <FaGitAlt size="1.5rem" color="darkred" />{" "}
                <FaGithub size="1.5rem" />{" "}
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
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.white,
                width: "10rem",
              })}
              mt="sm"
              shadow="sm"
              p="xs"
            >
              <Text mb="sm" size="xs" align="center">
                {t("designTools")}
              </Text>
              <Group position="center" spacing="xs">
                <PiFigmaLogoDuotone size="1.3rem" color="#1877F2" />{" "}
                <SiAdobe size="1.3rem" color="red" />{" "}
                <FaSketch size="1.3rem" color="orange" />{" "}
              </Group>
            </Paper>
          </Container>
        </Flex>
        <Flex justify="center">
          {/* <Button
            mt="md"
            color="blue.8"
            aria-label="Contact me"
            onClick={sendMail}
            leftIcon={<IconMail size="1rem" />}
          >
            {t("contact")}
          </Button> */}
        </Flex>
        <Divider mt="xl" />
        <HobbyCards />
        <MyCarousel />
        {/* </Paper> */}
      </BackgroundImage>
    </Box>
  );
}
