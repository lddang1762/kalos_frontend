import React from "react";
import { ContextModalProps, ModalsProvider } from "@mantine/modals";
import { Text, Button, createStyles } from "@mantine/core";
import ListSelect from "../components/Modals/ListSelect";

const useStyles = createStyles((theme) => ({
  header: { display: "none" },
  modal: { backgroundColor: theme.white },
  inner: { backdropFilter: "blur(3px)" },
}));

const Login = ({ context, id, innerProps }: ContextModalProps) => (
  <>
    <Text>Login modal</Text>
    <Button mt="md" onClick={() => context.closeModal(id)}>
      Cancel
    </Button>
    <Button mt="md" onClick={() => null}>
      Login
    </Button>
  </>
);

export default function ModalProvider({ children }) {
  const { classes } = useStyles();

  return (
    <ModalsProvider
      modals={{ login: Login, assets: ListSelect }}
      modalProps={{ classNames: classes, overlayColor: "transparent" }}
    >
      {children}
    </ModalsProvider>
  );
}
