import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Portal from "./Portal";

describe("Portal Component", () => {
  it("should render in portal with correct children", () => {
    expect.hasAssertions();

    const buttonTitle = "Example Button";

    render(
      <Portal>
        <button>{buttonTitle}</button>
      </Portal>
    );

    const children = screen.getByRole("button", { name: buttonTitle });

    expect(children).toBeInTheDocument();
    expect(children.parentElement?.id).toMatch(/^portal-/);
  });

  it("should render passed prefix", () => {
    expect.hasAssertions();

    const prefix = "popup-modal";
    const buttonTitle = "Example Button";

    render(
      <Portal prefix={prefix}>
        <button>{buttonTitle}</button>
      </Portal>
    );

    const children = screen.getByRole("button", { name: buttonTitle });

    expect(children).toBeInTheDocument();
    expect(children.parentElement?.id).toMatch(new RegExp(`^${prefix}-`));
  });

  it("should delete portal on unmount", () => {
    expect.hasAssertions();

    const prefix = "popup-modal";

    const { unmount } = render(<Portal prefix={prefix} />);

    const portal = document.body.querySelector(`div[id^='${prefix}-']`);

    expect(portal).toBeInTheDocument();

    unmount();

    const afterUnmount = document.body.querySelector(`div[id^='${prefix}-']`);

    expect(afterUnmount).not.toBeInTheDocument();
  });
});
