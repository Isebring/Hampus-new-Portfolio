import { Container, Divider, Text, Title } from "@mantine/core";
import { GoGoal } from "react-icons/go";

function Goal() {
  return (
    <Container size="xl">
      <Title sx={{ display: "flex" }} mb="lg" order={3}>
        My goal
        <GoGoal size="2rem" style={{ marginLeft: "auto" }} />
      </Title>
      <Text>
        I have a strong passion for creating digital solutions that supports
        people in their lives. I believe that my background from design combined
        with my enhanced knowledge and understanding of how developers work can
        contribute to a broad understanding of the whole process of creating
        digital artefacts, from start to finish. One of my main goals with a
        career in IT is to be able to combine interests and subjects I am
        passionate about. To name some of them: Being a{" "}
        <Text span c="blue">
          helping hand
        </Text>{" "}
        for people.{" "}
        <Text span c="blue">
          Sustainability
        </Text>{" "}
        for our planet and it's habitants.{" "}
        <Text span c="blue">
          Accessibility and equity
        </Text>{" "}
        since we are all unique and have different needs.
      </Text>
      <Divider mt="xl" />
    </Container>
  );
}

export default Goal;
