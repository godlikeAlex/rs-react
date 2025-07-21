import { render, screen } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import PeopleList from "./PeopleList";

describe("PeopleList Component", () => {
  it("should render a list of people", () => {
    expect.hasAssertions();

    const peoplesMock = [
      {
        name: "Aleksandr",
        height: "1234",
        birth_year: "2000",
        gender: "M",
        mass: "230",
      },
    ];

    render(<PeopleList peoples={peoplesMock} />);

    expect(screen.getByText(peoplesMock[0].name)).toBeInTheDocument();
    expect(screen.getByText(peoplesMock[0].height)).toBeInTheDocument();
    expect(screen.getByText(peoplesMock[0].birth_year)).toBeInTheDocument();
    expect(screen.getByText(peoplesMock[0].gender)).toBeInTheDocument();
    expect(screen.getByText(peoplesMock[0].mass)).toBeInTheDocument();
  });
});
