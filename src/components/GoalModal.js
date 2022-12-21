import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import moment from "moment";
import uuid from "react-uuid";
import Button from "../components/Button";
import { addGoal } from "../slices/goalSlice";

function GoalModal({ openModal, setOpenModal, typeModal }) {
  const [goalName, setGoalName] = useState("");
  const [status, setStatus] = useState("Undone");
  const submitButton = "submit";
  const button = "button";
  const cancel = "Cancel";

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (goalName.trim() && status) {
      if (typeModal === "add") {
        dispatch(
          addGoal({
            id: uuid(),
            time: moment().format(" h:mm:ss a, MMMM Do YYYY"),
            goalName: goalName,
            status: status,
          })
        );
        toast.success("Goad Added");
        setOpenModal(false);
      }
      if (typeModal === "update") {
        console.log("updating task");
      }
      if (goalName === "") {
        toast.error("Goal should not be empty.");
        return;
      }
    } else {
      toast.error("Goal should not be empty!!.");
    }
  };

  return (
    <>
      {openModal && (
        <div className="modal-wrapper">
          <AiOutlineCloseCircle
            className="modal-button"
            role="button"
            onClick={() => setOpenModal(false)}
          />
          <div className="modal-container">
            <form onSubmit={(e) => handleSubmit(e)}>
              <h2>{typeModal === "update" ? "Update" : "Add"} Your Goal</h2>
              <label htmlFor="title">
                Goal
                <input
                  type="text"
                  id="goalName"
                  value={goalName}
                  onChange={(e) => setGoalName(e.target.value)}
                ></input>
              </label>
              <label htmlFor="status">
                Status
                <select
                  name="status"
                  id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="undone">Undone</option>
                  <option value="Done">Done</option>
                </select>
              </label>
              <div className="action-buttons">
                <Button
                  type={submitButton}
                  text={typeModal === "update" ? "Update Goal" : "Add Goal"}
                ></Button>
                <Button
                  type={button}
                  text={cancel}
                  func={() => setOpenModal(false)}
                ></Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default GoalModal;
