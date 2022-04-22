import React, { useState, useMemo } from "react";
import { Container, Text, Button, Card, Collapse, Box, RingProgress, Title, createStyles } from "@mantine/core";
import StyledCard from "../layout/StyledCard";
import { ChevronLeft, ChevronRight, Star } from "tabler-icons-react";
import CurrencyIcon from "../CurrencyIcon";

const useStyles = createStyles((theme) => ({
  flex: { display: "flex", alignItems: "center" },
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

  const HeaderContent = (
    <>
      <Text size="lg">{`${title} Pool`}</Text>
      <Box component="button" className={classes.favorite}>
        <Star
          size={25}
          color={`${favorited ? "orange" : "white"}`}
          fill={`${favorited ? "orange" : "white"}`}
          onClick={handleFavorite}
        />
      </Box>
    </>
  );

  return (
    <StyledCard px={0} header={HeaderContent} onClick={() => handleOpen()}>
      <Container className={classes.flex} px={0} fluid sx={{ flexDirection: "column" }}>
        <Container className={classes.flex} mb={10} px={0} fluid>
          <Box className={classes.arrow} component="button" px={0}>
            <ChevronLeft size={40} color="#5185EC" onClick={(e) => handleRatioDecrease(e)} />
          </Box>
          <CurrencyIcon />
          <Title order={2} mx={10} sx={{ width: 50 }}>
            <Box component="span" sx={{ color: "#12b886" }}>
              {`${configRatio}`}
            </Box>
            <Box component="span">{" : "}</Box>
            <Box component="span" sx={{ color: "#5185EC" }}>
              {`${10 - configRatio}`}
            </Box>
          </Title>
          <CurrencyIcon />

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
          <Button color="accent" radius="sm" px="40px" onClick={onDepositClicked}>
            Deposit
          </Button>
        </Collapse>
      </Container>
    </StyledCard>
  );
}
