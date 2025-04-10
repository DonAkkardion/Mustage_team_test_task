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
    <div className="task-list-container">
      <ul className="task-list">
        {tasks.map((task) => (
          <li className="task-list-item" key={task.id}>
            {editingId === task.id ? (
              <>
                <input
                  className="task-form-input"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  style={{ margin: "0.5rem" }}
                />
                <input
                  className="task-form-input"
                  value={editDesc}
                  onChange={(e) => setEditDesc(e.target.value)}
                  style={{ marginBottom: "1rem" }}
                />
                <button
                  className="task-list-button"
                  onClick={saveEdit}
                  style={{ marginLeft: "1rem" }}
                >
                  Save
                </button>
                <button
                  className="task-list-button"
                  onClick={() => setEditingId(null)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <h3 className="task-title-checkBox">
                  {task.title} {task.isCompleted ? "✅" : "❌"}
                </h3>
                <p className="task-description">{task.description}</p>
                <button
                  className="task-description-button"
                  onClick={() => onToggle(task.id, !task.isCompleted)}
                >
                  {task.isCompleted ? "Mark as done" : "Mark as not done"}
                </button>
                <button
                  className="task-delete-button"
                  onClick={() => onDelete(task.id)}
                  style={{ marginLeft: "1rem" }}
                >
                  Delete
                </button>
                <button
                  className="task-edit-button"
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
    </div>
  );
};

export default TaskList;
