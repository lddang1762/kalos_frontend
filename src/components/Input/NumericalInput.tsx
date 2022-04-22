import React, { useState } from "react";
import { Text, Button, TextInputProps, MantineStyleSystemProps } from "@mantine/core";
import StyledInput from "./StyledInput";

interface InputProps extends TextInputProps, MantineStyleSystemProps {
  withMax?: boolean;
  maxValue?: number;
  onMax?: (max: number | string) => void;
}

export default function NumericalInput({ withMax = true, maxValue, onMax, ...props }: InputProps) {
  const inputRegex = RegExp(`^[0-9]*(?:[.,])?[0-9]{0,18}$`);
  const [inputVal, setVal] = useState("");

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!inputRegex.test(e.currentTarget.value + e.key)) {
      e.preventDefault();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (inputRegex.test(e.currentTarget.value)) {
      e.preventDefault();
      setVal(e.currentTarget.value);
    }
  };

  const handleMax = () => {
    setVal(maxValue?.toString() ?? "");
  };

  return (
    <StyledInput
      itemRef=""
      size="xl"
      value={inputVal}
      placeholder="0.0000"
      rightSection={
        withMax && (
          <Button size="xs" px={10} py={5} sx={{ height: 25, borderRadius: 6 }} onClick={handleMax}>
            MAX
          </Button>
        )
      }
      rightSectionWidth={withMax ? 80 : undefined}
      onKeyPress={handleKeyPress}
      onChange={handleChange}
      {...props}
    />
  );
}
