import { Container, Flex, MediaQuery, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { BadgeCardProps, SkillsCard } from "../components/SkillsCard";

function portfolioLink() {
  <Link to="/portfolio">Check out my portfolio tab.</Link>;
}

function Skills() {
  const { t } = useTranslation();
  const skills: BadgeCardProps[] = [
    {
      image:
        "https://images.unsplash.com/photo-1634245482394-1bcf5ccffcc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "UX Design",
      subject: "Digital Design",
      description: <>{t("skillsText1")}</>,
      badges: [
        {
          emoji: "👀",
          label: "Keep my eyes open",
        },
        {
          emoji: "🔎",
          label: "Research",
        },
        {
          emoji: "🗣️",
          label: "Talk to users",
        },
        {
          emoji: "👩",
          label: "Personas",
        },
        {
          emoji: "🎭",
          label: "Scenarios",
        },
        {
          emoji: "💭",
          label: "Brainstorm",
        },
        {
          emoji: "💡",
          label: "Idea generation",
        },
        {
          emoji: "✏️",
          label: "Sketches",
        },
        {
          emoji: "🖥",
          label: "Wireframes",
        },
        {
          emoji: "📝",
          label: "User tests",
        },
        {
          emoji: "🔄",
          label: "Iteration",
        },
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Service Design",
      subject: "Digital Design",
      description: <>{t("skillsText2")}</>,
      badges: [
        {
          emoji: "🔎",
          label: "Research",
        },
        {
          emoji: "🟨",
          label: "Card Sorting",
        },
        {
          emoji: "💼",
          label: "Business Model Canvas",
        },
        {
          emoji: "🛄",
          label: "Service Blueprint",
        },
        {
          emoji: "🛒",
          label: "Service Safari",
        },
        {
          emoji: "📍",
          label: "Stakeholder mapping",
        },
        {
          emoji: "🎯",
          label: "Journey map",
        },
        {
          emoji: "🗣️",
          label: "Talk to stakeholders",
        },
        {
          emoji: "💡",
          label: "Idea generation",
        },
        {
          emoji: "📝",
          label: "User tests",
        },
        {
          emoji: "🔄",
          label: "Iteration",
        },
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Front End",
      subject: "Coding",
      description: <>{t("skillsText3")}</>,
      badges: [
        {
          emoji: "📄",
          label: "Documentation",
        },
        {
          emoji: "🌐",
          label: "Seek inspiration",
        },
        {
          emoji: "</>",
          label: "Pseudocode",
        },
        {
          emoji: "🧩",
          label: "Flowchart",
        },
        {
          emoji: "🗣",
          label: "Discuss code",
        },
        {
          emoji: "🔎",
          label: "Google",
        },
        {
          emoji: "🤖",
          label: "AI",
        },
        {
          emoji: "🔄",
          label: "Iteration",
        },
        {
          emoji: "🦆",
          label: "Rubber Duck",
        },
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Back End",
      subject: "Coding",
      description: <>{t("skillsText4")}</>,
      badges: [
        {
          emoji: "📄",
          label: "Documentation",
        },
        {
          emoji: "🌐",
          label: "Seek inspiration",
        },
        {
          emoji: "</>",
          label: "Pseudocode",
        },
        {
          emoji: "🧩",
          label: "Flowchart",
        },
        {
          emoji: "🗣",
          label: "Discuss code",
        },
        {
          emoji: "🔎",
          label: "Google",
        },
        {
          emoji: "🤖",
          label: "AI",
        },
        {
          emoji: "🔄",
          label: "Iteration",
        },
        {
          emoji: "🦆",
          label: "Rubber Duck",
        },
      ],
    },
  ];
  return (
    <Container sx={{ maxWidth: "1600px" }}>
      {/* <Divider mt="md" /> */}
      <Title
        order={2}
        align="center"
        sx={{ marginTop: "1.5rem", marginBottom: "2.5rem" }}
      >
        {t("skillsTitle")}
      </Title>
      <MediaQuery
        query="(max-width: 1000px)"
        styles={{
          flexDirection: "column",
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
