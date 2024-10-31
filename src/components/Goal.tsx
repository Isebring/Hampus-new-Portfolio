import { Container, Divider, Image, Text, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";

function Goal() {
  const { t } = useTranslation();
  return (
    <Container size="xl">
      <Title sx={{ display: "flex" }} mb="lg" order={3}>
        {t("goalTitle")}
        {/* <GoGoal size="2rem" style={{ marginLeft: "auto" }} /> */}
      </Title>
      <Text>{t("goalText")}</Text>
      <Image
        style={{ marginLeft: "auto" }}
        maw={300}
        src="/imgs/abstract-rounded-blue-spike.png"
        alt="an illustration of a man showing messages on his computer"
      />
      <Divider mt="xl" />
    </Container>
  );
}

export default Goal;
