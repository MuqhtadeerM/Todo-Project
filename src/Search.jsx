import React, { useContext, useState } from "react";
import { TodoContext } from "./Context";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [segest, setSegest] = useState([]);

  const { todos } = useContext(TodoContext);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.trim() === "") {
      setSegest([]);
      return;
    }

    const filtered = todos.filter((todo) =>
      todo.text.toLowerCase().includes(value.toLowerCase())
    );
    setSegest(filtered);
  };

  return (
    <div style={{ width: "250px", margin: "50px auto", position: "relative" }}>
      <input
        type="text"
        placeholder="Searc Todos..."
        value={search}
        onChange={handleSearch}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          fontSize: "16px",
        }}
      />
      {segest.length > 0 && (
        <div
          style={{
            position: "absolute",
            backgroundColor: "black",
            border: "1px solid #ccc",
            borderTop: "none",
            width: "270px",
            maxHeight: "100px",
            overflowY: "auto",
            zIndex: 10,
            borderRadius: "6px 6px",
          }}
        >
          {segest.map((todo, index) => (
            <div
              key={todo.id || index}
              style={{
                padding: "10px",
                cursor: "pointer",
                borderBottom: "1px solid yellow",
              }}
              onMouseOver={(e) => (
                (e.target.style.background = "pink"),
                (e.target.style.color = "black")
              )}
              onMouseOut={(e) => (e.target.style.background = "white")}
            >
              {todo.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
