import { QueryClient } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import type { PropsWithChildren, ReactNode } from "react";

export const queryClientTest = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

function wrapperProviders({ children }: PropsWithChildren) {
  return (
    <NextIntlClientProvider locale="ru">{children}</NextIntlClientProvider>
  );
}

export function renderWithProviders(ui: ReactNode) {
  return render(<>{ui}</>, {
    wrapper: wrapperProviders,
  });
}
