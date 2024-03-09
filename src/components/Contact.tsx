import { Box, Container, Divider, Text, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";
import Banner from "./Banner";
import { ContactCard } from "./ContactCard";

function Contact() {
  const { t } = useTranslation();
  return (
    <Container>
      <Box pl="sm" mb="xl">
        <Title ta="center" order={2}>
          {t("reachOut")}
        </Title>
        <Text mt="xs" ta="center">
          {t("reachOutText")}
        </Text>
        <Divider mt="md" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", "row"],
          justifyContent: ["space-between", "center"],
          alignItems: "center",
          flexWrap: "wrap",
          gap: "5rem",
        }}
      >
        <ContactCard />
        <Banner />
      </Box>
    </Container>
  );
}

export default Contact;
