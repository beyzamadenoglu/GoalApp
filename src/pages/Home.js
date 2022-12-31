import React, { useState, useEffect } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { updateFilter } from "../slices/goalSlice";
import Header from "../components/Header";
import StatusButton from "../components/StatusButton";
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

  const handleUpdate = (e) => {
    dispatch(updateFilter(e.target.value));
    //setFilter(e.target.value);
    console.log("tehhhsttt", filterStatus);
  };

  return (
    <div className="container">
      <Header text={headertext}></Header>
      <div className="button" onClick={handleClick} role={"button"}>
        <AiOutlinePlusCircle className="add-close" />
      </div>
      <StatusButton value={filterStatus} func={handleUpdate}>
        <option value="all">all</option>
        <option value="Undone">undone</option>
        <option value="Done">done</option>
      </StatusButton>
      <GoalModal
        typeModal={type}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </div>
  );
}
export default Home;
