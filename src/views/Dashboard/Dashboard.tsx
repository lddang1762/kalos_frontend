import { useState } from "react";
import { Box, Text, Button, Container, Group, Center } from "@mantine/core";
import { Plus } from "tabler-icons-react";
import Page from "../../components/layout/Page";
import StyledContainer from "../../components/layout/StyledContainer";
import ModalWrapper from "../../components/ModalWrapper";
import PoolCard from "../../components/Trade/PoolCard";
import CurrencyIcon from "../../components/CurrencyIcon";
import NumericalInput from "../../components/Input/NumericalInput";
import StyledCard from "../../components/layout/StyledCard";

export default function Dashboard() {
  const [opened, setOpened] = useState(false);
  return (
    <Page>
      <StyledContainer style={{ width: "400px", height: "800px" }}>
        <Text>Home</Text>
        <Button onClick={() => setOpened(true)}>CLICK ME</Button>
        <StyledCard header={<div></div>}>sdfadsf</StyledCard>
      </StyledContainer>

      <ModalWrapper opened={opened} onClose={() => setOpened(false)}>
        <PoolCard title="TEST" selected={true} active={true} handleOpen={null} handleDeposit={null} />
        <Container px={0}>
          <StyledContainer mb="xl">
            <Group position="right" pr="xs">
              <Text size="md">
                <Box component="span">{"Available "}</Box>
                <Box
                  component="span"
                  sx={(theme) => ({ color: theme.colors.primary, fontWeight: "bold" })}
                >{`${100}`}</Box>
              </Text>
            </Group>
            <Group noWrap>
              <CurrencyIcon mx="md" />
              <NumericalInput />
            </Group>
            <Container py="lg">
              <Center>
                <Plus strokeWidth={2} size={32} />
              </Center>
            </Container>
            <Group position="right" pr="xs">
              <Text size="md">
                <Box component="span">{"Available "}</Box>
                <Box
                  component="span"
                  sx={(theme) => ({ color: theme.colors.primary, fontWeight: "bold" })}
                >{`${100}`}</Box>
              </Text>
            </Group>
            <Group noWrap>
              <CurrencyIcon mx="md" />
              <NumericalInput />
            </Group>
          </StyledContainer>
          <StyledContainer style={{ maxWidth: 700 }}>
            <Group noWrap>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Fee: 0.05%
              </Text>
              <Button size="md" color="accent">
                CONFIRM
              </Button>
            </Group>
          </StyledContainer>
        </Container>
      </ModalWrapper>
    </Page>
  );
}
