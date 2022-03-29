import React from "react";
import { Text, Container } from "@mantine/core";
import Page from "../../components/layout/Page";

export default function Home() {
  return (
    <Page>
      <Container fluid style={{ height: 500, background: "#ffabab" }}>
        <Text>Home</Text>
      </Container>
      <Container fluid style={{ marginTop: 20, height: 200, background: "#abcfff" }}>
        <Text>Home</Text>
      </Container>
    </Page>
  );
}
