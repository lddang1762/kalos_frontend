import React, { Dispatch, useMemo, useState } from "react";
import { ContextModalProps } from "@mantine/modals";
import {
  Container,
  Group,
  Text,
  ActionIcon,
  Divider,
  UnstyledButton,
  ScrollArea,
  createStyles,
  Center,
} from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { X } from "tabler-icons-react";

import StyledInput from "../Input/StyledInput";
import CurrencyIcon from "../CurrencyIcon";

const useStyles = createStyles((theme) => ({
  root: { height: "70vh" },
  scrollbar: { paddingTop: 3, paddingBottom: 3, borderRadius: 5, ":hover": { backgroundColor: theme.colors.light[0] } },
  button: { width: "100%", ":hover": { backgroundColor: theme.colors.light[0] } },
  divider: { borderColor: theme.colorScheme === "light" ? theme.colors.gray[4] : theme.colors.gray[9] },
}));

const list = {
  "42": "42 Coin",
  "300": "300 token",
  "365": "365Coin",
  "404": "404Coin",
  "433": "433 Token",
  "611": "SixEleven",
  "808": "808",
  "888": "Octocoin",
  "1337": "EliteCoin",
  "2015": "2015 coin",
  "ARC*": "Arcade City",
  CLUB: "ClubCoin",
  "007": "007 coin",
  ZCN: "0chain",
  ZRX: "0x",
  "0xBTC": "0xBitcoin",
  BIT16: "16BitCoin",
  MCT: "1717 Masonic Commemorative Token",
  "1CR": "1Credit",
  "1WO": "1World",
  CHAO: "23 Skidoo",
  ARMS: "2Acoin",
  "2BACCO": "2BACCO Coin",
  "2GIVE": "2GiveCoin",
  "2TF": "2TF",
  "32BIT": "32Bitcoin",
  "3XD": "3DChain",
  "3DES": "3DES",
  "8BT": "8 Circuit Studios",
  "8BIT": "8BIT Coin",
  ATKN: "A-Token",
  AAA: "AAA Reserve Currency",
  RTB: "AB-CHAIN",
  ABC: "AB-Chain",
  AT: "ABCC Token",
  AC3: "AC3",
  ACA: "ACA Token",
  ACT: "ACT",
  ACOIN: "ACoin",
  AENT: "AEN",
  AEON: "AEON",
  AERGO: "AERGO",
  AGT: "AGATE",
  AIC: "AI Crypto",
  AIDOC: "AI Doctor",
  AIT: "AIChain Token",
  "XAI*": "AICoin",
  AIOT: "AIOT Token",
  AITT: "AITrading",
  AXT: "AIX",
  ALX: "ALAX",
  ALIS: "ALISmedia",
  ALT: "ALTcoin",
  AMBT: "AMBT Token",
  AMIS: "AMIS",
  AMLT: "AMLT",
  AMO: "AMO Coin",
  ANON: "ANON",
  ANTS: "ANTS Reloaded",
  APIS: "APIS",
  APS: "APRES",
  QEY: "AQwire",
  "ARB*": "ARBITRAGE",
  ARE: "ARENON",
  ARK: "ARK",
  ARNA: "ARNA Panacea",
};

type ListSelectProps = {
  onSelect: Dispatch<any>;
};

export default function ListSelect({ context, id, innerProps }: ContextModalProps<ListSelectProps>) {
  const { classes } = useStyles();
  const assets = Object.keys(list);
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebouncedValue(query, 150);
  const handleChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const filteredPools = useMemo(() => {
    return assets.filter((pool) => pool.toLowerCase().includes(debouncedQuery));
  }, [assets, debouncedQuery]);

  return (
    <Container fluid px={0}>
      <Group position="apart" mb={15} mr={-9}>
        <Text>Select an asset</Text>
        <ActionIcon variant="transparent">
          <X
            size={16}
            onClick={() => {
              context.closeModal(id);
            }}
          />
        </ActionIcon>
      </Group>
      <StyledInput placeholder="Search for asset" size="lg" onChange={(e) => handleChangeQuery(e)} />
      <Divider className={classes.divider} my="lg" />
      <ScrollArea classNames={classes}>
        {filteredPools.length === 0 && (
          <Center>
            <Text>No results found</Text>
          </Center>
        )}
        {filteredPools.map((asset) => (
          <UnstyledButton key={asset} className={classes.button} py={5} onClick={() => innerProps.onSelect(asset)}>
            <Group spacing="xs">
              <CurrencyIcon size={48} />
              <Text>{asset}</Text>
            </Group>
          </UnstyledButton>
        ))}
      </ScrollArea>
    </Container>
  );
}
