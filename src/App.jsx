import Sidebar from "./Components/Sidebar";
import Buttons from "./Components/Buttons";
import Table from "./Components/Table";
import React from "react";
//import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Sidebar />
      <Buttons />
      <Table />
    </div>
  );
}

export default App;
