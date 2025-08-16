interface Params {
  slug: string[];
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug = [] } = await params;
  const [page = "1"] = slug;

  return <div>My Post: {page}</div>;
}
