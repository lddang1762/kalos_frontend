import React from "react";
import { Container, Title, Divider, Grid, useMantineTheme } from "@mantine/core";
import PerformanceCard, { PerformanceCardProps } from "./PerformanceCard";

interface CarouselProps {
  performers: PerformanceCardProps[];
}

export default function PerformersCarousel({ performers }: CarouselProps) {
  const theme = useMantineTheme();

  return (
    <Container fluid>
      <Title order={2} sx={{ color: theme.colors.dark[9] }}>
        Top Performers
      </Title>
      <Divider color="dark" my="sm" />
      <Grid>
        {performers.map((portfolio, index) => {
          return (
            <Grid.Col span={4} key={index}>
              <PerformanceCard {...portfolio} />
            </Grid.Col>
          );
        })}
      </Grid>
    </Container>
  );
}
