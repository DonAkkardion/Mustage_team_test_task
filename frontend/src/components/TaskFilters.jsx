import React from "react";

const TaskFilters = ({ onFilter, onSearch }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <button onClick={() => onFilter(null)}>All</button>
      <button onClick={() => onFilter(true)}>Done</button>
      <button onClick={() => onFilter(false)}>Undone</button>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => onSearch(e.target.value)}
        style={{ marginLeft: "1rem" }}
      />
    </div>
  );
};

export default TaskFilters;
