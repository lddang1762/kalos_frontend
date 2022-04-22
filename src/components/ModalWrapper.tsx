import React from "react";
import { Modal, ModalProps, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  header: { display: "none" },
  modal: {
    width: "auto",
    padding: "0px !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    boxShadow: "none",
  },
  body: { display: "flex", gap: "40px" },
  inner: { backdropFilter: "blur(3px)" },
}));

export default function ModalWrapper({ opened, onClose, children, ...props }: ModalProps) {
  const { classes } = useStyles();
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      classNames={classes}
      centered
      overlayColor="gray"
      overlayOpacity={0.15}
      {...props}
    >
      {children}
    </Modal>
  );
}
