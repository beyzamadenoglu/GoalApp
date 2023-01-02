import React from "react";
import Home from "./pages/Home";
import "./Style.css";
import { Toaster } from "react-hot-toast";
import Snowflakes from "magic-snowflakes";
import GoalList from "./components/GoalList";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  const snowflakes = new Snowflakes({ color: "#9c4647", zIndex: "-1" });
  snowflakes.start();
  return (
    <div className="app-container">
      <div className="content">
        <Home />
      </div>
      <div className="goal-body">
        <GoalList />
      </div>
      <Toaster
        position="top-right"
        toastOptions={{ style: { fontSize: "" } }}
      ></Toaster>
    </div>
  );
}

export default App;
