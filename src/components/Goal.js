import React from "react";
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";
function Goal({ goal }) {

    const editGoal = () => {
        console.log("editing")
    }

    const deleteGoal = () => {
        console.log("deleting")
    }
  return (
    <div>
      <div>
        [ ]<p className="goal-item">{goal.goalName}</p>
      </div>
      <div>
        <p className="goal-time">{goal.time}</p>
      </div>
      <div className="goal-actions">
        <div className="" onClick={deleteGoal} role={'button'}>
        <AiOutlineDelete/>
        </div>
        <div className="" onClick={editGoal} role={'button'}>
        <AiOutlineEdit/>
        </div>
      </div>
    </div>
  );
}

export default Goal;
