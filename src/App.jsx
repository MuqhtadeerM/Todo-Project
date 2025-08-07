import "./App.css";
import { Todo } from "./Context";
import { Search } from "./Search";
import { TodoForm } from "./TodoForm";
import TodoItems from "./TodoItems";
import TodoList from "./TodoList";

function App() {
  return (
    <Todo>
      <Search />
      <TodoForm />
      <TodoList />
      <TodoItems />
    </Todo>
  );
}

export default App;
