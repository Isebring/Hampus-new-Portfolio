import { Box, Container } from "@mantine/core";
import "./Tag.css";
import { useTranslation } from "react-i18next";

function Tag() {
  const { t } = useTranslation();
  return (
    <Container>
      <Box className="tag-green">{t("tagText")}</Box>
    </Container>
  );
}

export default Tag;
