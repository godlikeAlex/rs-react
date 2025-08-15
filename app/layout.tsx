import { type Metadata } from "next";

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
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
