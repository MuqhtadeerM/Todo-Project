import { useContext } from "react";
import { TodoContext } from "./Context";
import "./App.css";
export const completedTask = () => {
  const { completed, dispatch } = useContext(TodoContext);

  // this is drag and drop functionality handler
  const handleDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    dispatch({ type: "MARK_COMPLETED", payload: id });

    // if (completed) return 
  };

  return (
    <div
      className="completed-tasks"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <h2 className="todo-tile">Completed Task</h2>
      <ul className="todo-title">
        {completed.map((todo) => (
          <li className="todo-item" key={todo.id}>
            <span style={{ textDecoration: "line-through" }}>{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default completedTask;
