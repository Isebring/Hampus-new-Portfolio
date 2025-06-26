import {
  ActionIcon,
  Box,
  Container,
  Divider,
  Group,
  SimpleGrid,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";
import styled from "styled-components";
import "./Portfolio.css";

const PortfolioBox = styled.div`
  position: relative;
  height: 20rem;
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid #b3adad;

  &:hover div {
    bottom: 0;
  }
`;

const StyledImage = styled.img``;

const PortfolioImg = ({ src, alt, objectFitType, ...rest }: any) => (
  <StyledImage
    src={src}
    alt={alt}
    style={{ objectFit: objectFitType, backgroundColor: "#F3F8F9" }}
    {...rest}
  />
);

const PortfolioOverlay = styled.div`
  position: absolute;
  bottom: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: hsl(234, 60%, 30%, 0.7);
  transition: 0.6s ease-in-out;
`;
const Heading = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  font-family: Inter Tight, sans-serif;
  margin-bottom: 0.625rem;
  color: #f8f8f8;
`;

const Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f8f8f8;
`;

function PortfolioItem(props: {
  title: string;
  imgSrc: string;
  description: string;
  githubLink: string;
  websiteUrl: string;
  objectFitType: any;
}) {
  const { title, imgSrc, description, githubLink, websiteUrl, objectFitType } =
    props;

  return (
    <PortfolioBox>
      <PortfolioImg src={imgSrc} alt={title} objectFitType={objectFitType} />
      <PortfolioOverlay>
        <Heading style={{ textAlign: "center", marginTop: "1rem" }}>
          {title}
        </Heading>
        <Text style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
          {description}
        </Text>

        {websiteUrl && (
          <ActionIcon
            mt="lg"
            mx="auto"
            component="a"
            href={websiteUrl}
            target="_blank"
            sx={{ borderRadius: "50%" }}
            size="lg"
            color="blue"
            aria-label="Project website"
            variant="filled"
          >
            <FaExternalLinkSquareAlt size="1.1rem" />
          </ActionIcon>
        )}

        {githubLink && (
          <ActionIcon
            mt="sm"
            mx="auto"
            component="a"
            href={githubLink}
            target="_blank"
            sx={{ borderRadius: "50%" }}
            size="lg"
            color="blue"
            aria-label="Github"
            variant="filled"
          >
            <FaGithub size="1.25rem" />
          </ActionIcon>
        )}
      </PortfolioOverlay>
    </PortfolioBox>
  );
}

function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio - Hampus Isebring";
    window.scrollTo(0, 0);
  }, []);

  const isMobile = useMediaQuery("(max-width: 1000px)");
  const columns = isMobile ? 1 : 3;
  const { t } = useTranslation();

  const projects = [
    {
      title: t("portfolioTitle6"),
      imgSrc: "/imgs/logoCreative.svg",
      description: t("portfolioText6"),
      websiteUrl: "https://creativepaper.netlify.app",
      githubLink: "https://github.com/Isebring/Creative-Paper-webbshop",
      objectFitType: "contain",
    },
    {
      title: t("portfolioTitle0"),
      imgSrc: "/imgs/dh-rapport-design.png",
      description: t("portfolioText0"),
      websiteUrl: "https://dhsolutions.se/dh-tidrapport/",
      githubLink: "",
      objectFitType: "contain",
    },
    {
      title: t("portfolioTitle1"),
      imgSrc: "/imgs/figma-portfolio.png",
      description: t("portfolioText1"),
      websiteUrl:
        "https://www.figma.com/proto/4tnMOesa5z2xNH2tvB0Jcv/Hampus-UX-Portfolio?page-id=0%3A1&type=design&node-id=404-2&viewport=574%2C144%2C0.09&scaling=scale-down-width&starting-point-node-id=404%3A2&hide-ui=1",
      githubLink: "",
      objectFitType: "cover",
    },
    {
      title: t("portfolioTitle2"),
      imgSrc: "/imgs/GH-logo.png",
      description: t("portfolioText2"),
      websiteUrl: "https://gh-gamehaven.netlify.app/",
      githubLink: "https://github.com/gabriel-lugo/GH-GameHaven",
      objectFitType: "contain",
    },
    {
      title: t("portfolioTitle3"),
      imgSrc:
        "https://isebring.github.io/Hampus-Isebring-Portfolio/imgs/frostbite-frenzy.PNG",
      description: t("portfolioText3"),
      websiteUrl: "https://frostbitefrenzy.netlify.app/",
      githubLink: "https://github.com/Isebring/Frostbite-Frenzy",
      objectFitType: "cover",
    },
    {
      title: t("portfolioTitle4"),
      imgSrc: "/imgs/ghedb.png",
      description: t("portfolioText4"),
      websiteUrl: "https://ghedb.netlify.app/",
      githubLink: "https://github.com/Isebring/GHE-Movie-App",
      objectFitType: "cover",
    },
    {
      title: t("portfolioTitle7"),
      imgSrc: "/imgs/quizical-notes.png",
      description: t("portfolioText7"),
      websiteUrl: "https://quizicalnotes.netlify.app/",
      githubLink: "https://github.com/Isebring/Quizical-Notes",
      objectFitType: "cover",
    },
    {
      title: t("portfolioTitle5"),
      imgSrc: "/imgs/my-dictionary.png",
      description: t("portfolioText5"),
      websiteUrl: "https://myengdictionary.netlify.app/",
      githubLink: "https://github.com/Isebring/Dictionary-assignment",
      objectFitType: "scale-down",
    },
  ];

  return (
    <>
      {/* <BackgroundImage src="/imgs/circles.svg"> */}
      {/* <Image
        style={{ position: 'absolute', height: '100dvh' }}
        alt="Circles used for decoration purposes"
        src="/imgs/circles.svg"
      ></Image> */}

      <Container size="xl">
        <Title align="center" mt="lg" mb="lg">
          {t("portfolioTitle")}
        </Title>
        <SimpleGrid cols={columns} spacing={"xl"}>
          {projects.map((project, index) => (
            <PortfolioItem
              key={index}
              title={project.title}
              imgSrc={project.imgSrc}
              description={project.description}
              websiteUrl={project.websiteUrl}
              githubLink={project.githubLink}
              objectFitType={project.objectFitType}
            />
          ))}
          <Group position="center">
            <Box className="speech-bubble">{t("speechBubble")}</Box>
          </Group>
        </SimpleGrid>
        <Divider mt="xl" />
      </Container>
      {/* </BackgroundImage> */}
    </>
  );
}
export default Portfolio;
