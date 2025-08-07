import {
  BackgroundImage,
  Box,
  Button,
  Container,
  Divider,
  Group,
  Title,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { Document } from "react-pdf/dist/esm/entry.vite";
import styled from "styled-components";
import i18n from "../i18";

const BoxHover = styled.div`
  &:hover div {
    filter: brightness(0.98);
  }
`;

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function CV() {
  const [pdfFile, setPdfFile] = useState("/cv_hampus_isebring_sv.pdf");
  const [secondPdfFile, setSecondPdfFile] = useState(
    "/design_av_sekretessmeddelanden.pdf"
  );

  const [showIframe1, setShowIframe1] = useState(false);
  const [showIframe2, setShowIframe2] = useState(false);

  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pdfScale, setPdfScale] = useState(1);
  const [pdfScale2, setPdfScale2] = useState(0.63);
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "CV - Hampus Isebring";
    window.scrollTo(0, 0);

    const updateCvFile = () => {
      const sv = "/cv_hampus_isebring_sv.pdf";
      const en = "/cv_hampus_isebring_en.pdf";
      if (i18n.language === "en") {
        setPdfFile(en);
      } else {
        setPdfFile(sv);
      }
    };

    i18n.on("languageChanged", updateCvFile);
    updateCvFile();

    return () => {
      i18n.off("languageChanged", updateCvFile);
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setPdfScale(0.5);
        setPdfScale2(0.5);
      } else {
        setPdfScale(1);
        setPdfScale2(0.63);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <>
      <Title align="center" mt="lg" mb="lg">
        {t("cvTitle")}
      </Title>
      <BackgroundImage
        style={{ position: "absolute", height: "87dvh", zIndex: "-1" }}
        src="/imgs/patterns.svg"
      />
      <Container mt="md" size="xl">
        <Box
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          {/* First PDF block */}
          <Box
            style={{
              flex: "1 1 45%",
              maxWidth: "500px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {!showIframe1 ? (
              <BoxHover
                onClick={() => setShowIframe1(true)}
                style={{ cursor: "pointer" }}
              >
                <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                  <Page pageNumber={pageNumber} scale={pdfScale2} />
                </Document>
              </BoxHover>
            ) : (
              <Box sx={{ height: "100dvh" }}>
                <Button
                  mt="md"
                  mb="sm"
                  variant="outline"
                  onClick={() => setShowIframe1(false)}
                >
                  {t("closePDF")}
                </Button>
                <iframe
                  src={pdfFile}
                  width="100%"
                  height="95%"
                  title="CV PDF"
                  style={{ position: "relative" }}
                ></iframe>
              </Box>
            )}
            <Group position="center" mt="md">
              <Button size="md">
                <a
                  href={pdfFile}
                  download="Hampus_Isebring_CV.pdf"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {t("download")}
                </a>
              </Button>
            </Group>
          </Box>

          {/* Second PDF block */}
          <Box
            style={{
              flex: "1 1 45%",
              maxWidth: "600px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {!showIframe2 ? (
              <BoxHover
                onClick={() => setShowIframe2(true)}
                style={{ cursor: "pointer" }}
              >
                <Document
                  file={secondPdfFile}
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  <Page pageNumber={pageNumber} scale={pdfScale} />
                </Document>
              </BoxHover>
            ) : (
              <Box sx={{ height: "100dvh" }}>
                <Button
                  mt="md"
                  mb="sm"
                  variant="outline"
                  onClick={() => setShowIframe2(false)}
                >
                  {t("closePDF")}
                </Button>
                <iframe
                  src={secondPdfFile}
                  width="100%"
                  height="95%"
                  title="Bachelor's thesis"
                  style={{ position: "relative" }}
                ></iframe>
              </Box>
            )}
            <Group position="center" mt="md">
              <Button size="md">
                <a
                  href={secondPdfFile}
                  download="design_av_sekretessmeddelanden.pdf"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {t("download2")}
                </a>
              </Button>
            </Group>
          </Box>
        </Box>
        <Divider mt="xl" />
      </Container>
    </>
  );
}

export default CV;
