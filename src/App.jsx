import "./App.css";
import { Todo } from "./Context";
import { TodoForm } from "./TodoForm";
import TodoItems from "./TodoItems";
import TodoList from "./TodoList";

function App() {
  return (
    <Todo>
      <TodoForm />
      <TodoList />
      <TodoItems />
    </Todo>
  );
}

export default App;
