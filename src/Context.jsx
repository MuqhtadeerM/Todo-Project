import { createContext, useEffect, useReducer } from "react";

// creating todo context api to prevent props and pass data any where
export const TodoContext = createContext();

// this is use to load the data from local storage
const initialState = JSON.parse(localStorage.getItem("todos")) || [];

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
        },
      ];
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);

    case "EDIT":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              text: action.payload.text,
            }
          : todo
      );

    default:
      return state;
  }
}

export const Todo = ({ children }) => {
  // using the Reducer to perfom add delete data
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  // to sync local data
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

    return (
      //   wrapping the content to access the child
        <TodoContext.Provider value={{ todos, dispatch }}>
        {children}
      </TodoContext.Provider>
    );
};
