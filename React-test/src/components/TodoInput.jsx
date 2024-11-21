import { useState } from "react";

export default function TodoInput({ addTask }) {
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{
          padding: "10px",
          marginRight: "10px",
          width: "300px",
          border: task === "" ? "1px solid red" : "1px solid #ccc",
        }}
      />
      <button type="submit" style={{ padding: "10px" }}>
        Add Task
      </button>
    </form>
  );
}
