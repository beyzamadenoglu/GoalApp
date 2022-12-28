import React, { useState, useEffect } from "react";
import { updateFilter } from "../slices/goalSlice";
import Header from "../components/Header";
import Button from "../components/Button";
import StatusButton from "../components/StatusButton";
import GoalModal from "../components/GoalModal";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const filterStatus = useSelector((state) => state.goal.filtered);
  const [openModal, setOpenModal] = useState(false);

  const headertext = "Make your goals come true";
  const newGoal = "New Goal";
  const type = "add";
  const button = "button";

  useEffect(()=> {
    console.log(filterStatus)
  },[filterStatus])

  const handleClick = () => {
    setOpenModal(true);
  };

  const handleUpdate = (e) => {
    dispatch(updateFilter(e.currentTarget.value));

  
  };

  return (
    <div>
      <Header text={headertext}></Header>
      <Button type={button} text={newGoal} func={handleClick} />
      <StatusButton value={filterStatus} func={handleUpdate}>
        <option value="all">all</option>
        <option value="undone">undone</option>
        <option value="done">done</option>
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
