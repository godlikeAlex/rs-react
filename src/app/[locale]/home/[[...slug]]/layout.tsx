import ActionBar from "@/components/PeopleList/ActionBar";
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

  const peopleID = slug.at(1);

  return (
    <>
      {children}
      <ActionBar />
      {peopleID ? details : null}
    </>
  );
}
