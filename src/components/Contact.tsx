import { Box, Container, Divider, Text, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { ContactCard } from "./ContactCard";

function Contact() {
  const { t } = useTranslation();
  return (
    <Container size="xl">
      <Divider mt="md" mb="lg" />
      <Box pl="sm" mb="xl">
        <Title ta="center" order={2}>
          {t("reachOut")}
        </Title>
        <Text mt="xs" ta="center">
          {t("reachOutText")}
        </Text>
      </Box>
      <Box>
        <ContactCard />
        {/* <Banner /> */}
      </Box>
    </Container>
  );
}

export default Contact;
