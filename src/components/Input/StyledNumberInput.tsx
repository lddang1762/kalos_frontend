import React, { useState } from "react";
import { NumberInput, createStyles, NumberInputProps } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  input: {
    backgroundColor: theme.colors.light,
    borderColor: theme.colors.light,
    "::placeholder": {
      opacity: theme.colorScheme === "light" ? 0.7 : 0.3,
    },
  },
}));

export default function StyledNumberInput(props: NumberInputProps & React.RefAttributes<HTMLInputElement>) {
  const { classes } = useStyles();
  const inputRegex = RegExp(`^[0-9]*(?:[.,])?[0-9]{0,18}$`);
  const [inputVal, setVal] = useState<number | undefined>();
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!inputRegex.test(e.currentTarget.value + e.key)) {
      e.preventDefault();
    }
  };

  const handleChange = (value: number | undefined) => {
    setVal(value);
  };

  return (
    <NumberInput classNames={classes} value={inputVal} {...props} onKeyPress={handleKeyPress} onChange={handleChange} />
  );
}
