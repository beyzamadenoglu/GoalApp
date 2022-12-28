import React from "react";
import { useSelector } from "react-redux";
import Goal from "../components/Goal";

function GoalList() {
  const filter = useSelector((state) => state.goal.filtered);

  const goalList = useSelector((state) => state.goal.goalList);
  console.log(goalList);
  const filteredList = [...goalList];

  filteredList.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  const filteredByStatusList = filteredList.filter((item) => {
    if (filter === "all") {
      return true;
    }
    return item.status === filter;
  });
  
  return (
    <div>
      {filteredByStatusList && filteredByStatusList.length > 0
        ? filteredByStatusList.map((goal) => <Goal key={goal.id} goal={goal} />)
        : "noShow"}
    </div>
  );
}

export default GoalList;
