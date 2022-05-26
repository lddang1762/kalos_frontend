import React from "react";
import { TextInput, createStyles, TextInputProps } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  input: {
    backgroundColor: theme.colors.light,
    borderColor: theme.colors.light,
    "::placeholder": {
      opacity: theme.colorScheme === "light" ? 0.7 : 0.3,
    },
  },
}));

export default function StyledInput(props: TextInputProps & React.RefAttributes<HTMLInputElement>) {
  const { classes } = useStyles();
  return <TextInput classNames={classes} {...props} />;
}
