import React from "react";
import AppNavbar from "./components/AppNavbar";
import AttackOps from "./components/AttackOps";
import DefenseOps from "./components/DefenseOps";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <AttackOps />
      <DefenseOps />
    </div>
  );
}

export default App;
