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
    <ul style={{ listStyle: "none" }}>
      <div className="todo-item-container">
        {isEditing ? (
          <>
            <input
              className="todo-input"
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
            <button className="todo-button" onClick={handleEdit}>
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
      </div>
    </ul>
  );
};

export default TodoItems;
