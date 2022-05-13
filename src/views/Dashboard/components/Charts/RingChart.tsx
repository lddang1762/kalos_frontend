import React, { useCallback, useState } from "react";
import { useMantineTheme } from "@mantine/core";
import { ResponsiveContainer, PieChart, Pie, Sector } from "recharts";

type RingData = {
  label: string;
  value: number;
};

interface RingChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: RingData[];
}

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, label } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
        fontFamily="Karla"
      >{`${label}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999" fontFamily="Karla">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default function RingChart({ data, ...props }: RingChartProps) {
  const theme = useMantineTheme();
  const [activeIndex, setActiveIndex] = useState(-1);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  const onPieLeave = useCallback(() => {
    setActiveIndex(-1);
  }, [setActiveIndex]);

  return (
    <ResponsiveContainer {...props}>
      <PieChart>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          nameKey="label"
          dataKey="value"
          cx="55%"
          cy="40%"
          innerRadius={60}
          outerRadius={90}
          fill={theme.colors.pink[4]}
          stroke={theme.white}
          paddingAngle={2}
          startAngle={90}
          endAngle={-270}
          onMouseEnter={onPieEnter}
          onMouseLeave={onPieLeave}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
