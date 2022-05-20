import React, { useState } from "react";
import { Container, ActionIcon, Box, Text, Group, Stack, Popover, useMantineTheme, createStyles } from "@mantine/core";
import { QuestionMark } from "tabler-icons-react";

import StyledContainer from "../../../../components/layout/StyledContainer";
import StyledInput from "../../../../components/Input/StyledInput";
import StyledPasswordInput from "../../../../components/Input/StyledPasswordInput";

const useStyles = createStyles((theme) => ({
  root: {},
}));

const usePopoverStyles = createStyles((theme) => ({
  root: {},
}));

export default function APIConfig() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <StyledContainer fluid>
      <Group align="flex-start">
        <Stack p="md" spacing="xl" sx={{ width: "60%" }}>
          <StyledInput size="lg" label="Selected Exchange" labelProps={{ style: { fontSize: 20 } }} />
          <StyledInput size="lg" label="API Key" labelProps={{ style: { fontSize: 20 } }} />
          <StyledPasswordInput size="lg" label="Secret Key" labelProps={{ style: { fontSize: 20 } }} />
        </Stack>

        <Container p="md" mr={0} fluid>
          <Group position="right">
            <Text color={theme.colors.secondary[0]}>How to generate API Keys</Text>
            <Popover
              opened={opened}
              onClose={() => setOpened(false)}
              target={
                <ActionIcon
                  sx={{
                    height: 64,
                    width: 64,
                    backgroundColor: theme.colors.secondary,
                    borderRadius: "50%",
                    ":hover": {
                      backgroundColor: theme.colors.secondary,
                    },
                  }}
                  onClick={() => setOpened((o) => !o)}
                >
                  <QuestionMark size={32} color={theme.white} />
                </ActionIcon>
              }
              styles={{
                popover: { backgroundColor: theme.colors.paper2, color: theme.colors.dark },
                arrow: { backgroundColor: theme.colors.paper2, border: "none" },
                body: { border: "none" },
              }}
              width={300}
              position="bottom"
              placement="end"
              withArrow
            >
              <Text>Log into your selected exchange and navigate to your profile.</Text>
              <Text>Locate the API related tab/page and follow your exchange's instructions.</Text>
            </Popover>
          </Group>
        </Container>
      </Group>
      <Container
        fluid
        p="lg"
        mx="md"
        mt={40}
        mb={20}
        sx={{ backgroundColor: theme.colors.paper2, borderRadius: 12, color: theme.colors.primary }}
      >
        <Text>
          API Key should only have the following permissions:{" "}
          <Box component="span" sx={{ fontWeight: "bold" }}>
            READ and TRADE
          </Box>
        </Text>
        <Text>
          Whitelist our nearest service IP Address:{" "}
          <Box component="span" sx={{ fontWeight: "bold" }}>
            {"0.0.0.0"}
          </Box>
        </Text>
        <Text>
          Kalos only uses credentials to{" "}
          <Box component="span" sx={{ fontWeight: "bold" }}>
            read the account balance
          </Box>{" "}
          and{" "}
          <Box component="span" sx={{ fontWeight: "bold" }}>
            place new orders
          </Box>{" "}
          to rebalance the porfolio
        </Text>
        <Text>
          Kalos{" "}
          <Box component="span" sx={{ fontWeight: "bold" }}>
            does not have permissions to withdraw
          </Box>{" "}
          your assets out of exchange
        </Text>
      </Container>
    </StyledContainer>
  );
}
