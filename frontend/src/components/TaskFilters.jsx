import React from "react";

const TaskFilters = ({ onFilter, onSearch }) => {
  return (
    <div className="task-filters-container double-list">
      <button
        className="task-filters-button"
        task-filters
        onClick={() => onFilter(null)}
      >
        All
      </button>
      <button className="task-filters-button" onClick={() => onFilter(true)}>
        Done
      </button>
      <button className="task-filters-button" onClick={() => onFilter(false)}>
        Not Done
      </button>
      <input
        className="task-form-input"
        type="text"
        placeholder="Search"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default TaskFilters;
