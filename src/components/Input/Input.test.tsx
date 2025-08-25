import { describe, expect, it } from "vitest";
import Input from "./Input";
import { render, screen } from "@testing-library/react";

describe("Select Component", () => {
  it("should render autocomplete list", () => {
    render(<Input autoCompleteList={["example"]} />);

    expect(screen.getByText("example")).toBeInTheDocument();
  });

  it("should render label", () => {
    const label = "ExampleLabel";

    render(<Input label={label} />);

    expect(screen.getByText(label)).toBeInTheDocument();
  });
});
