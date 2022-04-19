import React from "react";
import { ContextModalProps, ModalsProvider } from "@mantine/modals";
import { Text, Button } from "@mantine/core";

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
  return <ModalsProvider modals={{ login: Login }}>{children}</ModalsProvider>;
}
