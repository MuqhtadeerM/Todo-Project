import { useContext, useState } from "react";
import { TodoContext } from "./Context";
import "./App.css";

export const TodoItems = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);
  console.log(todo);

  if (!todo) return null;

  // use to add the editing functionality
  const [isEditing, setIsEditing] = useState(false);

  // use to place exisiting data in form
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim()) {
      dispatch({ type: "EDIT", payload: { id: todo.id, text: editText } });
      setIsEditing(false);
    }
  };

  return (
    <li
      className="todo-item"
      draggable
      onDragStart={(e) => e.dataTransfer.setData("text/plain", todo.id)}
    >
      {isEditing ? (
        <>
          <input
            className="todo-input"
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button className="todo-button-add2" onClick={handleEdit}>
            Update
          </button>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          > 
            {todo.text}
          </span>

          <div className="button-row">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button
              onClick={() => dispatch({ type: "DELETE", payload: todo.id })}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItems;
