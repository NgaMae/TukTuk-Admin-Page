import React from "react";
import { Route, Routes } from "react-router-dom";
import ShowDrivers from "./pages/ShowDrivers";
import AddDriver from "./pages/AddDriver";
import EditDriver from "./pages/EditDriver";
import ShowDetail from "./pages/ShowDetail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ShowDrivers />} />
      <Route path="/addDriver" element={<AddDriver />} />
      <Route path="/editDriver/:id" element={<EditDriver />} />
      <Route path="/showDetail/:id" element={<ShowDetail />} />
    </Routes>
  );
};

export default App;
