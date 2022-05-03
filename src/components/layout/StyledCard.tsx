import React from "react";
import { Card, SharedPaperProps, DefaultProps, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    maxWidth: "280px",
    minHeight: "370px",
    backgroundColor: theme.white,
    borderRadius: "25px",
    boxShadow: `0px 5px 0 0 rgb(0 0 0 / 8%)`,
  },
  cardHeader: {
    color: "white",
    backgroundColor: theme.colors.primary,
    height: "25px",
    padding: "15px",
    textAlign: "center",
    letterSpacing: "0.07rem",
    marginBottom: "15px",
    position: "relative",
  },
}));

interface StyledCardProps extends React.HTMLAttributes<HTMLDivElement>, SharedPaperProps {
  header: React.ReactNode;
  children: React.ReactNode;
  headerProps?: DefaultProps;
}

export default function StyledCard({ header, children, headerProps, ...cardProps }: StyledCardProps) {
  const { classes } = useStyles();
  return (
    <Card className={classes.card} {...cardProps}>
      <Card.Section className={classes.cardHeader} {...headerProps}>
        {header}
      </Card.Section>
      {children}
    </Card>
  );
}
