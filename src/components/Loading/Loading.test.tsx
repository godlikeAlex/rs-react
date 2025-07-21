import { render, screen } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import Loading from "./Loading";

describe("Loading Component", () => {
  it("should render loader", () => {
    expect.hasAssertions();

    render(<Loading />);

    expect(screen.getByRole("status")).toBeInTheDocument();
    expect(screen.getByText(/Loading/)).toBeInTheDocument();
  });
});
