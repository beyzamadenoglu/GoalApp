import React from "react";
import Header from "./pages/Home";
import "./Style.css";
import { Toaster } from "react-hot-toast";
import GoalList from "./components/GoalList";
function App() {
  return (
    <>
      <div>
        <Header />
        <GoalList />
      </div>
      <Toaster position="top-right" toastOptions={{ style: {fontSize: '',} }}></Toaster>
    </>
  );
}

export default App;
