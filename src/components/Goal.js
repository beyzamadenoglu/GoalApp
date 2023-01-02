import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Checkbox, Tooltip } from "@mui/material";
import { deleteItem, updateItem } from "../slices/goalSlice";
import GoalModal from "./GoalModal";

function Goal({ goal }) {
  const dispatch = useDispatch();

  const [updateModal, setUpdateModal] = useState(false);
  const [check, setCheck] = useState(false);
  const type = "update";

  useEffect(() => {
    if (goal.status === "Done") {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, [goal.status]);

  const handleCheck = () => {
    dispatch(
      updateItem({
        ...goal,
        status: check ? "Done" : "Undone"
      })
    );
  };

  const editGoal = () => {
    setUpdateModal(true);
  };

  const deleteGoal = () => {
    dispatch(deleteItem(goal.id));
    toast.success("Goal Deleted.");
  };

  return (
    <>
      <div className = { goal.status === "Done" ? "goal-row goal-striked" : "goal-row"}>
        <div className="goal-actions">
          <div className="" onClick={deleteGoal} role={"button"}>
            <AiOutlineDelete />
          </div>
          <div onClick={editGoal} role={"button"}>
            <AiOutlineEdit />
          </div>
        </div>
        <div className="goal-content">
          <p className="goal-item">{goal.goalName}</p>
          <small className="goal-time">{goal.time}</small>
        </div>
        <Tooltip title={`You ${check ? "" : "did not"} completed task!`}>
          <Checkbox style={{ color: '#4a4e32b5' }} checked={check} onChange={handleCheck} />
        </Tooltip>
      </div>
      <GoalModal
        typeModal={type}
        openModal={updateModal}
        setOpenModal={setUpdateModal}
        goal={goal}
      />
    </>
  );
}

export default Goal;
