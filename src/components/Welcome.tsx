import {
  ActionIcon,
  Box,
  Container,
  Divider,
  Group,
  Image,
  MediaQuery,
  Title,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import BeeAnimation from "./BeeAnimation";
import StickyNote from "./StickyNote";
import Tag from "./Tag";
import Typewriter from "./Typewriter";

function Welcome() {
  const { t } = useTranslation();
  return (
    // <Flex align="center">
    <Container size="xl">
      <Box sx={{ display: "flex", justifyContent: "center" }} mt="xl">
        <StickyNote />
        <BeeAnimation />
      </Box>
      <MediaQuery query="(max-width: 440px)" styles={{ display: "none" }}>
        <Box sx={{ paddingLeft: "2rem" }}>
          <Tag />
        </Box>
      </MediaQuery>
      <Box
        sx={{
          marginTop: "2rem",
          marginBottom: "2rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* <Texteffect /> */}
      </Box>
      <MediaQuery
        query="(max-width: 815px)"
        styles={{ flexDirection: "column" }}
      >
        <MediaQuery query="(max-width: 815px)" styles={{ gap: "2.5rem" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5rem",
            }}
          >
            <MediaQuery
              query="(max-width: 815px)"
              styles={{ fontSize: "36px" }}
            >
              <Title
                style={{ fontFamily: "Clash Display", fontWeight: "600" }}
                order={1}
                size={55}
                align="center"
              >
                {t("introName")}{" "}
                <span style={{ color: "#3596e6" }}>Hampus</span>
              </Title>
            </MediaQuery>
            <Image
              maw={240}
              mb="xl"
              src="/imgs/hampus_isebring.png"
              alt="a picture of me, Hampus Isebring"
            />
            {/* <Title
          mb="lg"
          order={2}
          sx={{
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '50%',
              transform: 'translate(-50%)',
              left: '20.5rem',
              width: '1.25rem',
              height: '0.125rem',
              background: '#B6C7F7;',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: '50%',
              transform: 'translate(-50%)',
              right: '19.2rem',
              width: '1.25rem',
              height: '0.125rem',
              background: '#B6C7F7;',
            },
            position: 'relative',
            alignItems: 'center',
            columnGap: '0.5rem',
            fontSize: '1.4rem',
            textAlign: 'center',
          }}
        >
          Hello World
        </Title> */}
          </Box>
        </MediaQuery>
      </MediaQuery>
      {/* <Texteffect /> */}
      <Typewriter />
      <Group mt="md" position="center">
        <ActionIcon
          component="a"
          href="https://github.com/Isebring"
          target="_blank"
          sx={{ borderRadius: "50%" }}
          size="lg"
          color="blue"
          aria-label="Reach out to me on Github"
          variant="filled"
        >
          <FaGithub size="1.2rem" />
        </ActionIcon>
        <ActionIcon
          component="a"
          href="https://www.linkedin.com/in/hampus-isebring-6947b0230/"
          target="_blank"
          sx={{ borderRadius: "50%" }}
          size="lg"
          color="blue"
          aria-label="Reach out to me on LinkedIn"
          variant="filled"
        >
          <FaLinkedin size="1rem" />
        </ActionIcon>
        <ActionIcon
          component="a"
          href="mailto:hampus.isebring@gmail.com"
          target="_blank"
          sx={{ borderRadius: "50%" }}
          size="lg"
          color="blue"
          aria-label="Reach out to me on email"
          variant="filled"
        >
          <IoMdMail size="1rem" />
        </ActionIcon>
      </Group>
      <Divider mt="md" />
    </Container>
    // </Flex>
  );
}

export default Welcome;
