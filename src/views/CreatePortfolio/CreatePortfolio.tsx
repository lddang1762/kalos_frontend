import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Check } from "tabler-icons-react";
import { Container, Button, Center, Stepper, createStyles } from "@mantine/core";

import Page from "../../components/layout/Page";
import ExchangeSelect from "./components/ExchangeSelect";
import APIConfig from "./components/APIConfig";
import InitialAllocation from "./components/InitialAllocation";
import PortfolioConfig from "./components/PortfolioConfig";
import ConfirmConfig from "./components/ReviewConfig";

const useStyles = createStyles((theme) => ({
  root: {},
  steps: { marginBottom: 32 },
  stepIcon: {
    borderWidth: 3,
    borderRadius: "50%",
    borderColor: theme.colorScheme === "light" ? theme.colors.medium : theme.colors.gray[6],
    backgroundColor: theme.white,
    color: theme.colors.primary,
    fontSize: theme.fontSizes.lg,
  },
  stepLabel: {
    fontSize: theme.fontSizes.lg,
    fontWeight: "bold",
  },
  stepDescription: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.gray[6],
  },
  separator: {
    height: 3,
    borderRadius: theme.radius.sm,
    backgroundColor: theme.colorScheme === "light" ? theme.colors.medium : theme.colors.gray[6],
  },
}));

export default function CreatePortfolio() {
  const { classes } = useStyles();
  const [step, setStep] = useState(0);
  const [canContinue, setCanContinue] = useState(false);
  const pages = [1, 2, 3, 4, 5, 6];

  const handleBackwardNav = () => {
    setStep((val) => val - 1);
    setCanContinue(true);
  };

  const handleForwardNav = () => {
    setStep((val) => val + 1);
    // setCanContinue(false);
  };

  const renderNavButtons = () => {
    return (
      <Container fluid mt={100} sx={{ display: "flex", justifyContent: "space-around" }}>
        <Center>
          {step === 0 ? (
            <Button component={Link} to="/dashboard" variant="outline" size="xl">
              Cancel
            </Button>
          ) : (
            <Button variant="outline" size="xl" onClick={handleBackwardNav}>
              Previous
            </Button>
          )}
        </Center>
        <Center>
          {step === pages.length - 1 ? (
            <Button component={Link} to="/dashboard" size="xl">
              Accept & Finish
            </Button>
          ) : (
            <Button size="xl" onClick={handleForwardNav} disabled={!canContinue}>
              Next
            </Button>
          )}
        </Center>
      </Container>
    );
  };

  return (
    <Page>
      <Stepper
        classNames={classes}
        active={step}
        iconSize={48}
        completedIcon={<Check size={28} strokeWidth={3} stroke="white" />}
      >
        <Stepper.Step label="Step 1" description="Select your exchange" allowStepSelect>
          <ExchangeSelect onStepComplete={setCanContinue} />
        </Stepper.Step>
        <Stepper.Step label="Step 2" description="Grant Access">
          <APIConfig />
        </Stepper.Step>
        <Stepper.Step label="Step 3" description="Initial Allocation">
          <PortfolioConfig />
        </Stepper.Step>
        <Stepper.Step label="Step 4" description="Portfolio Configuration">
          <ConfirmConfig />
        </Stepper.Step>
        <Stepper.Step label="Step 5" description="Review and Confirm">
          <ConfirmConfig />
        </Stepper.Step>
      </Stepper>

      {renderNavButtons()}
    </Page>
  );
}
