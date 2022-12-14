import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Button from '../components/Button';

function GoalModal({ openModal, setOpenModal }) {
    const submitButton = "button";
    const button = "button";
    const add = "Add Goal"
    const cancel = "Cancel"
  return (
    <div className="modal-wrapper">
      <AiOutlineCloseCircle className="modal-button" />
      <div className="modal-container">
        <form>
          <h2>Add Your Goal</h2>
          <label htmlFor="title">
            Goal
            <input type="text" id="title"></input>
          </label>
          <label htmlFor="status">
            Status
            <select name="status" id="status">
            <option value="undone">Undone</option>
            <option value="Done">Done</option>
            </select>
          </label>
          <div className="action-buttons">
            <Button type={submitButton} text={add}></Button>
            <Button type={button} text={cancel}></Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GoalModal;
