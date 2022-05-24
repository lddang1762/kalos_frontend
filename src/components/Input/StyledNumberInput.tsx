import React from "react";
import { NumberInput, createStyles, NumberInputProps } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  input: {
    backgroundColor: theme.colors.light,
    borderColor: theme.colors.light,
    "::placeholder": {
      opacity: 0.7,
    },
  },
}));

export default function StyledNumberInput(props: NumberInputProps & React.RefAttributes<HTMLInputElement>) {
  const { classes } = useStyles();
  return <NumberInput classNames={classes} {...props} />;
}
