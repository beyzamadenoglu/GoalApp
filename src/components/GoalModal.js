import React, {useState} from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Button from "../components/Button";

function GoalModal({openModal, setOpenModal}) {
  
  const [goalName, setGoalName] = useState('');
  const [status, setStatus] = useState('Undone');
  const submitButton = "submit";
  const button = "button";
  const add = "Add Goal";
  const cancel = "Cancel";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({goalName, status})
  }
  
  return (
    <>
    {openModal && (
        <div className="modal-wrapper">
        <AiOutlineCloseCircle className="modal-button" role="button" onClick={() => setOpenModal(false)}/>
        <div className="modal-container">
          <form onSubmit={(e) => haitndleSubmit(e)}>
            <h2>Add Your Goal</h2>
            <label htmlFor="title">
              Goal
              <input type="text" id="goalName" value={goalName} onChange={(e) => setGoalName(e.target.value)}></input>
            </label>
            <label htmlFor="status">
              Status
              <select name="status" id="status" value={status} onChange = {(e) => setStatus(e.target.value)}>
                <option value="undone">Undone</option>
                <option value="Done">Done</option>
              </select>
            </label>
            <div className="action-buttons">
              <Button type={submitButton} text={add}></Button>
              <Button type={button} text={cancel} func={()=> setOpenModal(false)}></Button>
            </div>
          </form>
        </div>
      </div>
    )}
     
    </>
  );
}

export default GoalModal;
