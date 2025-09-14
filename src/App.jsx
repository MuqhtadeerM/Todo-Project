import "./components/App.css";
import { CompletedTask } from "./components/CompletedTask";
import { Search } from "./components/Search";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Todo } from "./context/Context";
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
