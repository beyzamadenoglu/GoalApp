import React from "react";
import { useSelector } from "react-redux";
import Goal from '../components/Goal';

function GoalList() {
  const goalList = useSelector((state) => state.goal.goalList);
  console.log(goalList);
  const filteredList = [...goalList];
  filteredList.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });
  return (
    <div>
      {filteredList && filteredList.length > 0 ? filteredList.map((goal) => <Goal key={goal.id} goal={goal}/>) : "noShow"}
    </div>
  );
}

export default GoalList;
