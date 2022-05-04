import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageWrapper from "./components/layout/PageWrapper";
import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import Trade from "./views/Trade";
import Stake from "./views/Stake";
import Assets from "./views/Assets";

function App() {
  return (
    <BrowserRouter>
      <PageWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/stake" element={<Stake />} />
          <Route path="/assets" element={<Assets />} />
        </Routes>
      </PageWrapper>
    </BrowserRouter>
  );
}

export default App;
