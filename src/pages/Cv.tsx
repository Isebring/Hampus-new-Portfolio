import { Box, Button, Container, Group, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { Document } from 'react-pdf/dist/esm/entry.vite';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function CV() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [showIframe, setShowIframe] = useState<boolean>(false);
  const [pdfScale, setPdfScale] = useState(1);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 630) {
        setPdfScale(0.5);
      } else {
        setPdfScale(1);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function toggleIframe() {
    setShowIframe(!showIframe);
  }

  return (
    <Container mt="md" fluid>
      <Box>
        {!showIframe ? (
          <Box
            onClick={toggleIframe}
            style={{
              display: 'flex',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <Document
              file="/cv_hampus_isebring - 2023.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} scale={pdfScale} />
            </Document>
          </Box>
        ) : (
          <Box>
            <Button mt="md" mb="sm" variant="outline" onClick={toggleIframe}>
              Close PDF
            </Button>
            <iframe
              src="/cv_hampus_isebring - 2023.pdf"
              width="100%"
              height="600px"
              style={{ border: 'none' }}
              title="CV PDF"
            ></iframe>
          </Box>
        )}
        {!showIframe && (
          <Text align="center">
            Page {pageNumber} of {numPages}
          </Text>
        )}
      </Box>
      <Group position="center">
        <Button mt="md" mb="xs">
          <a
            style={{ textDecoration: 'none', color: 'white' }}
            href="/cv_hampus_isebring - 2023.pdf"
            download="YourName-CV.pdf"
          >
            Download CV
          </a>
        </Button>
      </Group>
    </Container>
  );
}

export default CV;
