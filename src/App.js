import React from "react";
import Header from "./pages/Home";
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
    <>
      <div className="content">
        <Header />
        <div className="container">
          <GoalList />
        </div>
      </div>
      <Toaster
        position="top-right"
        toastOptions={{ style: { fontSize: "" } }}
      ></Toaster>
    </>
  );
}

export default App;
