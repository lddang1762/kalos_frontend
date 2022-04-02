import React, { useState } from "react";
import { Container, Text, Button, Card, Collapse, Box } from "@mantine/core";
import Page from "../../components/layout/Page";

export default function Trade() {
  const [active, setActive] = useState(false);
  return (
    <Page>
      <Card
        sx={{
          backgroundColor: "white",
          width: "320px",
          minHeight: "370px",
          margin: "auto",
          borderRadius: "25px",
          boxShadow: `0px 5px 0 0 rgb(0 0 0 / 10%)`,
        }}
      >
        <Card.Section>
          <Box
            sx={{
              color: "white",
              fontSize: "18px",
              backgroundColor: "#5185EC",
              height: "25px",
              padding: "15px",
              textAlign: "center",
              letterSpacing: "0.07rem",
              marginBottom: "12px",
            }}
          >
            <Text size="xl">ETH-USDT Pool</Text>
          </Box>
        </Card.Section>
        <Container fluid sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
          <Text>asdfasdfasdfasdfasd</Text>
          <Collapse in={active}>asdf</Collapse>

          <Button sx={{ marginTop: "220px" }} onClick={() => setActive(!active)}>
            Open
          </Button>
        </Container>
      </Card>
    </Page>
  );
}
