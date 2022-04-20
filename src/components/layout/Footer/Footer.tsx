import React from "react";
import {
  Image,
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
import facebookIco from "../../../assets/Facebook.svg";
import twitterIco from "../../../assets/Twitter.svg";
import githubIco from "../../../assets/Github.svg";
import telegramIco from "../../../assets/Telegram.svg";

import { ReactComponent as TelegramSVG } from "../../../assets/Telegram.svg";

const icons = [facebookIco, twitterIco, githubIco, telegramIco];
console.log(facebookIco);
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
    fill: "red",
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
          {icons.map((icon) => {
            return (
              <Anchor key={icon}>
                <Image src={icon} height={24} width={24} sx={{ fill: "red" }} />
              </Anchor>
            );
          })}
          {/* <TelegramSVG fill="red" /> */}
        </Group>
      </Container>
    </Container>
  );
}
