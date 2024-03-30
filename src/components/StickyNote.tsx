import { Box } from "@mantine/core";
import { useTranslation } from "react-i18next";
import "./StickyNote.css";

function StickyNote() {
  const { t } = useTranslation();
  return <Box className="sticky-note">{t("stickynote")}</Box>;
}

export default StickyNote;
