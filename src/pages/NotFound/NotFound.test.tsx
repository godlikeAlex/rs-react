import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import NotFound from "./NotFound";

describe("NotFound Page", () => {
  it("should render not found title", () => {
    render(<NotFound />);

    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });
});
