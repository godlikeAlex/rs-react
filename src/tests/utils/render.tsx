import { render } from "@testing-library/react";
import type { PropsWithChildren, ReactNode } from "react";
import { MemoryRouter } from "react-router";

function wrapperProviders({ children }: PropsWithChildren) {
  return <MemoryRouter>{children}</MemoryRouter>;
}

export function renderWithProviders(ui: ReactNode) {
  return render(<>{ui}</>, {
    wrapper: wrapperProviders,
  });
}
