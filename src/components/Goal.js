import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteItem } from "../slices/goalSlice";
import GoalModal from './GoalModal';

function Goal({ goal }) {
  const dispatch = useDispatch();

  const [updateModal, setUpdateModal] = useState(false);
 

  const type = "update";

  const editGoal = () => {
    setUpdateModal(true);
  };

  const deleteGoal = () => {
    dispatch(deleteItem(goal.id));
    toast.success("Goal Deleted.")
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
          <div className="" onClick={editGoal} role={"sub"}>
            <AiOutlineEdit />
          </div>
        </div>
      </div>
        <GoalModal typeModal={type} openModal={updateModal} setOpenModal={setUpdateModal} goal={goal}/>
    </>
  );
}

export default Goal;
