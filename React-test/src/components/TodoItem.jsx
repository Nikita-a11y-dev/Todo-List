const TodoItem = ({ task, deleteTask }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "10px auto",
        padding: "10px",
        width: "400px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <div>{task.text}</div>

      <button onClick={() => deleteTask(task.id)} style={{ padding: "5px" }}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
