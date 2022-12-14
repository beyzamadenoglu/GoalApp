import React, {useState} from "react";

import Header from "../components/Header";
import Button from "../components/Button";
import StatusButton from "../components/StatusButton";
import GoalModal from "../components/GoalModal";

function Home() {
  const [openModal, setOpenModal] = useState(false);
  const headertext = "Make your goals come true";
  const saveText = "New Goal";
  const submitButton = "submit";
  const button = "button"
  return (
    <div>
      <Header text={headertext}></Header>
      <Button type={button} text={saveText}/>
      <StatusButton>
        <option value="all">all</option>
        <option value="undone">undone</option>
        <option value="done">done</option>
      </StatusButton>
      <GoalModal openModal={openModal} setOpenModal={setOpenModal}/>
    </div>
  );
}

export default Home;