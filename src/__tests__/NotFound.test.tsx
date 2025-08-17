import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

const NotFound = () => <></>;

describe.todo("NotFound Page", () => {
  it("should render not found title", () => {
    render(<NotFound />);

    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });
});
