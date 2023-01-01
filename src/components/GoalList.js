import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Goal from "../components/Goal";
import StatusButton from "../components/StatusButton";

import { updateFilter } from "../slices/goalSlice";

function GoalList() {
  const goalList = useSelector((state) => state.goal.goalList);
  const filter = useSelector((state) => state.goal.filter);
  const dispatch = useDispatch(); 

  const filterStatus = useSelector((state) => state.goal.filter);

  const filteredList = [...goalList];

  const filteredByStatusList = filteredList.filter((item) => {
    if (filter === "all") return true;
      return item.status === filter;    
  });

  const handleUpdate = (e) => {
    dispatch(updateFilter(e.target.value));
    //setFilter(e.target.value);
    console.log("tehhhsttt", filterStatus);
  };


  return (
   <> 
   { filteredList.length > 0 && <StatusButton value={filterStatus} func={handleUpdate}>
        <option value="all">all</option>
        <option value="Undone">undone</option>
        <option value="Done">done</option>
      </StatusButton>}
    <div className="list-container">
    {console.log("sdvsdfvsdf", filteredList)}
    {console.log("aaaa", filteredByStatusList)}
      {filteredByStatusList && filteredByStatusList.length > 0
        ? filteredByStatusList.map((goal) => <Goal key={goal.id} goal={goal} />)
        : <p className="no-goal-text"> Add your goals right now! </p>}
    </div>
    </>
  );
}

export default GoalList;
