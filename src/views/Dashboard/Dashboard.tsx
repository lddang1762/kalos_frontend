import React from "react";
import { Text, Button } from "@mantine/core";
import Page from "../../components/layout/Page";
import StyledContainer from "../../components/layout/StyledContainer";

export default function Dashboard() {
  return (
    <Page>
      <StyledContainer style={{ width: "400px", height: "800px" }}>
        <Text>Home</Text>
        <Button
          sx={{
            borderRadius: "8px",
            color: "white",
            backgroundColor: "#FFC968",
            boxShadow: `0px 3px 0 0 rgb(0 0 0 / 10%)`,
            "&:not(:disabled):active": {
              transform: "translateY(3px)",
            },
          }}
        >
          CLICK ME
        </Button>
      </StyledContainer>
    </Page>
  );
}
