import { type Metadata } from "next";

import Providers from "./providers";

import "@/global.css";
import { ThemeSwitcher } from "@/components";

export const metadata: Metadata = {
  title: "Star Wars Database",
  description: "Star Wars Database Description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
                {children}

                <ThemeSwitcher />
              </Providers>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
