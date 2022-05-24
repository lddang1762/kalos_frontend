import React from "react";
import { motion, Variants } from "framer-motion";
import { Box, UnstyledButton, Avatar, SimpleGrid } from "@mantine/core";

const parent: Variants = {
  show: {
    transition: { staggerChildren: 0.05 },
  },
};

const child: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

interface ExchangeGridProps {
  exchanges: any[];
  onSelect: () => null;
}

export default function ExchangeGrid({ exchanges, onSelect }: ExchangeGridProps) {
  return (
    <Box component={motion.div} variants={parent} initial="hidden" animate="show">
      <SimpleGrid
        cols={4}
        breakpoints={[
          { maxWidth: 980, cols: 3, spacing: "md" },
          { maxWidth: 600, cols: 2, spacing: "sm" },
        ]}
      >
        {exchanges.map((item) => (
          <UnstyledButton key={item} component={motion.div} variants={child} onClick={onSelect}>
            <Avatar
              src={null}
              color="red"
              radius="sm"
              size={64}
              sx={{
                ":hover": { transform: "translateY(-0.5rem) " },
                transition: "transform 0.1s linear",
              }}
            />
          </UnstyledButton>
        ))}
      </SimpleGrid>
    </Box>
  );
}
