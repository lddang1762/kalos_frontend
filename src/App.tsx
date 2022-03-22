import React from "react";
import { AppShell, Text, Container } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <AppShell
        header={<Navbar />}
        padding="md"
        styles={(theme) => ({
          main: { backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white },
        })}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Container>
                <Text>home</Text>
              </Container>
            }
          />
          <Route path="/dashboard" element={<Text>dash</Text>} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}

export default App;
