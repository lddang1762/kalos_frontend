import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useMantineTheme } from "@mantine/core";
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Tooltip, Area } from "recharts";

export enum TimeWindowEnum {
  DAY,
  WEEK,
  MONTH,
  YEAR,
  ALL,
}

type LineData = {
  time: string;
  value: number;
};

interface LineChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: LineData[];
  setHoverValue: Dispatch<SetStateAction<number | undefined>>;
  setHoverDate: Dispatch<SetStateAction<string | undefined>>;
  isChangePositive: boolean;
  timeWindow: TimeWindowEnum;
}

const HoverUpdater = ({ payload, setHoverValue, setHoverDate }) => {
  useEffect(() => {
    setHoverValue(payload.value);
    setHoverDate(
      payload.time.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })
    );
  }, [payload.value, payload.time, setHoverValue, setHoverDate]);

  return null;
};

export default function LineChart({
  data,
  setHoverValue,
  setHoverDate,
  isChangePositive,
  timeWindow,
  ...props
}: LineChartProps) {
  const theme = useMantineTheme();
  return (
    <ResponsiveContainer {...props}>
      <AreaChart
        data={data}
        onMouseLeave={() => {
          if (setHoverDate) setHoverDate(undefined);
          if (setHoverValue) setHoverValue(undefined);
        }}
      >
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor={theme.colors.green[4]}
              stopOpacity={theme.colorScheme === "light" ? 0.85 : 0.25}
            />
            <stop
              offset="95%"
              stopColor={theme.colors.green[4]}
              stopOpacity={theme.colorScheme === "light" ? 0.25 : 0.05}
            />
          </linearGradient>
        </defs>
        <XAxis dataKey="time" fontFamily="Karla" stroke={theme.colors.gray[6]} tickLine={false} />
        <YAxis dataKey="value" axisLine={false} tickLine={false} domain={["auto", "auto"]} hide />
        <Tooltip
          cursor={{ stroke: theme.colors.primary[0] }}
          contentStyle={{ display: "none" }}
          formatter={(tooltipValue, name, props) => (
            <HoverUpdater payload={props.payload} setHoverValue={setHoverValue} setHoverDate={setHoverDate} />
          )}
        />
        <Area
          type="linear"
          dataKey="value"
          stroke={theme.colors.green[4]}
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#gradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
