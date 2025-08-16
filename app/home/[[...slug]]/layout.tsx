import type { ReactNode } from "react";

interface Params {
  params: Promise<{ slug: [] }>;
  details: ReactNode;
  children: ReactNode;
}

export default async function HomeLayout({
  details,
  children,
  params,
}: Params) {
  const { slug = [] } = await params;

  const detailsID = slug.at(1);

  return (
    <>
      {children}

      {detailsID && details}
    </>
  );
}
