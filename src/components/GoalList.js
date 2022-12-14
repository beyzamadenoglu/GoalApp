import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from 'react-paginate';
import Goal from "../components/Goal";
import StatusButton from "../components/StatusButton";
import { updateFilter } from "../slices/goalSlice";


function GoalList() {
  const goalList = useSelector((state) => state.goal.goalList);
  const filter = useSelector((state) => state.goal.filter);
  const dispatch = useDispatch();

  const filterStatus = useSelector((state) => state.goal.filter);

  const filteredList = [...goalList];

  const textList = {
    done: "You gotta be workin hard!",
    undone: "No undone tasks! Great job!",
    all: "Add your goals right now!"
  }

  const filteredByStatusList = filteredList.filter((item) => {
    if (filter === "all") return true;
    return item.status === filter;
  });

  const handleUpdate = (e) => {
    dispatch(updateFilter(e.target.value));
  };

  function Goals({ currentList }) {
    return (
      <>
        <div id="list-container">
          {currentList && currentList.length > 0
          ? currentList.map((goal) => <Goal key={goal.id} goal={goal} />)
          : <p className="no-goal-text"> {textList[filterStatus.toLowerCase()]} </p>}

        </div>
      </>
    )
  }
  function PaginatedItems({ itemsPerPage }) {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = filteredByStatusList.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filteredByStatusList.length / itemsPerPage);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % filteredByStatusList.length;
      setItemOffset(newOffset);
    };
    return (
      <>
        <Goals currentList={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel="next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="prev"
          renderOnZeroPageCount={null}
        />
      </>
    );
  }


  return (
    <>
      {filteredList && filteredList.length > 0 && <StatusButton value={filterStatus} func={handleUpdate}>
        <option value="all">all</option>
        <option value="Undone">undone</option>
        <option value="Done">done</option>
      </StatusButton>}
         <PaginatedItems itemsPerPage={5} />
    </>
  );
}

export default GoalList;
