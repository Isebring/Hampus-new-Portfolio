import {
  Burger,
  Container,
  Group,
  Header,
  Image,
  MediaQuery,
  Paper,
  Switch,
  Transition,
  createStyles,
  rem,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { MdLanguage } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import i18n from "../i18";

const HEADER_HEIGHT = rem(70);

const useStyles = createStyles((theme) => ({
  root: {
    position: "sticky",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",
    "& ul": {
      padding: 0,
      margin: 0,
      listStyle: "none",
    },
    "& li": {
      padding: 0,
      margin: 0,
    },

    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
  logoLink: {
    "& img": {
      transition: "transform 0.45s ease-in-out",
    },
    "&:hover img": {
      transform: "scale(1.03)",
    },
  },
}));
export interface NavigationbarProps {
  links: { link: string; label: string }[];
}

export function Navigationbar({ links }: NavigationbarProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [logoType, setLogoType] = useState("dark");
  const theme = useMantineTheme();
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleToggle = () => {
    toggleColorScheme();
    setLogoType(colorScheme === "dark" ? "dark" : "light");
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const logoSize = windowWidth <= 400 ? "6.699rem" : "7.6rem";

  const logo =
    logoType === "dark" ? (
      <Image
        height="50%"
        width={logoSize}
        src="../imgs/hampuslogo.svg"
        alt="Hampus Isebring logo"
      />
    ) : (
      <Image
        src="../imgs/hampuslogodark.svg"
        height="50%"
        width={logoSize}
        alt="Hampus Isebring logo"
      />
    );

  const items = links.map((link, index) => (
    <ul key={index}>
      <li style={{ listStyle: "none" }}>
        <Link
          key={link.label}
          to={link.link}
          className={cx(classes.link, {
            [classes.linkActive]: active === link.link,
          })}
          onClick={() => {
            setActive(link.link);
            close();
          }}
        >
          {link.label}
        </Link>
      </li>
    </ul>
  ));

  const [isBurgerVisible, setIsBurgerVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsBurgerVisible(window.innerWidth < 991);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function ToggleDarkAndLightMode() {
    const { colorScheme } = useMantineColorScheme();

    const handleKeyDown = (event: any) => {
      if (event.key === "Enter") {
        handleToggle();
      }
    };

    useEffect(() => {
      setActive(location.pathname);
    }, [location.pathname]);

    return (
      <Group position="center" my={30}>
        <Switch
          onKeyDown={handleKeyDown}
          aria-label="Here you can switch between light and dark mode colors for the webpage"
          checked={colorScheme === "dark"}
          size="sm"
          onClick={handleToggle}
          onLabel={<IconSun color={theme.white} size="1.25rem" stroke={1.5} />}
          offLabel={
            <IconMoonStars
              color={theme.colors.gray[6]}
              size="1rem"
              stroke={1.5}
            />
          }
        />
      </Group>
    );
  }

  function ToggleLanguage() {
    const [isEnglish, setIsEnglish] = useState(i18n.language === "en");

    const handleKeyDown = (event: any) => {
      if (event.key === "Enter") {
        toggleLanguage();
      }
    };

    const toggleLanguage = () => {
      const newLang = i18n.language === "en" ? "sv" : "en";
      i18n.changeLanguage(newLang);
      setIsEnglish(!isEnglish);
    };

    return (
      <Group position="center" my={30}>
        <Switch
          labelPosition="left"
          color="gray"
          radius="md"
          size="xs"
          onKeyDown={handleKeyDown}
          aria-label="Toggle language"
          checked={isEnglish}
          onChange={toggleLanguage}
          label={isEnglish ? "EN" : "SV"}
          onLabel={<MdLanguage size="1rem" />}
          offLabel={<MdLanguage size="1rem" />}
        />
      </Group>
    );
  }

  function handleLinkClick() {
    setActive(links[0].link);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function scrollBackToTop() {
    window.scrollTo({
      top: 0,
    });
  }

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container size="xl" className={classes.header}>
        <MediaQuery
          query="(max-width: 460px)"
          styles={{
            img: {
              width: "6rem",
              height: "5rem",
            },
          }}
        >
          <Link
            to="./"
            onClick={handleLinkClick}
            className={cx(classes.logoLink)}
            aria-label="Go to Home Page"
            title="Homepage of Hampus Isebring's portfolio"
          >
            <Group spacing={1}>{logo}</Group>
          </Link>
        </MediaQuery>
        <Group onClick={scrollBackToTop} spacing={5} className={classes.links}>
          {items}
        </Group>
        <Group position="right">
          <ToggleDarkAndLightMode />
          <ToggleLanguage />
          <Burger
            aria-label="Click to open mobile menu"
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
        </Group>
        <Transition transition="skew-up" duration={400} mounted={opened}>
          {(styles) => (
            <Paper
              onClick={scrollBackToTop}
              className={classes.dropdown}
              withBorder
              style={styles}
            >
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
