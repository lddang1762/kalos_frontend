import React from "react";
import {
  Divider,
  Container,
  Group,
  Grid,
  Title,
  Anchor,
  Switch,
  CSSObject,
  MantineTheme,
  createStyles,
  useMantineColorScheme,
} from "@mantine/core";

import FooterItems from "./FooterItems";
import sunIco from "../../../assets/Sun.svg";
import moonIco from "../../../assets/Moon.svg";

import { ReactComponent as FacebookSVG } from "../../../assets/Facebook.svg";
import { ReactComponent as TwitterSVG } from "../../../assets/Twitter.svg";
import { ReactComponent as GithubSVG } from "../../../assets/Github.svg";
import { ReactComponent as TelegramSVG } from "../../../assets/Telegram.svg";

const icons = [FacebookSVG, TwitterSVG, GithubSVG, TelegramSVG];

const styles = (theme: MantineTheme): CSSObject => ({
  backgroundColor: theme.white,
  minHeight: 200,
});

const useStyles = createStyles((theme) => ({
  root: {
    marginRight: "auto",
  },
  input: {
    "::after": {
      height: 18,
      width: 18,
      display: "block",
      transform: "translateX(10%)",
      content: `url(${moonIco})`,
    },
    ":checked": {
      "::before": {
        backgroundColor: "white",
        borderColor: "white",
      },
      "::after": {
        height: 18,
        width: 18,
        display: "block",
        transform: "translateX(-110%)",
        content: `url(${sunIco})`,
      },
    },
  },
  col: {
    display: "flex",
    flexDirection: "column",
  },
  link: {
    color: "#829DB1",
    width: "fit-content",
    "&:hover": {
      color: theme.colors.blue[5],
      textDecoration: "none",
    },
  },
  title: {
    color: theme.colors.dark[9],
  },
  svg: {
    fill: theme.colors.dark[9],
  },
}));

export default function Footer() {
  const { classes } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";

  const handleToggle = () => {
    toggleColorScheme(isDark ? "light" : "dark");
  };

  return (
    <Container sx={styles} fluid>
      <Container size="xl" p="xl">
        <Divider my="sm" />
        <Grid>
          {FooterItems.map((item) => {
            return (
              <Grid.Col key={item.title} className={classes.col} sm={4}>
                <Title className={classes.title} order={5} mb="sm">
                  {item.title}
                </Title>
                {Object.keys(item.links).map((link) => {
                  return (
                    <Anchor
                      key={link}
                      href={item.links[link]}
                      target="_blank"
                      rel="nofollow noopener"
                      className={classes.link}
                    >
                      {link}
                    </Anchor>
                  );
                })}
              </Grid.Col>
            );
          })}
        </Grid>
        <Divider mt="lg" mb="sm" />
        <Group>
          <Switch size="md" classNames={classes} onChange={() => handleToggle()} checked={isDark} />
          {icons.map((Icon, id) => {
            return (
              <Anchor key={id}>
                <Icon className={classes.svg} />
              </Anchor>
            );
          })}
        </Group>
      </Container>
    </Container>
  );
}
