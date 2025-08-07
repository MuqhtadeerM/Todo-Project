import { useContext } from "react";
import { TodoContext } from "./Context";
import { TodoItems } from "./TodoItems";

export const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <ul>
      {todos
        .filter((todo) => todo)
        .map((todo) => {
          console.log("Todo is rendering", todo);
          return <TodoItems key={todo.id} todo={todo} />;
        })}
    </ul>
  );
};

export default TodoList;
