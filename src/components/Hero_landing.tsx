import {
  Title,
  Text,
  Container,
  Button,
  Overlay,
  createStyles,
  Space,
  Group,
} from "@mantine/core";
import { IconBat, IconBrandLinkedin, IconBrandGithub } from "@tabler/icons";
import { GithubIcon } from "@mantine/ds";
import sherb_sleepy from "./pics/sherb_sleepy.jpg";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: 100,
    paddingBottom: 250,
    backgroundImage: `url(${sherb_sleepy})`, // foreign syntax to me tbh. from : https://www.freecodecamp.org/news/react-background-image-tutorial-how-to-set-backgroundimage-with-inline-css-style/
    backgroundSize: "cover",
    backgroundPosition: "center",

    "@media (max-width: 520px)": {
      paddingTop: 80,
      paddingBottom: 50,
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: "center",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    "@media (max-width: 520px)": {
      fontSize: 28,
      textAlign: "left",
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: "center",

    "@media (max-width: 520px)": {
      fontSize: theme.fontSizes.md,
      textAlign: "left",
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 1.5,
    display: "flex",
    justifyContent: "center",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    "@media (max-width: 520px)": {
      flexDirection: "column",
    },
  },

  control: {
    height: 42,
    fontSize: theme.fontSizes.md,

    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    "@media (max-width: 520px)": {
      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 10,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: "rgba(255, 255, 255, .4)",

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .45) !important",
    },
  },
}));

export function Hero_Landing() {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          My dog deserves the{" "}
          <Text component="span" inherit className={classes.highlight}>
            best
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Including the best website – but unfortunately he has to share it
            with me.
            <Space h="xl" />
            Below are some brief overviews of my projects. And pictures of my
            dog. My LinkedIn and the source code are also available by clicking
            the buttons here. Alternatively, you can just go straight to his
            pictures.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            component="a"
            href="https://www.linkedin.com/in/patrick-finnerty"
            size="xl"
            radius="xl"
            variant="gradient"
            className={classes.control}
            leftIcon={<IconBrandLinkedin size={20} />}
          >
            LinkedIn
          </Button>

          <Button
            component="a"
            href="https://github.com/patimus-prime/"
            size="xl"
            radius="xl"
            variant="default"
            className={classes.control}
            leftIcon={<GithubIcon size={20} />}
          >
            GitHub
          </Button>

          {/* FIXME: Scroll-to */}
          <Button
            component="a"
            href="https://github.com/patimus-prime/"
            size="xl"
            radius="xl"
            variant="gradient"
            gradient={{ from: "red", to: "yellow", deg: 45 }}
            className={classes.control}
            // leftIcon={<GithubIcon size={20} />}
          >
            😍 DOG!
          </Button>

          {/* alternative:  component = "a" href ="wherever"*/}
        </div>
      </div>
    </div>
  );
}
