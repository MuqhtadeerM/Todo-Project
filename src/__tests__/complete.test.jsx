import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { TodoContext } from "../context/Context";
import CompletedTask from "../components/CompletedTask";

const mockComp = [
  { id: "1", text: "Completed Task 1" },
  { id: "2", text: "Completed Task 2" },
];

const mockDis = vi.fn();

function renderForm(completed = mockComp) {
  return render(
    <TodoContext.Provider value={{ completed, dispatch: mockDis }}>
      <CompletedTask />
    </TodoContext.Provider>
  );
}

describe("Testing complete task", () => {
  test("Testing the Task", () => {
    renderForm();
    expect(screen.getByText("Completed Task 1")).toBeInTheDocument();
  });
});
