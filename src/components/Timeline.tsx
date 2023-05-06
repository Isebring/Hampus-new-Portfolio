import { Avatar, Box, Divider, Text, ThemeIcon, Timeline, Title } from '@mantine/core';
import { IconBrandZoom, IconPencil, IconSchool } from '@tabler/icons-react';

function MyTimeLine() {
  return (
    <Box maw={320} mx="auto" mt="xl">
      <Title mb="lg" align="center" order={4}>
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
              src="https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/306003674_531200435678034_4822185864769976897_n.png?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VHBhR3GGv70AX_2Wkt5&_nc_ht=scontent-arn2-1.xx&oh=00_AfDBjKWo5-YA07g3jS4bf2GZoVUsR4XI5QVtOJXLRYpvJQ&oe=6459948C"
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
              gradient={{ from: 'blue', to: 'cyan' }}
              radius="xl"
            >
              <IconBrandZoom size="0.8rem" stroke={1.5} />
            </ThemeIcon>
          }
        >
          <Text color="dimmed" size="sm">
            Early in 2020 the pandemic changed my studies as I knew them.
          </Text>
        </Timeline.Item>
        <Timeline.Item
          title="2021. The role of a designer"
          bulletSize={24}
          bullet={
            <ThemeIcon
              size={22}
              variant="gradient"
              gradient={{ from: 'teal', to: 'cyan' }}
              radius="xl"
            >
              <IconPencil size="0.85rem" stroke={1.5} />
            </ThemeIcon>
          }
        >
          <Text color="dimmed" size="sm">
            As the years went by, I got more and more comfortable as to what my
            role as a designer is.
          </Text>
        </Timeline.Item>
        <Timeline.Item
          title="2022. Graduation"
          bulletSize={24}
          bullet={
            <ThemeIcon
              size={22}
              variant="gradient"
              gradient={{ from: 'lightblue', to: 'cyan' }}
              radius="xl"
            >
              <IconSchool size="0.85rem" stroke={1.5} />
            </ThemeIcon>
          }
        >
          <Text color="dimmed" size="sm">
            In June 2022 I graduated and can now call myself a junior designer.
          </Text>
        </Timeline.Item>
        <Timeline.Item
          title="2022-Present. Front End Developer"
          bulletSize={24}
          bullet={
            <Avatar
              size={22}
              radius="xl"
              src="https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/294741673_447501380716314_4282193232347612574_n.png?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OI9SRh1esBgAX_VvAD6&_nc_ht=scontent-arn2-1.xx&oh=00_AfATV4lesIPmaP2fvtfAvuID8Gf3VeD4rEBQiyEa7AgboA&oe=645A7BFA"
            />
          }
        >
          <Text color="dimmed" size="sm">
            Medieinstitutet. After graduating I felt an interest to know more how developers work
            so I can better understand and collaborate with them.
          </Text>
        </Timeline.Item>
      </Timeline>
      <Divider mt="md"/>
    </Box>
  );
}

export default MyTimeLine;
