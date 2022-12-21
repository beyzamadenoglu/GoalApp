import React, { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteItem } from "../slices/goalSlice";
import GoalModal from './GoalModal';

function Goal({ goal }) {

  const [updateModal, setUpdateModal] = useState(false);
  const dispatch = useDispatch();

  const type = "update";

  const editGoal = () => {
    setUpdateModal(true);
  };

  const deleteGoal = () => {
    console.log("clicked");
    dispatch(deleteItem(goal.id));
  };

  return (
    <>
      <div>
        <div>
          [ ]<p className="goal-item">{goal.goalName}</p>
        </div>
        <div>
          <p className="goal-time">{goal.time}</p>
        </div>
        <div className="goal-actions">
          <div className="" onClick={deleteGoal} role={"button"}>
            <AiOutlineDelete />
          </div>
          <div className="" onClick={editGoal} role={"button"}>
            <AiOutlineEdit />
          </div>
        </div>
      </div>
        <GoalModal typeModal={type} openModal={updateModal} setOpenModal={setUpdateModal}/>
    </>
  );
}

export default Goal;
