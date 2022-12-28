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
  const [check, setCheck] = useState(() => {
    if(goal.status === "Done") {
      return true;
    } 
    else return false;
  });

  const type = "update";

  useEffect(() => {
   handleCheck();
  }, [check]);

  useEffect(() => {
    if (goal.status === "Done") {
      console.log("fssf" || false);
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, [goal.status]);

  const editGoal = () => {
    setUpdateModal(true);
  };

  const deleteGoal = () => {
    dispatch(deleteItem(goal.id));
    toast.success("Goal Deleted.");
  };

  const handleCheck = () => {
    setCheck(!check);
    dispatch(
      updateItem({
        ...goal,
        status: check ? "Done" : "Undone",
      })
    );
  };

  return (
    <>
      <div>
        <div>
          <Tooltip title={`You ${check ? "" : "did not"} completed task!`}>
            <Checkbox checked={check} onChange={handleCheck} />
          </Tooltip>
          <p className="goal-item">{goal.goalName}</p>
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
