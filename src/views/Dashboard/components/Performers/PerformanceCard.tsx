import React from "react";
import { Text, Button, Stack, Group, RingProgress } from "@mantine/core";
import StyledContainer from "../../../../components/layout/StyledContainer";

export interface PerformanceCardProps {
  change: number;
  time: number;
  timeframe: string;
}

export default function PerformanceCard({ change, time, timeframe }: PerformanceCardProps) {
  return (
    <StyledContainer>
      <Group grow spacing={0}>
        <Stack align="center">
          <Text>{`+${change}% over ${time} ${timeframe}`}</Text>
          <Button>Fork Now</Button>
        </Stack>
        <RingProgress
          size={200}
          thickness={20}
          sections={[
            { value: 60, color: "#F1BE42" },
            { value: 25, color: "#5185EC" },
            { value: 15, color: "#D85140" },
          ]}
        />
      </Group>
    </StyledContainer>
  );
}
