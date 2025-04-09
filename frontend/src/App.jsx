import React, { useEffect, useState } from "react";
import {
  fetchTasks,
  createTask,
  deleteTask,
  updateTask,
  filterTasks,
  searchTasks,
} from "./api/tasks";

import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskFilters from "./components/TaskFilters";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleUpdate = async (id, updates) => {
    await updateTask(id, updates);
    loadTasks();
  };

  const loadTasks = async () => {
    const res = await fetchTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleAdd = async (task) => {
    await createTask(task);
    loadTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  const handleToggle = async (id, isCompleted) => {
    await updateTask(id, { isCompleted });
    loadTasks();
  };

  const handleFilter = async (status) => {
    if (status === null) {
      loadTasks();
    } else {
      const res = await filterTasks(status);
      setTasks(res.data);
    }
  };

  const handleSearch = async (query) => {
    if (!query.trim()) {
      loadTasks();
    } else {
      const res = await searchTasks(query);
      setTasks(res.data);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Task Management App</h1>
      <TaskForm onAdd={handleAdd} />
      <TaskFilters onFilter={handleFilter} onSearch={handleSearch} />
      <TaskList
        tasks={tasks}
        onDelete={handleDelete}
        onToggle={handleToggle}
        onUpdate={handleUpdate}
      />
    </div>
  );
}

export default App;
