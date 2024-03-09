import { Container, Divider, Text, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { GoGoal } from "react-icons/go";

function Goal() {
  const { t } = useTranslation();
  return (
    <Container size="xl">
      <Title sx={{ display: "flex" }} mb="lg" order={3}>
        {t("goalTitle")}
        <GoGoal size="2rem" style={{ marginLeft: "auto" }} />
      </Title>
      <Text>{t("goalText")}</Text>
      <Divider mt="xl" />
    </Container>
  );
}

export default Goal;
