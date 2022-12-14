import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import moment from "moment";
import uuid from "react-uuid";

import Button from "../components/Button";
import { addGoal, updateItem } from "../slices/goalSlice";

function GoalModal({ openModal, setOpenModal, typeModal, goal }) {
  const dispatch = useDispatch();

  const [goalName, setGoalName] = useState("");
  const [status, setStatus] = useState("Undone");
  const submitButton = "submit";
  const button = "button";
  const cancel = "Cancel";

  useEffect(() => {
    if (typeModal === "update" && goal) {
      setGoalName(goal.goalName);
      setStatus(goal.status);
    } else {
      setGoalName("");
      setStatus("Undone");
    }
  }, [typeModal, goal, openModal]);

  const closeModal = () => {
    setOpenModal(false);
    document.getElementById("list-container").classList.remove("hidden");
    document.getElementById("filter").classList.remove("hidden");
    document.getElementById("add").classList.remove("hidden");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (goalName.trim() && status) {
      if (typeModal === "add") {
        dispatch(
          addGoal({
            id: uuid(),
            time: moment().format(" h:mm a, MMMM Do YYYY"),
            goalName: goalName,
            status: status,
          })
        );
        toast.success("Goal Added");
      }
      if (typeModal === "update") {
        if (goal.goalName !== goalName || goal.status !== status) {
          dispatch(
            updateItem({
              ...goal,
              goalName,
              status,
            })
          );
          toast.success("Goal Updated.");
        } else {
          toast.error("No changes update!");
        }
      }
      closeModal();
    } else {
      toast.error("Goal should not be empty!!.");
    }
  };

  return (
    <>
      {openModal && (
        <div className="modal-wrapper">
          <AiOutlineCloseCircle
            className="modal-button add-close"
            role="button"
            onClick={ closeModal }
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
              <div className="container-select">
              <label htmlFor="status">
                Status
                <select
                  name="status"
                  id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="Undone">Undone</option>
                  <option value="Done">Done</option>
                </select>
              </label>
              </div>
              <div className="action-buttons">
                <Button className="button"
                  type={submitButton}
                  text={typeModal === "update" ? "Update Goal" : "Add Goal"}
                  color={"rgb(142 144 129 / 46%)"}
                ></Button>
                <Button
                className="button"
                  type={button}
                  text={cancel}
                  func={() => setOpenModal(false)}
                 color={"rgb(224 23 23 / 10%)"}
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
