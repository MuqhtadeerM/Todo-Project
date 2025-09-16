import { render, screen } from "@testing-library/react";
import { beforeEach, test, vi } from "vitest";
import { TodoContext } from "../context/Context";
import TodoForm from "../components/TodoForm";
import userEvent from "@testing-library/user-event";
describe("TodoForm testing", () => {
  const mock = vi.fn();

  function form() {
    render(
      <TodoContext.Provider value={{ dispatch: mock }}>
        <TodoForm />
      </TodoContext.Provider>
    );
  }

  // testing the todo
  test("adding the todo", async () => {
    form();
    const button = screen.getByRole("button", { name: /add/i });
    await userEvent.click(button);

    const input = screen.getByPlaceholderText(/add and edit item/i);
    await userEvent.type(input, "React");
  });

  // testing alert

  test("should alert when input is empty", async () => {
    const Mock = vi.spyOn(window, "alert").mockImplementation(() => {});
    form();

    Mock.mockRestore();
  });
});
