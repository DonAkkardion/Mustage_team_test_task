import React, { useState } from "react";

const TaskList = ({ tasks, onDelete, onToggle, onUpdate }) => {
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");

  const startEditing = (task) => {
    setEditingId(task.id);
    setEditTitle(task.title);
    setEditDesc(task.description);
  };

  const saveEdit = () => {
    onUpdate(editingId, {
      title: editTitle,
      description: editDesc,
    });
    setEditingId(null);
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} style={{ marginBottom: "1rem" }}>
          {editingId === task.id ? (
            <>
              <input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <input
                value={editDesc}
                onChange={(e) => setEditDesc(e.target.value)}
              />
              <button onClick={saveEdit}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <h3>
                {task.title} {task.isCompleted ? "✅" : "❌"}
              </h3>
              <p>{task.description}</p>
              <button onClick={() => onToggle(task.id, !task.isCompleted)}>
                {task.isCompleted ? "Mark as done" : "Mark as not done"}
              </button>
              <button
                onClick={() => onDelete(task.id)}
                style={{ marginLeft: "1rem" }}
              >
                Delete
              </button>
              <button
                onClick={() => startEditing(task)}
                style={{ marginLeft: "1rem" }}
              >
                Edit
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
