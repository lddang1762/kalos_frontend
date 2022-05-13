import React from "react";
import { Box, Container, Center, Text, useMantineTheme } from "@mantine/core";

export default function NoPortfolio() {
  const theme = useMantineTheme();
  return (
    <Container fluid mb={40} sx={{ height: 600, background: theme.colors.paper2, borderRadius: theme.radius.xl }}>
      <Center sx={{ height: "100%" }}>
        {/* <Text sx={{ color: theme.colors.gray[6] }}>Log in to view your portfolios</Text> */}
        <Text sx={{ color: theme.colors.gray[6] }}>
          Click the
          <Box component="a" px={7} sx={{ fontWeight: "bold" }}>
            +New Portfolio
          </Box>
          button in the top right to create your first portfolio!
        </Text>
      </Center>
    </Container>
  );
}
