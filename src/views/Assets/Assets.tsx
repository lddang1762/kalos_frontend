import React, { useState } from "react";
import { Box, Container, Group, Tabs, Title, Text, TextInput, createStyles } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { Search, Coin } from "tabler-icons-react";

import Page from "../../components/layout/Page";
import StyledContainer from "../../components/layout/StyledContainer";

const useStyles = createStyles((theme) => ({
  input: {
    backgroundColor: theme.colors.paper,
    width: 250,
    border: "none",
  },
  body: {
    backgroundColor: theme.colors.paper,
    borderBottomLeftRadius: theme.radius.md,
    borderBottomRightRadius: theme.radius.md,
    borderTopRightRadius: theme.radius.md,
  },
  tabControl: {
    height: 30,
    backgroundColor: theme.colors.medium,
    borderTopLeftRadius: theme.radius.md,
    borderTopRightRadius: theme.radius.md,
    letterSpacing: 0.5,
    paddingInline: 50,
    "&:not(:first-of-type)": {
      marginInline: 2,
    },
    "&:first-of-type": {
      marginRight: 2,
    },
    "&:last-of-type": {
      marginLeft: 2,
    },
  },
  tabActive: {
    backgroundColor: theme.colors.paper,
    fontWeight: "bold",
  },
}));

export default function Assets() {
  const { classes } = useStyles();
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebouncedValue(query, 200);

  const handleChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  return (
    <Page>
      <StyledContainer fluid style={{ position: "relative" }}>
        <Container fluid mb="xl">
          <Title mb="lg">Assets</Title>
          <Group spacing={100}>
            <Box component="div">
              <Text size="lg">Total Assets</Text>
              <Title>$54,321</Title>
            </Box>
            <Box component="div">
              <Text size="lg">Available Assets</Text>
              <Title>$23,411</Title>
            </Box>
            <Box component="div">
              <Text size="lg">Staked Assets</Text>
              <Title>$30,910</Title>
            </Box>
          </Group>
        </Container>

        {/* <TextInput
          classNames={{ input: classes.input }}
          sx={{ position: "absolute", right: 20 }}
          size="sm"
          placeholder="Search"
          icon={<Search />}
          onChange={(e) => handleChangeQuery(e)}
        /> */}
        <Container fluid>
          <Tabs variant="unstyled" classNames={classes}>
            <Tabs.Tab label="All">
              <Text>asdf</Text>
            </Tabs.Tab>
            <Tabs.Tab label="Ethereum">
              <Text>asdf</Text>
            </Tabs.Tab>
            <Tabs.Tab label="Cosmos">
              <Text>asdf</Text>
            </Tabs.Tab>
            <Tabs.Tab label="Polygon">
              <Text>asdf</Text>
            </Tabs.Tab>
          </Tabs>
        </Container>
      </StyledContainer>
    </Page>
  );
}
