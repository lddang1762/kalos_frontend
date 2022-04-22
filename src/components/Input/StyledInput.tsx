import React, { useRef } from "react";
import { TextInput, createStyles, TextInputProps } from "@mantine/core";

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

export default function StyledInput(props: TextInputProps & React.RefAttributes<HTMLInputElement>) {
  const { classes } = useStyles();
  return <TextInput classNames={classes} {...props} />;
}
