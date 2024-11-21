import TodoItem from "./TodoItem";

const TodoList = ({ tasks, deleteTask }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      {tasks.length === 0 ? (
        <p>No tasks yet. Add something!</p>
      ) : (
        tasks.map((task) => (
          <TodoItem key={task.id} task={task} deleteTask={deleteTask} />
        ))
      )}
    </div>
  );
};

export default TodoList;
