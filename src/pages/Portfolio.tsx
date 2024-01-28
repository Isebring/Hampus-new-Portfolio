import { ActionIcon, Container, SimpleGrid, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import styled from "styled-components";

const PortfolioBox = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;
  border-radius: 1rem;
  overflow: hidden;

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
  margin-bottom: 0.625rem;
  color: #f8f8f8;
`;

const Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f8f8f8;
`;

const projects = [
  {
    title: "Design Cases",
    imgSrc: "/imgs/figma-portfolio.png",
    description:
      "In this Figma portfolio I present my case studies in design. They are all related to the design process.",
    websiteUrl:
      "https://www.figma.com/proto/4tnMOesa5z2xNH2tvB0Jcv/Hampus-UX-Portfolio?page-id=0%3A1&type=design&node-id=404-2&viewport=574%2C144%2C0.09&scaling=scale-down-width&starting-point-node-id=404%3A2&hide-ui=1",
    githubLink: "",
  },
  {
    title: "GH: Gamehaven",
    imgSrc: "/imgs/GH-logo.png",
    description:
      "Me and 1 other student created this project. We used the Internet Game Database (IGDB v.4) API to create this web application for games where you can browse, rate, search, bookmark etc.",
    websiteUrl: "https://ghgamehaven.netlify.app/",
    githubLink: "https://github.com/gabriel-lugo/GH-GameHaven",
  },
  {
    title: "Frostbite Frenzy",
    imgSrc:
      "https://isebring.github.io/Hampus-Isebring-Portfolio/imgs/frostbite-frenzy.PNG",
    description:
      "Me and 5 fellow students created this game using P5.js and TypeScript. We built the game using Object Oriented Programming.",
    websiteUrl: "https://frostbitefrenzy.netlify.app/",
    githubLink: "https://github.com/Isebring/Frostbite-Frenzy",
  },
  {
    title: "GHEDb",
    imgSrc: "/imgs/ghedb.png",
    description:
      "Me and 2 fellow students created a movie application using React and TypeScript. We used the TMDB API for this assignment which was a lot of fun.",
    websiteUrl: "https://ghedb.netlify.app/",
    githubLink: "https://github.com/Isebring/GHE-Movie-App",
  },
  {
    title: "DevStudio",
    imgSrc: "/imgs/devStudio.png",
    description:
      "This was an assignment from Medieinstitutet where we as a group of students created a website together where we offer our services. We used React, TypeScript and Mantine",
    websiteUrl: "https://devstudiofed22g.netlify.app/",
    githubLink: "https://github.com/HJYMM22G/HJYMM22G",
  },
  {
    title: "T101",
    imgSrc: "/imgs/T101.png",
    description:
      "Me and 3 fellow students created this tech ecommerce store with React, TypeScript and Mantine. We worked with the context API from React for the shopping cart. ",
    websiteUrl: "https://tech-101-webshop.netlify.app/",
    githubLink: "https://github.com/Isebring/Tech-101-Webshop",
  },
];

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
          <IconExternalLink size="1.5rem" />
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
            <IconBrandGithub size="1.5rem" />
          </ActionIcon>
        )}
      </PortfolioOverlay>
    </PortfolioBox>
  );
}

function Portfolio() {
  const isMobile = useMediaQuery("(max-width: 800px)");
  const columns = isMobile ? 1 : 2;

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
          My Portfolio
        </Title>
        <SimpleGrid cols={columns}>
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
