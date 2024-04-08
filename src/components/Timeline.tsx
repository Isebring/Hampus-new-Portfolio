import {
  Avatar,
  Box,
  Container,
  Divider,
  Flex,
  Image,
  MediaQuery,
  Text,
  ThemeIcon,
  Timeline,
  Title,
} from "@mantine/core";
import { IconBrandZoom, IconPencil, IconSchool } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

function MyTimeLine() {
  const { t } = useTranslation();
  return (
    <Container size="xl">
      <MediaQuery
        query="(max-width: 780px)"
        styles={{
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Flex mx="auto" mt="xl" justify="space-between">
          <MediaQuery
            query="(max-width: 780px)"
            styles={{
              width: "100%",
            }}
          >
            <Box sx={{ width: "50%" }}>
              <Title mb="lg" order={3}>
                {t("journey")}
              </Title>
              <Timeline>
                <Timeline.Item
                  title={t("title1")}
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
                  <Text size="sm">{t("text1")}</Text>
                </Timeline.Item>
                <Timeline.Item
                  title={t("title2")}
                  bulletSize={24}
                  bullet={
                    <ThemeIcon
                      size={22}
                      variant="gradient"
                      gradient={{
                        from: "blue",
                        to: "cyan",
                      }}
                      radius="xl"
                    >
                      <IconBrandZoom size="0.8rem" stroke={1.5} />
                    </ThemeIcon>
                  }
                >
                  <Text size="sm">{t("text2")}</Text>
                </Timeline.Item>
                <Timeline.Item
                  title={t("title3")}
                  bulletSize={24}
                  bullet={
                    <ThemeIcon
                      size={22}
                      variant="gradient"
                      gradient={{
                        from: "teal",
                        to: "cyan",
                      }}
                      radius="xl"
                    >
                      <IconPencil size="0.85rem" stroke={1.5} />
                    </ThemeIcon>
                  }
                >
                  <Text size="sm">{t("text3")}</Text>
                </Timeline.Item>
                <Timeline.Item
                  title={t("title4")}
                  bulletSize={24}
                  bullet={
                    <ThemeIcon
                      size={22}
                      variant="gradient"
                      gradient={{
                        from: "lightblue",
                        to: "cyan",
                      }}
                      radius="xl"
                    >
                      <IconSchool size="0.85rem" stroke={1.5} />
                    </ThemeIcon>
                  }
                >
                  <Text size="sm">{t("text4")}</Text>
                </Timeline.Item>
                <Timeline.Item
                  title={t("title5")}
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
                  <Text size="sm">{t("text5")}</Text>
                </Timeline.Item>
                <Timeline.Item
                  title={t("title6")}
                  bulletSize={24}
                  bullet={
                    <Avatar
                      size={22}
                      radius="xl"
                      src="/imgs/dh-logo.jpg"
                      alt="DH Solutions logo"
                    />
                  }
                >
                  <Text size="sm">{t("text6")}</Text>
                </Timeline.Item>
              </Timeline>
            </Box>
          </MediaQuery>
          <MediaQuery
            query="(max-width: 780px)"
            styles={{
              width: "100%",
              marginTop: "1rem",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Image
                maw={500}
                src="/imgs/illustration.svg"
                alt="an illustration of a man showing messages on his computer"
              />
            </Box>
          </MediaQuery>
        </Flex>
      </MediaQuery>
      <Divider mt="md" mb="md" />
    </Container>
  );
}

export default MyTimeLine;
