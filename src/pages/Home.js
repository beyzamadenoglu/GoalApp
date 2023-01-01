import React, { useState, useEffect } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Header from "../components/Header";
import GoalModal from "../components/GoalModal";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const filterStatus = useSelector((state) => state.goal.filter);
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch(); 
  const headertext = "Make your goals come true";
  const type = "add";

  useEffect(()=> {

  },[])

  const handleClick = () => {
    setOpenModal(true);
  };
  return (
    <div className="container">
      <Header text={headertext}></Header>
      <div className="button" onClick={handleClick} role={"button"}>
        <AiOutlinePlusCircle className="add-close" />
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
