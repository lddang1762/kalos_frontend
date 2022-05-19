import React from "react";
import {
  Container,
  Button,
  Center,
  Text,
  Group,
  Input,
  TextInput,
  PasswordInput,
  Select,
  createStyles,
} from "@mantine/core";

import StyledContainer from "../../../../components/layout/StyledContainer";
import StyledInput from "../../../../components/Input/StyledInput";

export default function APIConfig() {
  return (
    <StyledContainer fluid>
      <Group>
        <Text>Selected Exchange</Text>
        <StyledInput sx={{ width: "30%" }} />
      </Group>
      <Group>
        <Text>API Key</Text>
        <StyledInput sx={{ width: "30%" }} />
      </Group>
      <Group>
        <Text>Secret Key</Text>
        <PasswordInput sx={{ width: "30%" }} />
      </Group>
      <Container fluid p="lg" sx={{ backgroundColor: "#DBE5FB", borderRadius: 12, color: "#5185EC" }}>
        <Text>
          Kalos only use credentials to read the account balance and place new orders to rebalance the porfolio
        </Text>
        <Text>API Key should have following permission: READ, SPOT, ...</Text>
        <Text>Kalos does not have permissions to withdraw your assets out of exchange</Text>
      </Container>
    </StyledContainer>
  );
}
