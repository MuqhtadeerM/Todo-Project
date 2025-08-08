import "./App.css";
import { Todo } from "./Context";
import { Search } from "./Search";
import { TodoForm } from "./TodoForm";
import TodoList from "./TodoList";
import CompletedTask from "./CompletedTask";
import "./App.css"
function App() {
  return (
    <Todo>
      <Search />
      <TodoForm />

      <div className="task-columns">
        <TodoList />
        <CompletedTask />
      </div>
    </Todo>
  );
}

export default App;
