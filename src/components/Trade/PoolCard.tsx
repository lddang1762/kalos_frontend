import React, { useState, useMemo } from "react";
import { Container, Text, Image, Button, Card, Collapse, Box, RingProgress, Center, Title } from "@mantine/core";
import { ChevronLeft, ChevronRight, Star } from "tabler-icons-react";
import btcIcon from "../../assets/crypto/bitcoin-btc-logo.svg";
import ethIcon from "../../assets/crypto/ethereum-eth-logo.svg";

export default function PoolCard({ active, handleOpen, title }) {
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

  return (
    <Card
      px={0}
      sx={{
        minWidth: "280px",
        minHeight: "370px",
        backgroundColor: "white",
        borderRadius: "25px",
        boxShadow: `0px 5px 0 0 rgb(0 0 0 / 8%)`,
        "&:hover": {
          boxShadow: `0px 0px 15px 5px #5185ec80`,
        },
      }}
      onClick={() => handleOpen()}
    >
      <Card.Section>
        <Box
          sx={{
            color: "white",
            backgroundColor: "#5185EC",
            height: "25px",
            padding: "15px",
            textAlign: "center",
            letterSpacing: "0.07rem",
            marginBottom: "12px",
            position: "relative",
          }}
        >
          <Text size="lg">{`${title} Pool`}</Text>
          <Box
            component="button"
            sx={{
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
              display: " inherit",
              position: "absolute",
              top: 15,
              right: 26,
            }}
          >
            <Star
              size={25}
              color={`${favorited ? "orange" : "white"}`}
              fill={`${favorited ? "orange" : "white"}`}
              onClick={(e) => handleFavorite(e)}
            />
          </Box>
        </Box>
      </Card.Section>

      <Container px={0} fluid sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
        <Container px={0} fluid sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="button"
            px={0}
            sx={{ border: "none", backgroundColor: "transparent", cursor: "pointer", display: " inherit" }}
          >
            <ChevronLeft size={40} color="#5185EC" onClick={(e) => handleRatioDecrease(e)} />
          </Box>
          <Center sx={{ backgroundColor: "#ECF6FD", borderRadius: "100%", width: 64, height: 64 }}>
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
          <Center sx={{ backgroundColor: "#ECF6FD", borderRadius: "100%", width: 64, height: 64 }}>
            <Image src={ethIcon} height={48} width={48} />
          </Center>
          <Box
            component="button"
            px={0}
            sx={{ border: "none", backgroundColor: "transparent", cursor: "pointer", display: " inherit" }}
          >
            <ChevronRight size={40} color="#5185EC" onClick={(e) => handleRatioIncrease(e)} />
          </Box>
        </Container>

        <Title order={3}>
          <Box component="span">APR: </Box>
          <Box component="span" sx={{ color: "#5185EC" }}>
            {`${APR}%`}
          </Box>
        </Title>

        <Collapse in={active}>
          <Text>{`TVL: $${TVL}`}</Text>
        </Collapse>

        <RingProgress
          size={220}
          thickness={25}
          sections={[
            { value: (10 - configRatio) * 10, color: "#5185EC" },
            { value: configRatio * 10, color: "#12b886" },
          ]}
        />

        <Collapse in={active} animateOpacity={false}>
          <Button
            radius="sm"
            px="40px"
            onClick={(e) => e.stopPropagation()}
            sx={{
              backgroundColor: "#ffbb33",
              // boxShadow: "0px 3px 0px #E9A732",
              ":hover": { backgroundColor: "#ffbb33" },
            }}
          >
            Open
          </Button>
        </Collapse>
      </Container>
    </Card>
  );
}
