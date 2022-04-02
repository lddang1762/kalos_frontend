import React from "react";
import { Text } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageWrapper from "./components/layout/PageWrapper";
import Home from "./views/Home/Home";
import Dashboard from "./views/Dashboard/Dashboard";
import Trade from "./views/Trade/Trade";

function App() {
  return (
    <BrowserRouter>
      <PageWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/trade" element={<Trade />} />
        </Routes>
      </PageWrapper>
    </BrowserRouter>
  );
}

export default App;
