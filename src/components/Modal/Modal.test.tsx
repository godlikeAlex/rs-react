import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";

import Modal from "./Modal";

describe("Modal Component", () => {
  it("should render with correct children", () => {
    expect.hasAssertions();

    const buttonExampleTitle = "Send Form";

    render(
      <Modal isOpen onClose={() => true}>
        <button>{buttonExampleTitle}</button>
      </Modal>
    );

    expect(
      screen.getByRole("button", { name: buttonExampleTitle })
    ).toBeInTheDocument();
  });

  it("should close modal when isOpen equals false", () => {
    expect.hasAssertions();

    render(<Modal isOpen={false} onClose={() => true}></Modal>);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("should call onClose when closing modal", async () => {
    expect.hasAssertions();

    const onClose = vi.fn(() => true);

    const user = userEvent.setup();

    render(<Modal isOpen={true} onClose={onClose}></Modal>);

    await user.click(screen.getByRole("button", { name: /close button/i }));

    expect(onClose).toHaveBeenCalled();
  });

  it("should call onClose when press Escape key", async () => {
    expect.hasAssertions();

    const onClose = vi.fn(() => true);

    const user = userEvent.setup();

    render(<Modal isOpen={true} onClose={onClose}></Modal>);

    await user.keyboard("{Escape}");

    expect(onClose).toHaveBeenCalled();
  });
});
