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

import facebookIco from "../../../assets/Facebook.svg";
import twitterIco from "../../../assets/Twitter.svg";
import githubIco from "../../../assets/Github.svg";
import telegramIco from "../../../assets/Telegram.svg";

const icons = [facebookIco, twitterIco, githubIco, telegramIco];

const styles = (theme: MantineTheme): CSSObject => ({
  backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark : "white",
  minHeight: 200,
});

const useStyles = createStyles((theme) => ({
  root: {
    marginRight: "auto",
  },
  col: {
    display: "flex",
    flexDirection: "column",
  },
  link: {
    color: theme.colors.gray[5],
    width: "fit-content",
    "&:hover": {
      color: theme.colors.blue[5],
      textDecoration: "none",
    },
  },
}));

export default function Footer() {
  const { classes } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const handleToggle = () => {
    toggleColorScheme(dark ? "light" : "dark");
  };

  return (
    <Container sx={styles} fluid>
      <Container size="xl" p="xl">
        <Divider my="sm" />
        <Grid>
          {FooterItems.map((item) => {
            return (
              <Grid.Col key={item.title} className={classes.col} sm={4}>
                <Title order={5} mb="sm">
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
          <Switch size="md" classNames={classes} onChange={() => handleToggle()} />
          {icons.map((icon) => {
            return (
              <Anchor key={icon}>
                <Image src={icon} height={24} width={24} />
              </Anchor>
            );
          })}
        </Group>
      </Container>
    </Container>
  );
}
