import React, { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title, description, isCompleted: false });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="task-form-container double-list">
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          className="task-form-input"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          className="task-form-input"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="task-form-button" type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
