import React from "react";
import { Text } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageWrapper from "./components/layout/PageWrapper";
import Page from "./components/layout/Page";

function App() {
  return (
    <BrowserRouter>
      <PageWrapper>
        <Routes>
          <Route
            path="/"
            element={
              <Page>
                <Text>Home</Text>
              </Page>
            }
          />
          <Route path="/dashboard" element={<Text>Dash</Text>} />
        </Routes>
      </PageWrapper>
    </BrowserRouter>
  );
}

export default App;
