import { createContext, useEffect, useReducer } from "react";

// creating todo context api to prevent props and pass data any where
export const TodoContext = createContext();

// this is use to load the data from local storage
const initialState = JSON.parse(localStorage.getItem("todos-state")) || {
  todos: [],
  completed: [],
};

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
            completed: false,
          },
        ],
      };
    case "DELETE":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case "EDIT":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? {
                ...todo,
                text: action.payload.text,
              }
            : todo
        ),
      };

    case "MARK_COMPLETED":
      const todoToComplete = state.todos.find(
        (todo) => todo.id === parseInt(action.payload)
      );

      if (!todoToComplete) return state;

      return {
        ...state,
        // it remove the element from the todos and add it into the completed array
        todos: state.todos.filter(
          (todo) => todo.id !== parseInt(action.payload)
        ),
        completed: [...state.completed, { ...todoToComplete, completed: true }],
      };

    default:
      return state;
  }
}

export const Todo = ({ children }) => {
  // using the Reducer to perfom add delete data
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // to sync local data
  useEffect(() => {
    localStorage.setItem("todos-state", JSON.stringify(state));
  }, [state]);

  return (
    //   wrapping the content to access the child
    <TodoContext.Provider
      value={{ todos: state.todos, completed: state.completed, dispatch }}
    >
      {children}
    </TodoContext.Provider>
  );
};
