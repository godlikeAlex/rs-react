import usePeopleSelectStore from "@/stores/people-selection-store";
import { render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import ActionBar from "./ActionBar";
import userEvent from "@testing-library/user-event";

describe("Action Bar Component", () => {
  beforeEach(() => {
    usePeopleSelectStore.setState({ selected: [], togglePeople: () => true });
  });

  it("should render nothing if no selected items", () => {
    render(<ActionBar />);

    expect(
      screen.queryByRole("button", { name: "Download CSV" })
    ).not.toBeInTheDocument();
  });

  it("should render buttons and count selected items", () => {
    usePeopleSelectStore.setState({
      selected: [
        {
          id: "1",
          url: "",
          mass: "2",
          name: "",
          height: "",
          birth_year: "",
          gender: "",
        },
      ],
    });

    render(<ActionBar />);

    expect(
      screen.getByRole("button", { name: "Download CSV" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Unselect All" })
    ).toBeInTheDocument();
  });

  it("should download file on click button", async () => {
    vi.stubGlobal("URL", {
      ...URL,
      createObjectURL: vi.fn(() => "mock-url"),
      revokeObjectURL: vi.fn(),
    });

    usePeopleSelectStore.setState({
      selected: [
        {
          id: "1",
          url: "",
          mass: "2",
          name: "",
          height: "",
          birth_year: "",
          gender: "",
        },
      ],
    });
    const user = userEvent.setup();

    render(<ActionBar />);

    await user.click(screen.getByRole("button", { name: "Download CSV" }));

    await waitFor(() => {
      expect(screen.getByRole("link", { hidden: true })).toHaveAttribute(
        "href",
        "mock-url"
      );
    });
  });
});
