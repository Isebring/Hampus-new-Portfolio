import { Container, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";
import i18n from "../i18";

function Typewriter() {
  const { t } = useTranslation();

  return (
    <Container mt="xl">
      <Title order={2} mb="xl" align="center" fw={300}>
        <span style={{ color: "#3596e6" }}>{t("intro")}</span>{" "}
        <TypeAnimation
          key={i18n.language}
          sequence={[
            t("professions.uxDesigner"),
            2000,
            t("professions.developer"),
            2000,
            t("professions.musicLover"),
            2000,
            t("professions.gamer"),
            2000,
            t("professions.friend"),
            2000,
          ]}
          repeat={Infinity}
        />
      </Title>
    </Container>
  );
}

export default Typewriter;
