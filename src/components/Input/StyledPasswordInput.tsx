import React from "react";
import { TextInput, TextInputProps, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    width: "100%",
  },
  input: {
    backgroundColor: theme.colors.light,
    borderColor: theme.colors.light,
    "::placeholder": {
      opacity: 0.7,
    },
  },
}));

export default function StyledPasswordInput(props: TextInputProps & React.RefAttributes<HTMLInputElement>) {
  const { classes } = useStyles();
  return <TextInput classNames={classes} type="password" {...props} />;
}
