import { describe, expect, it } from "vitest";
import UncontrolledForm from "./UncontrolledForm";
import { render, screen } from "@testing-library/react";

describe("Controlled Form Component", () => {
  it("should render form", () => {
    render(<UncontrolledForm onSuccessSubmit={() => true} />);

    expect(screen.getByLabelText("Name"));
    expect(screen.getByLabelText("Age"));
    expect(screen.getByLabelText("Email"));
    expect(screen.getByLabelText("Password"));
    expect(screen.getByLabelText("Confirm Password"));
    expect(screen.getByLabelText("Country"));
    expect(screen.getByLabelText("Terms and conditions"));
    expect(screen.getByLabelText("Select File"));

    expect(screen.getByRole("button", { name: "Submit Form" }));
  });
});
