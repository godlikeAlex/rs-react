import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import type { PropsWithChildren, ReactNode } from "react";
import { MemoryRouter } from "react-router";

export const queryClientTest = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export function withQueryClient(ui: ReactNode) {
  return (
    <QueryClientProvider client={queryClientTest}>{ui}</QueryClientProvider>
  );
}

function wrapperProviders({ children }: PropsWithChildren) {
  return (
    <MemoryRouter>
      <QueryClientProvider client={queryClientTest}>
        {children}
      </QueryClientProvider>
    </MemoryRouter>
  );
}

export function renderWithProviders(ui: ReactNode) {
  return render(<>{ui}</>, {
    wrapper: wrapperProviders,
  });
}
