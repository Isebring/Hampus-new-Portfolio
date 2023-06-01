import { Container, Flex, MediaQuery, Title } from '@mantine/core';
import { Link } from 'react-router-dom';
import { BadgeCardProps, SkillsCard } from '../components/SkillsCard';

function portfolioLink() {
  <Link to="/portfolio">Check out my portfolio tab.</Link>;
}

function Skills() {
  const skills: BadgeCardProps[] = [
    {
      image:
        'https://images.unsplash.com/photo-1634245482394-1bcf5ccffcc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      title: 'UX Design',
      subject: 'Digital Design',
      description: (
        <>
          UX design is something I am familiar with due to my three years of
          studying at Halmstad university. UX and UI are both important parts,
          and I believe a designer needs both to succeed well in a design
          process. While UX refers to the overall experience of a product or
          service, UI is what meets the eye and therefore is an important part
          of the experience. I present my design projects in a Figma portfolio.{' '}
          <Link to="/portfolio">Check out my portfolio tab.</Link>
        </>
      ),
      badges: [
        {
          emoji: '👀',
          label: 'Keep my eyes open',
        },
        {
          emoji: '🔎',
          label: 'Research',
        },
        {
          emoji: '🗣️',
          label: 'Talk to users',
        },
        {
          emoji: '👩',
          label: 'Personas',
        },
        {
          emoji: '🎭',
          label: 'Scenarios',
        },
        {
          emoji: '💭',
          label: 'Brainstorm',
        },
        {
          emoji: '💡',
          label: 'Idea generation',
        },
        {
          emoji: '✏️',
          label: 'Sketches',
        },
        {
          emoji: '🖥',
          label: 'Wireframes',
        },
        {
          emoji: '📝',
          label: 'User tests',
        },
        {
          emoji: '🔄',
          label: 'Iteration',
        },
      ],
    },
    {
      image:
        'https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      title: 'Service Design',
      subject: 'Digital Design',
      description:
        'Service design is a more holistic approach and I have implemented it in some design processes. Considering both aspects of frontstage and backstage has its benefits when establishing value in a business. Creating a service blueprint among other actions leads to a better understanding of how things connect and work in a bigger picture.',
      badges: [
        {
          emoji: '🔎',
          label: 'Research',
        },
        {
          emoji: '🟨',
          label: 'Card Sorting',
        },
        {
          emoji: '💼',
          label: 'Business Model Canvas',
        },
        {
          emoji: '🛄',
          label: 'Service Blueprint',
        },
        {
          emoji: '🛒',
          label: 'Service Safari',
        },
        {
          emoji: '📍',
          label: 'Stakeholder mapping',
        },
        {
          emoji: '🎯',
          label: 'Journey map',
        },
        {
          emoji: '🗣️',
          label: 'Talk to stakeholders',
        },
        {
          emoji: '💡',
          label: 'Idea generation',
        },
        {
          emoji: '📝',
          label: 'User tests',
        },
        {
          emoji: '🔄',
          label: 'Iteration',
        },
      ],
    },
    {
      image:
        'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      title: 'Front End Development',
      subject: 'Coding',
      description:
        'HTML, CSS, JavaScript & TypeScript. I am also familiar with Webflow and Wordpress. I have most experience in HTML, CSS and JavaScript. I am getting more used to TypeScript, and I am using libraries such as React and Preact in projects.',
      badges: [
        {
          emoji: '📄',
          label: 'Documentation',
        },
        {
          emoji: '🌐',
          label: 'Seek inspiration',
        },
        {
          emoji: '</>',
          label: 'Pseudocode',
        },
        {
          emoji: '🧩',
          label: 'Flowchart',
        },
        {
          emoji: '🗣',
          label: 'Discuss code',
        },
        {
          emoji: '🔎',
          label: 'Google',
        },
        {
          emoji: '🤖',
          label: 'AI',
        },
        {
          emoji: '🔄',
          label: 'Iteration',
        },
        {
          emoji: '🦆',
          label: 'Rubber Duck',
        },
      ],
    },
    {
      image:
        'https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      title: 'Back End Development',
      subject: 'Coding',
      description:
        'Node, Express, Socket.io and MongoDB are some of the tools I have worked with during Back End development. I have for example created Rest API:s with CRUD operations.',
      badges: [
        {
          emoji: '📄',
          label: 'Documentation',
        },
        {
          emoji: '🌐',
          label: 'Seek inspiration',
        },
        {
          emoji: '</>',
          label: 'Pseudocode',
        },
        {
          emoji: '🧩',
          label: 'Flowchart',
        },
        {
          emoji: '🗣',
          label: 'Discuss code',
        },
        {
          emoji: '🔎',
          label: 'Google',
        },
        {
          emoji: '🤖',
          label: 'AI',
        },
        {
          emoji: '🔄',
          label: 'Iteration',
        },
        {
          emoji: '🦆',
          label: 'Rubber Duck',
        },
      ],
    },
  ];
  return (
    <Container sx={{ maxWidth: '1600px' }}>
      <Title align="center" mt="lg">
        My Skills
      </Title>
      <MediaQuery
        query="(max-width: 1000px)"
        styles={{
          flexDirection: 'column',
        }}
      >
        <Flex justify="center" gap="lg" mt="xl">
          {skills.map((skill) => (
            <SkillsCard
              key={skill.title}
              image={skill.image}
              title={skill.title}
              subject={skill.subject}
              description={skill.description}
              badges={skill.badges}
            />
          ))}
        </Flex>
      </MediaQuery>
    </Container>
  );
}
export default Skills;
