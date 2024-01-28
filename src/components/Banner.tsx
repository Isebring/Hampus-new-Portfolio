import { Button, Card, Overlay, Text, createStyles } from "@mantine/core";
import { Link } from "react-router-dom";

function scrollBackToTop() {
  window.scrollTo({
    top: 0,
  });
}

const useStyles = createStyles((theme) => ({
  card: {
    height: "240px",
    width: "30rem",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
  },
  content: {
    inset: 0,
    padding: theme.spacing.xl,
    position: "relative",
  },
  action: {
    position: "absolute",
    marginTop: "1rem",
    right: theme.spacing.xl,
  },
  title: {
    color: "white",
    marginBottom: "0.5rem",
    textShadow: "1px 1px 1px grey, 0 0 1px lightblue, 0 0 0.1px lightblue",
  },
  description: {
    color: "white",
    maxWidth: "220px",
    textShadow: "1px 1px 1px grey, 0 0 1px lightblue, 0 0 0.1px lightblue",
    fontWeight: 500,
  },
  overlay: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    backgroundImage: `linear-gradient(
          105deg,
          ${theme.colors.black} 20%,
          #312f2f 50%,
          ${theme.colors.gray[4]} 100%
        )`,
  },
}));

function Banner() {
  const { classes } = useStyles();
  return (
    <Card radius="md" className={classes.card}>
      <Overlay className={classes.overlay} opacity={0} zIndex={0} />

      <div className={classes.content}>
        <Text size="lg" fw={700} className={classes.title}>
          Thanks for taking a look!
        </Text>

        <Text size="sm" className={classes.description}>
          You're most welcome to have a look at my projects, I have participated
          in both design and coding projects.
        </Text>
        <Link to="/portfolio">
          <Button
            onClick={scrollBackToTop}
            className={classes.action}
            size="sm"
          >
            Portfolio
          </Button>
        </Link>
      </div>
    </Card>
  );
}

export default Banner;
