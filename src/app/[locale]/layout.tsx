import { type Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

import Providers from "./providers";

import "@/global.css";
import { Header, ThemeSwitcher } from "@/components";

export const metadata: Metadata = {
  title: "Star Wars Database",
  description: "Star Wars Database Description",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body>
        <div id="root">
          <div className="dark:bg-gray-900 min-h-screen">
            <div className="max-w-4xl mx-auto px-2.5 py-2.5 flex flex-col gap-6">
              <Providers>
                <NextIntlClientProvider>
                  <Header />
                  {children}
                </NextIntlClientProvider>
                <ThemeSwitcher />
              </Providers>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
