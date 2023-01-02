import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Header from "../components/Header";
import GoalModal from "../components/GoalModal";

function Home() {
  const [openModal, setOpenModal] = useState(false);

  const headertext = "Make your goals come true";
  const type = "add";

  const handleClick = () => {
    setOpenModal(true);
    document.getElementById("list-container").classList.add("hidden");
    document.getElementById("filter").classList.add("hidden");
    document.getElementById("add").classList.add("hidden");
  };

  return (
    <div>
      <Header text={headertext}></Header>
      <div className="button" onClick={handleClick} role={"button"}>
        <AiOutlinePlusCircle id="add" className="add-close" />
      </div>
      <GoalModal
        typeModal={type}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </div>
  );
}
export default Home;
