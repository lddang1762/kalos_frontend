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

import facebookIco from "../../assets/Facebook.svg";
import twitterIco from "../../assets/Twitter.svg";
import githubIco from "../../assets/Github.svg";
import telegramIco from "../../assets/Telegram.svg";

const styles = (theme: MantineTheme): CSSObject => ({
  backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark : "white",
  minHeight: 200,
});

const useStyles = createStyles((theme) => ({
  root: {
    marginRight: "auto",
  },
  input: {
    backgroundColor: theme.colors.dark[1],
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
          <Grid.Col className={classes.col} sm={4}>
            <Title order={5} mb="sm">
              About
            </Title>
            <Anchor className={classes.link}>Contact Us</Anchor>
            <Anchor className={classes.link}>FAQ</Anchor>
            <Anchor className={classes.link}>White Paper</Anchor>
          </Grid.Col>

          <Grid.Col className={classes.col} sm={4}>
            <Title order={5} mb="sm">
              Developers
            </Title>
            <Anchor className={classes.link}>Github</Anchor>
            <Anchor className={classes.link}>Documentation</Anchor>
            <Anchor className={classes.link}>Audits</Anchor>
          </Grid.Col>

          <Grid.Col className={classes.col} sm={4}>
            <Title order={5} mb="sm">
              Community
            </Title>
            <Anchor className={classes.link} href="#" target="_blank" rel="nofollow noopener">
              Telegram
            </Anchor>
            <Anchor className={classes.link}>Discord</Anchor>
            <Anchor className={classes.link}>Facebook</Anchor>
            <Anchor className={classes.link}>Twitter</Anchor>
          </Grid.Col>
        </Grid>
        <Divider mt="lg" mb="sm" />
        <Group>
          <Switch size="md" classNames={classes} onChange={() => handleToggle()} />
          <Anchor>
            <Image src={facebookIco}></Image>
          </Anchor>
          <Image src={twitterIco}></Image>
          <Image src={githubIco}></Image>
          <Image src={telegramIco}></Image>
        </Group>
      </Container>
    </Container>
  );
}
