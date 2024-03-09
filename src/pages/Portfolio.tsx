import { ActionIcon, Container, SimpleGrid, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";
import styled from "styled-components";

const PortfolioBox = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid #b3adad;

  &:hover div {
    bottom: 0;
  }
`;

const PortfolioImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
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
  font-family: Quicksand, sans-serif;
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
}) {
  const { title, imgSrc, description, githubLink, websiteUrl } = props;

  return (
    <PortfolioBox>
      <PortfolioImg src={imgSrc} alt={title} />
      <PortfolioOverlay>
        <Heading style={{ textAlign: "center", marginTop: "1rem" }}>
          {title}
        </Heading>
        <Text style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
          {description}
        </Text>

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
    document.title = "Hampus Isebring - Portfolio";
    window.scrollTo(0, 0);
  }, []);

  const isMobile = useMediaQuery("(max-width: 800px)");
  const columns = isMobile ? 1 : 2;
  const { t } = useTranslation();

  const projects = [
    {
      title: t("portfolioTitle1"),
      imgSrc: "/imgs/figma-portfolio.png",
      description: t("portfolioText1"),
      websiteUrl:
        "https://www.figma.com/proto/4tnMOesa5z2xNH2tvB0Jcv/Hampus-UX-Portfolio?page-id=0%3A1&type=design&node-id=404-2&viewport=574%2C144%2C0.09&scaling=scale-down-width&starting-point-node-id=404%3A2&hide-ui=1",
      githubLink: "",
    },
    {
      title: t("portfolioTitle2"),
      imgSrc: "/imgs/GH-logo.png",
      description: t("portfolioText2"),
      websiteUrl: "https://ghgamehaven.netlify.app/",
      githubLink: "https://github.com/gabriel-lugo/GH-GameHaven",
    },
    {
      title: t("portfolioTitle3"),
      imgSrc:
        "https://isebring.github.io/Hampus-Isebring-Portfolio/imgs/frostbite-frenzy.PNG",
      description: t("portfolioText3"),
      websiteUrl: "https://frostbitefrenzy.netlify.app/",
      githubLink: "https://github.com/Isebring/Frostbite-Frenzy",
    },
    {
      title: t("portfolioTitle4"),
      imgSrc: "/imgs/ghedb.png",
      description: t("portfolioText4"),
      websiteUrl: "https://ghedb.netlify.app/",
      githubLink: "https://github.com/Isebring/GHE-Movie-App",
    },
    {
      title: t("portfolioTitle5"),
      imgSrc: "/imgs/devStudio.png",
      description: t("portfolioText5"),
      websiteUrl: "https://devstudiofed22g.netlify.app/",
      githubLink: "https://github.com/HJYMM22G/HJYMM22G",
    },
    {
      title: t("portfolioTitle6"),
      imgSrc: "/imgs/T101.png",
      description: t("portfolioText6"),
      websiteUrl: "https://tech-101-webshop.netlify.app/",
      githubLink: "https://github.com/Isebring/Tech-101-Webshop",
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
      <Container>
        <Title align="center" mt="lg" mb="lg">
          {t("portfolioTitle")}
        </Title>
        <SimpleGrid cols={columns} spacing="xl">
          {projects.map((project, index) => (
            <PortfolioItem
              key={index}
              title={project.title}
              imgSrc={project.imgSrc}
              description={project.description}
              websiteUrl={project.websiteUrl}
              githubLink={project.githubLink}
            />
          ))}
        </SimpleGrid>
      </Container>
      {/* </BackgroundImage> */}
    </>
  );
}
export default Portfolio;
