import React, { useState } from "react";
import { Container, Text, Title, Stack, Group, SegmentedControl, createStyles, useMantineTheme } from "@mantine/core";
import LineChart, { TimeWindowEnum } from "./LineChart";
import { getTimeWindowChange } from "./utils";

const useStyles = createStyles((theme) => ({
  title: {
    color: theme.colors.dark[9],
  },
  segment: {
    backgroundColor: theme.colors.paper,
    alignSelf: "flex-end",
    color: "white",
  },
  segmentLabel: {
    backgroundColor: theme.colors.primary,
    color: "white !important",
  },
}));

type LineData = {
  time: string;
  value: number;
};

interface PortfolioChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: LineData[];
}

export default function PortfolioChart({ data }: PortfolioChartProps) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const [timeWindow, setTimeWindow] = useState<TimeWindowEnum>(0);
  const [hoverValue, setHoverValue] = useState<number | undefined>();
  const [hoverDate, setHoverDate] = useState<string | undefined>();
  const valueToDisplay = hoverValue || data[data.length - 1]?.value;
  const { changePercentage, changeValue } = getTimeWindowChange(data);
  const isChangePositive = changeValue >= 0;

  return (
    <>
      <Group position="apart">
        <Stack spacing={0}>
          <Text color={theme.colors.gray[6]}>Your Balance</Text>
          <Title>{`$${valueToDisplay}`}</Title>
          <Title order={5} sx={{ color: theme.colors.green[5] }}>
            {`+$${changeValue} (${changePercentage}%)`}
          </Title>
        </Stack>
        <SegmentedControl
          classNames={{ root: classes.segment, labelActive: classes.segmentLabel }}
          color="primary"
          radius="md"
          data={[
            { label: "24H", value: "day" },
            { label: "1W", value: "week" },
            { label: "1M", value: "month" },
            { label: "1Y", value: "year" },
            { label: "ALL", value: "all" },
          ]}
        />
      </Group>
      <Container px={0} fluid sx={{ height: "85%" }}>
        <LineChart
          data={data}
          setHoverValue={setHoverValue}
          setHoverDate={setHoverDate}
          isChangePositive={isChangePositive}
          timeWindow={timeWindow}
        />
      </Container>
    </>
  );
}
