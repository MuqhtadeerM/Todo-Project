import { useContext, useState } from "react";
import { TodoContext } from "./Context";
import "./App.css";

export const TodoForm = () => {
  // usestate to store the data and re render as per need
  const [text, setText] = useState("");

  // creating context to send and access the data globally and
  const { dispatch } = useContext(TodoContext);

  // handles the form submision
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent refrsh from defaultly

    // prevent adding empty todo
    if (text.trim() === "") {
      alert("please enter the todo item");
      return;
    }

    dispatch({ type: "ADD", payload: text });
    setText("");  // it clear input
  };
  return (
    // creating form
    <form onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        value={text}
        placeholder="Add and Edit items"
        onChange={(e) => setText(e.target.value)}
      />
      <button className="todo-button-add" type="submit">
        ADD
      </button>
    </form>
  );
};

export default TodoForm;
