import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import FormView from "./FormView";

const mockForm = {
  name: "Aleksandr",
  age: 24,
  country: "Russia",
  gender: "Man",
  password: "123",
  addedAt: Date.now(),
  file: "file.png",
};

describe("FormView Component", () => {
  it("should render form data", () => {
    render(<FormView form={mockForm} />);

    expect(screen.getByText(mockForm.name)).toBeInTheDocument();
    expect(screen.getByText(mockForm.age)).toBeInTheDocument();
    expect(screen.getByText(mockForm.country)).toBeInTheDocument();
    expect(screen.getByText(mockForm.gender)).toBeInTheDocument();
    expect(screen.getByText(mockForm.password)).toBeInTheDocument();
  });
});
