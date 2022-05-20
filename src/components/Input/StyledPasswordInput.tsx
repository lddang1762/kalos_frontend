import React from "react";
import { PasswordInput, PasswordInputProps, createStyles } from "@mantine/core";

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

export default function StyledPasswordInput(props: PasswordInputProps & React.RefAttributes<HTMLInputElement>) {
  const { classes } = useStyles();
  return <PasswordInput classNames={classes} {...props} />;
}
