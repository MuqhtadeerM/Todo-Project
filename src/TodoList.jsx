import { useContext } from "react";
import { TodoContext } from "./Context";
import { TodoItems } from "./TodoItems";

export const TodoList = () => {
  const { todos, completed, dispatch } = useContext(TodoContext);
  return (
    <div className="todo-wrapper">
      <h2 className="todo-title">All Tasks</h2>
      <ul className="todo-list">
        {todos
          .filter((todo) => todo && todo.text.trim())
          .map((todo) => (
            <TodoItems key={todo.id} todo={todo} />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
