import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

export default function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([...tasks, { id: Date.now(), text: task }]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <TodoInput addTask={addTask} />
      <TodoList tasks={tasks} deleteTask={deleteTask} />
    </section>
  );
}
