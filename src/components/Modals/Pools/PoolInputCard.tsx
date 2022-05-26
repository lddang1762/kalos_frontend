import React, { useState, useMemo } from "react";
import { Container, Text, Button, Collapse, Box, RingProgress, Title, createStyles } from "@mantine/core";
import StyledCard from "../../layout/StyledCard";
import { ChevronLeft, ChevronRight, Star } from "tabler-icons-react";
import CurrencyIcon from "../../CurrencyIcon";

const useStyles = createStyles((theme) => ({
  flex: { display: "flex", alignItems: "center" },
  favorite: {
    border: "none",
    backgroundColor: "transparent",
    display: " inherit",
    position: "absolute",
    top: 15,
    right: 26,
  },
}));

export default function PoolInputCard({ title = "Placeholder", handleClose }) {
  const { classes } = useStyles();
  const [configRatio, setRatio] = useState(6);
  const [favorited, setFavorited] = useState(false);
  const APR = useMemo(() => (Math.random() * 100).toFixed(2), []);
  const TVL = useMemo(() => (Math.random() * 1000 * (Math.random() * 1000)).toFixed(2), []);

  const HeaderContent = (
    <>
      <Text size="lg">{`${title} Pool`}</Text>
      <Box component="button" className={classes.favorite}>
        <Star size={25} color={`${favorited ? "orange" : "white"}`} fill={`${favorited ? "orange" : "white"}`} />
      </Box>
    </>
  );

  return (
    <StyledCard px={0} header={HeaderContent} sx={{ width: "100%" }}>
      <Container className={classes.flex} px={0} fluid sx={{ flexDirection: "column" }}>
        <Container className={classes.flex} mb={10} px={0} fluid>
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
        </Container>

        <Title order={3}>
          <Box component="span">APR: </Box>
          <Box component="span" sx={{ color: "#5185EC" }}>
            {`${APR}%`}
          </Box>
        </Title>

        <Collapse in={true}>
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

        <Collapse in={true} animateOpacity={false}>
          <Button color="red" radius="sm" px="40px" onClick={handleClose}>
            Cancel
          </Button>
        </Collapse>
      </Container>
    </StyledCard>
  );
}
