import React, { useState } from "react";
import { Container, Group, Text, Center, Title, Switch, SegmentedControl, TextInput } from "@mantine/core";
import { Search } from "tabler-icons-react";
import Page from "../../components/layout/Page";
import StyledContainer from "../../components/layout/StyledContainer";
import PoolCard from "../../components/Trade/PoolCard";

export default function Trade() {
  const [selected, setSelected] = useState(-1);

  const handleOpen = (id) => {
    selected === id ? setSelected(-1) : setSelected(id);
  };

  const pools = ["BTC-USDT", "ETH-USDT", "ETH-BTC", "AVAX-USDT", "LUNA-USDT", "SOL-USDT"];
  return (
    <Page>
      <StyledContainer fluid pl="55px" mb={20} ml={32} style={{ position: "relative" }}>
        <Center
          sx={{
            color: "#5185EC",
            backgroundColor: "white",
            borderRadius: "100%",
            border: "4px solid",
            boxShadow: "0px 7px 4px -2px rgb(0 0 0 / 10%)",
            width: 64,
            height: 64,
            position: "absolute",
            left: -34,
            top: "calc(50% - 34px)",
          }}
        >
          <Title order={1}>1</Title>
        </Center>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation
        </Text>
      </StyledContainer>

      <Container fluid px={0} mb="50px" sx={{ display: "flex" }}>
        <Switch size="md" label="Staked Only" mr="auto" />
        <SegmentedControl
          mx={20}
          size="md"
          data={[
            { label: "Popular", value: "pop" },
            { label: "APR", value: "apr" },
            { label: "TVL", value: "tvl" },
          ]}
          sx={{ backgroundColor: "white", height: "fit-content" }}
        />
        <TextInput size="md" label="Search" placeholder="Search" icon={<Search />}></TextInput>
      </Container>

      <Group position="center" align="flex-start" sx={{ gap: "50px 25px" }}>
        {pools.map((pool, id) => (
          <PoolCard key={pool} title={pool} active={id === selected} handleOpen={() => handleOpen(id)} />
        ))}
      </Group>
    </Page>
  );
}
