import React, {useState} from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import StatusButton from "../components/StatusButton";
import GoalModal from "../components/GoalModal";

function Home() {

  const [openModal, setOpenModal] = useState(false);
  const headertext = "Make your goals come true";
  const newGoal = "New Goal";
  const type = "add"
  const button = "button"

  const handleClick =() =>{
   setOpenModal(true);
  }
  return (
    <div>
      <Header text={headertext}></Header>
      <Button type={button} text={newGoal} func={handleClick}/>
      <StatusButton>
        <option value="all">all</option>
        <option value="undone">undone</option>
        <option value="done">done</option>
      </StatusButton>
      <GoalModal typeModal={type} openModal={openModal} setOpenModal={setOpenModal}/>
    </div>
  );
}
export default Home;
