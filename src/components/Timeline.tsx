import {
  Avatar,
  Box,
  Container,
  Divider,
  Flex,
  MediaQuery,
  Text,
  ThemeIcon,
  Timeline,
  Title,
} from '@mantine/core';
import { IconBrandZoom, IconPencil, IconSchool } from '@tabler/icons-react';

function MyTimeLine() {
  return (
    <Container size="xl">
      <MediaQuery
        query="(max-width: 780px)"
        styles={{
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Flex mx="auto" mt="xl" justify="space-between">
          <MediaQuery
            query="(max-width: 780px)"
            styles={{
              width: '100%',
            }}
          >
            <Box sx={{ width: '50%' }}>
              <Title mb="lg" order={4}>
                My journey in IT
              </Title>
              <Timeline>
                <Timeline.Item
                  title="2019. The beginning of my journey"
                  bulletSize={24}
                  bullet={
                    <Avatar
                      size={22}
                      radius="xl"
                      src="/imgs/hh-logo.png"
                      alt="Halmstad University logo"
                    />
                  }
                >
                  <Text color="dimmed" size="sm">
                    Digital Design, Halmstad University
                  </Text>
                </Timeline.Item>
                <Timeline.Item
                  title="2020. On-site to Remote"
                  bulletSize={24}
                  bullet={
                    <ThemeIcon
                      size={22}
                      variant="gradient"
                      gradient={{
                        from: 'blue',
                        to: 'cyan',
                      }}
                      radius="xl"
                    >
                      <IconBrandZoom size="0.8rem" stroke={1.5} />
                    </ThemeIcon>
                  }
                >
                  <Text color="dimmed" size="sm">
                    Early in 2020 the pandemic changed my studies as I knew
                    them.
                  </Text>
                </Timeline.Item>
                <Timeline.Item
                  title="2021. The role of a designer"
                  bulletSize={24}
                  bullet={
                    <ThemeIcon
                      size={22}
                      variant="gradient"
                      gradient={{
                        from: 'teal',
                        to: 'cyan',
                      }}
                      radius="xl"
                    >
                      <IconPencil size="0.85rem" stroke={1.5} />
                    </ThemeIcon>
                  }
                >
                  <Text color="dimmed" size="sm">
                    As the years went by, I got more and more comfortable as to
                    what my role as a designer is.
                  </Text>
                </Timeline.Item>
                <Timeline.Item
                  title="2022. Graduation"
                  bulletSize={24}
                  bullet={
                    <ThemeIcon
                      size={22}
                      variant="gradient"
                      gradient={{
                        from: 'lightblue',
                        to: 'cyan',
                      }}
                      radius="xl"
                    >
                      <IconSchool size="0.85rem" stroke={1.5} />
                    </ThemeIcon>
                  }
                >
                  <Text color="dimmed" size="sm">
                    In June 2022 I graduated and can now call myself a junior
                    designer.
                  </Text>
                </Timeline.Item>
                <Timeline.Item
                  title="2022-Present. Front End Developer"
                  bulletSize={24}
                  bullet={
                    <Avatar
                      size={22}
                      radius="xl"
                      src="/imgs/mi-logo.png"
                      alt="Medieinstitutet logo"
                    />
                  }
                >
                  <Text color="dimmed" size="sm">
                    Medieinstitutet. After graduating I felt an interest to know
                    more how developers work so I can better understand and
                    collaborate with them.
                  </Text>
                </Timeline.Item>
              </Timeline>
            </Box>
          </MediaQuery>
          <MediaQuery
            query="(max-width: 780px)"
            styles={{
              width: '100%',
              marginTop: '1rem'
            }}
          >
            <Box sx={{ width: '50%' }}>
              <Title mb="lg" order={4}>
                My goal
              </Title>
              <Text>
                I have a strong passion for creating digital solutions that
                supports people in their lives. I believe that my background
                from design combined with my enhanced knowledge and
                understanding of how developers work can contribute to a broad
                understanding of the whole process of creating digital
                artefacts, from start to finish. One of my main goals with a
                career in IT is to be able to combine interests and subjects I
                am passionate about. To name some of them: Being a{' '}
                <span style={{ color: '#228be6' }}>helping hand</span> for
                people. <span style={{ color: '#228be6' }}>Sustainability</span>{' '}
                for our planet and it's habitants.{' '}
                <span style={{ color: '#228be6' }}>
                  Accessibility and equity
                </span>{' '}
                since we are all unique and have different needs.
              </Text>
            </Box>
          </MediaQuery>
        </Flex>
      </MediaQuery>
      <Divider mt="md" mb="md" />
    </Container>
  );
}

export default MyTimeLine;
