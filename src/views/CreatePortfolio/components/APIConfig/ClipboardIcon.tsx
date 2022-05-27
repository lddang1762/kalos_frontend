import React from "react";
import { ActionIcon, Tooltip, useMantineTheme } from "@mantine/core";
import { ClipboardPlus } from "tabler-icons-react";

export default function ClipboardIcon({ onClick }) {
  const theme = useMantineTheme();
  return (
    <Tooltip label="Paste from clipboard" onClick={onClick} closeDelay={100} withArrow>
      <ActionIcon variant="transparent">
        <ClipboardPlus color={theme.colorScheme === "light" ? "gray" : "white"} onClick={onClick}>
          hello
        </ClipboardPlus>
      </ActionIcon>
    </Tooltip>
  );
}
