import { useState } from "react";
import { Text, Button } from "@mantine/core";
import Page from "../../components/layout/Page";
import StyledContainer from "../../components/layout/StyledContainer";
import StyledCard from "../../components/layout/StyledCard";
import PoolInputModal from "../../components/Modals/PoolInputModal";

export default function Dashboard() {
  const [opened, setOpened] = useState(false);
  return (
    <Page>
      <StyledContainer style={{ width: "400px", height: "800px" }}>
        <Text>Home</Text>
        <Button onClick={() => setOpened(true)}>CLICK ME</Button>
        <StyledCard header={<div></div>}>sdfadsf</StyledCard>
      </StyledContainer>
      <PoolInputModal opened={opened} onClose={() => setOpened(false)} />
    </Page>
  );
}
