import { expect, test } from "vitest";
import { Search } from "../components/Search";
import { render, screen } from "@testing-library/react";
import { TodoContext } from "../context/Context";
import userEvent from "@testing-library/user-event";

test("Testing search bar", async () => {
  const mock = [
    { id: 1, text: "React", completed: true },
    { id: 2, text: "Python", completed: true },
  ];
  render(
    <TodoContext.Provider value={{ todos: mock }}>
      <Search />
    </TodoContext.Provider>
  );

  const input = screen.getByRole("textbox");
  // testing the text box
  expect(input).toBeInTheDocument();

  // checking the textbox contains the place holder data or not
  expect(screen.getByPlaceholderText(/search Todos../i)).toBeInTheDocument();

  await userEvent.type(input, "read");
  expect(screen.getByDisplayValue("read")).toBeInTheDocument();
});
