import { describe, expect, it } from "vitest";
import Select from "./Select";
import { render, screen } from "@testing-library/react";

describe("Select Component", () => {
  it("should render list", () => {
    render(<Select list={["example"]} />);

    expect(screen.getByText("example")).toBeInTheDocument();
  });

  it("should render label", () => {
    const label = "ExampleLabel";

    render(<Select list={["example"]} label={label} />);

    console.log(screen.logTestingPlaygroundURL());

    expect(screen.getByText(label)).toBeInTheDocument();
  });
});
