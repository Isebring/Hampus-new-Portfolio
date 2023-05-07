import {
  ActionIcon,
  Box,
  Container,
  Flex,
  MediaQuery,
  Title,
} from '@mantine/core';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import styled from 'styled-components';

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
  bottom: -100%;
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
  color: white;
`;

const Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const PortfolioContent = styled.div`
  display: flex;
  gap: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 2.5rem;
  text-align: center;
`;
const projects = [
  {
    title: 'Frostbite Frenzy',
    imgSrc:
      'https://isebring.github.io/Hampus-Isebring-Portfolio/imgs/frostbite-frenzy.PNG',
    description:
      'Me and 5 fellow students created this game using P5.js and TypeScript.',
  },
  {
    title: 'Design Portfolio',
    imgSrc:
      'https://isebring.github.io/Hampus-Isebring-Portfolio/imgs/portfolio-projects.png',
    description:
      'In this Figma portfolio I present my case studies in design. They are all related to the design process',
  },
  {
    title: 'GHEDb',
    imgSrc:
      'https://isebring.github.io/Hampus-Isebring-Portfolio/imgs/ghedb-site.PNG',
    description:
      'Me and 2 fellow students created a movie application using React and TypeScript.',
  },
];

function PortfolioItem(props: any) {
  const { title, imgSrc, description } = props;

  return (
    <Container>
      <Flex justify="center" align="center">
        <PortfolioBox>
          <PortfolioImg src={imgSrc} alt={title} />
          <PortfolioOverlay>
            <Heading style={{ textAlign: 'center', marginTop: '1rem' }}>{title}</Heading>
            <Text style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
              {description}
            </Text>

            <ActionIcon
              mt="lg"
              mx="auto"
              component="a"
              href="https://github.com/Isebring"
              target="_blank"
              sx={{ borderRadius: '50%' }}
              size="lg"
              color="blue"
              aria-label="Github"
              variant="filled"
            >
              <IconExternalLink size="1.5rem" />
            </ActionIcon>

            <ActionIcon
              mt="sm"
              mx="auto"
              component="a"
              href="https://github.com/Isebring"
              target="_blank"
              sx={{ borderRadius: '50%' }}
              size="lg"
              color="blue"
              aria-label="Github"
              variant="filled"
            >
              <IconBrandGithub size="1.5rem" />
            </ActionIcon>
          </PortfolioOverlay>
        </PortfolioBox>
      </Flex>
    </Container>
  );
}

function Portfolio() {
  return (
    <Container fluid>
      <Title align="center" mt="lg" mb="lg">
        My Portfolio
      </Title>

      <Flex justify="center" align="center">
        <Box>
          <MediaQuery
            query="(max-width: 900px)"
            styles={{
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <PortfolioContent>
              {projects.map((project, index) => (
                <PortfolioItem
                  key={index}
                  title={project.title}
                  imgSrc={project.imgSrc}
                  description={project.description}
                />
              ))}
            </PortfolioContent>
          </MediaQuery>
        </Box>
      </Flex>
    </Container>
  );
}
export default Portfolio;
