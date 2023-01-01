import React from "react";
import { useSelector } from "react-redux";
import Goal from "../components/Goal";

function GoalList() {
  const goalList = useSelector((state) => state.goal.goalList);
  const filter = useSelector((state) => state.goal.filter);

  const filteredList = [...goalList];

  const filteredByStatusList = filteredList.filter((item) => {
    if (filter === "all") return true;
      return item.status === filter;    
  });

  return (
    <div className="list-container">
    {console.log("sdvsdfvsdf", filteredList)}
    {console.log("aaaa", filteredByStatusList)}
      {filteredByStatusList && filteredByStatusList.length > 0
        ? filteredByStatusList.map((goal) => <Goal key={goal.id} goal={goal} />)
        : <p className="no-goal-text"> Add your goals right now! </p>}
    </div>
  );
}

export default GoalList;
