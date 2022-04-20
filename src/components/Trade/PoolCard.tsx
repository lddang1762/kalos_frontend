import React, { useState, useMemo } from "react";
import {
  Container,
  Text,
  Image,
  Button,
  Card,
  Collapse,
  Box,
  RingProgress,
  Center,
  Title,
  createStyles,
} from "@mantine/core";
import { ChevronLeft, ChevronRight, Star } from "tabler-icons-react";
import btcIcon from "../../assets/crypto/bitcoin-btc-logo.svg";
import ethIcon from "../../assets/crypto/ethereum-eth-logo.svg";

const useStyles = createStyles((theme) => ({
  flex: { display: "flex", alignItems: "center" },
  card: {
    minWidth: "280px",
    minHeight: "370px",
    backgroundColor: theme.white,
    borderRadius: "25px",
    boxShadow: `0px 5px 0 0 rgb(0 0 0 / 8%)`,
    "&:hover": {
      boxShadow: `0px 0px 15px 5px #5185ec80`,
    },
  },
  cardHeader: {
    color: "white",
    backgroundColor: "#5185EC",
    height: "25px",
    padding: "15px",
    textAlign: "center",
    letterSpacing: "0.07rem",
    marginBottom: "15px",
    position: "relative",
  },
  favorite: {
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    display: " inherit",
    position: "absolute",
    top: 15,
    right: 26,
  },
  arrow: {
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    display: " inherit",
  },
  //TODO: refactor into own component
  icon: { backgroundColor: theme.colors.light, borderRadius: "100%", width: 64, height: 64 },
}));

export default function PoolCard({ active, selected, title, handleOpen, handleDeposit }) {
  const { classes } = useStyles();
  // TODO: replace with actual data
  const [configRatio, setRatio] = useState(6);
  const [favorited, setFavorited] = useState(false);
  const APR = useMemo(() => (Math.random() * 100).toFixed(2), []);
  const TVL = useMemo(() => (Math.random() * 1000 * (Math.random() * 1000)).toFixed(2), []);

  const handleRatioDecrease = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (configRatio > 1) {
      setRatio((prev) => prev - 1);
    }
  };

  const handleRatioIncrease = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (configRatio < 9) {
      setRatio((prev) => prev + 1);
    }
  };

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorited((prev) => !prev);
  };

  const onDepositClicked = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleDeposit();
  };

  return (
    <Card px={0} className={classes.card} onClick={() => handleOpen()}>
      <Card.Section>
        <Box className={classes.cardHeader}>
          <Text size="lg">{`${title} Pool`}</Text>
          <Box component="button" className={classes.favorite}>
            <Star
              size={25}
              color={`${favorited ? "orange" : "white"}`}
              fill={`${favorited ? "orange" : "white"}`}
              onClick={handleFavorite}
            />
          </Box>
        </Box>
      </Card.Section>

      <Container className={classes.flex} px={0} fluid sx={{ flexDirection: "column" }}>
        <Container className={classes.flex} mb={10} px={0} fluid>
          <Box className={classes.arrow} component="button" px={0}>
            <ChevronLeft size={40} color="#5185EC" onClick={(e) => handleRatioDecrease(e)} />
          </Box>
          <Center className={classes.icon}>
            <Image src={btcIcon} height={48} width={48} />
          </Center>
          <Title order={2} mx={10} sx={{ width: 50 }}>
            <Box component="span" sx={{ color: "#12b886" }}>
              {`${configRatio}`}
            </Box>
            <Box component="span">{" : "}</Box>
            <Box component="span" sx={{ color: "#5185EC" }}>
              {`${10 - configRatio}`}
            </Box>
          </Title>
          <Center className={classes.icon}>
            <Image src={ethIcon} height={48} width={48} />
          </Center>
          <Box className={classes.arrow} component="button" px={0}>
            <ChevronRight size={40} color="#5185EC" onClick={(e) => handleRatioIncrease(e)} />
          </Box>
        </Container>

        <Title order={3}>
          <Box component="span">APR: </Box>
          <Box component="span" sx={{ color: "#5185EC" }}>
            {`${APR}%`}
          </Box>
        </Title>

        <Collapse in={selected}>
          <Text>{`TVL: $${TVL}`}</Text>
        </Collapse>

        <RingProgress
          size={220}
          thickness={25}
          mt={-10}
          sections={[
            { value: (10 - configRatio) * 10, color: "#5185EC" },
            { value: configRatio * 10, color: "#12b886" },
          ]}
        />

        <Collapse in={selected} animateOpacity={false}>
          <Button
            radius="sm"
            px="40px"
            onClick={onDepositClicked}
            sx={{
              backgroundColor: "#ffa634",
              ":hover": { backgroundColor: "#ffbb33" },
            }}
          >
            Deposit
          </Button>
        </Collapse>
      </Container>
    </Card>
  );
}
