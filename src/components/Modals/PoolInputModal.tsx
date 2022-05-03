import React from "react";
import { Box, Text, Button, Container, Group, Center, ModalProps } from "@mantine/core";
import { Plus } from "tabler-icons-react";
import StyledContainer from "../../components/layout/StyledContainer";
import ModalWrapper from "../../components/ModalWrapper";
import PoolInputCard from "./PoolInputCard";
import CurrencyIcon from "../../components/CurrencyIcon";
import NumericalInput from "../../components/Input/NumericalInput";

export default function PoolInputModal({ opened, onClose, ...props }: ModalProps) {
  return (
    <ModalWrapper opened={opened} onClose={onClose} {...props}>
      <PoolInputCard handleClose={onClose} />
      <Container px={0} sx={{ display: "flex", flexDirection: "column" }}>
        <StyledContainer m={0} mb="xl" style={{ flexGrow: 1 }}>
          <Group position="right" pr="xs">
            <Text size="md">
              <Box component="span">{"Available "}</Box>
              <Box
                component="span"
                sx={(theme) => ({ color: theme.colors.primary, fontWeight: "bold" })}
              >{`${100}`}</Box>
            </Text>
          </Group>
          <Group noWrap>
            <CurrencyIcon mx="md" />
            <NumericalInput />
          </Group>
          <Container py="lg">
            <Center>
              <Plus strokeWidth={2} size={32} />
            </Center>
          </Container>
          <Group position="right" pr="xs">
            <Text size="md">
              <Box component="span">{"Available "}</Box>
              <Box
                component="span"
                sx={(theme) => ({ color: theme.colors.primary, fontWeight: "bold" })}
              >{`${100}`}</Box>
            </Text>
          </Group>
          <Group noWrap>
            <CurrencyIcon mx="md" />
            <NumericalInput />
          </Group>
        </StyledContainer>
        <StyledContainer style={{ maxWidth: 700 }}>
          <Group noWrap>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Fee: 0.05%
            </Text>
            <Button size="md" color="accent">
              CONFIRM
            </Button>
          </Group>
        </StyledContainer>
      </Container>
    </ModalWrapper>
  );
}
