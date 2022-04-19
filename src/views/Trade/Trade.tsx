import React, { useState, useMemo } from "react";
import { Box, Container, Group, Text, Center, Title, Switch, SegmentedControl, TextInput } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { Search, Flame, Percentage, Businessplan, Pool } from "tabler-icons-react";
import Page from "../../components/layout/Page";
import StyledContainer from "../../components/layout/StyledContainer";
import PoolCard from "../../components/Trade/PoolCard";

// TODO: use live data
const pools = ["BTC-USDT", "ETH-USDT", "ETH-BTC", "AVAX-USDT", "LUNA-USDT", "SOL-USDT"];

export default function Trade() {
  const [selected, setSelected] = useState(-1);
  const [depositing, setDepositing] = useState(false);
  const [sortOption, setSortOption] = useState("pop");
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebouncedValue(query, 200);

  // const [stakedOnly, setStakedOnly] = useUserFarmStakedOnly(isActive)

  const handleOpen = (id) => {
    selected === id ? setSelected(-1) : setSelected(id);
  };

  const handleDeposit = () => {
    setDepositing(true);
  };

  const handleChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const filteredPools = useMemo(() => {
    return pools.filter((pool) => pool.toLowerCase().includes(debouncedQuery));
  }, [debouncedQuery]);

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
          color="primary"
          data={[
            {
              label: (
                <Center>
                  <Flame size={16} />
                  <Box ml={4}>Popular</Box>
                </Center>
              ),
              value: "pop",
            },
            {
              label: (
                <Center>
                  <Percentage size={16} />
                  <Box ml={4}>APR</Box>
                </Center>
              ),
              value: "apr",
            },
            {
              label: (
                <Center>
                  <Businessplan size={16} />
                  <Box ml={4}>TVL</Box>
                </Center>
              ),
              value: "tvl",
            },
          ]}
          sx={{ backgroundColor: "white", height: "fit-content", alignSelf: "flex-end" }}
        />
        <TextInput
          styles={{ input: { backgroundColor: "white", border: "none" } }}
          size="md"
          placeholder="Search"
          icon={<Search />}
          onChange={(e) => handleChangeQuery(e)}
        />
      </Container>

      <Group position="center" align="flex-start" sx={{ gap: "50px 25px" }}>
        {filteredPools.map((pool, id) => (
          <PoolCard
            key={pool}
            title={pool}
            selected={id === selected}
            active={id === selected && depositing}
            handleOpen={() => handleOpen(id)}
            handleDeposit={() => handleDeposit()}
          />
        ))}
      </Group>
    </Page>
  );
}
