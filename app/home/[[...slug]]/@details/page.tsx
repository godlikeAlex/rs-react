interface Props {
  slug: string[];
}

export default async function Page({ params }: { params: Promise<Props> }) {
  const { slug = [] } = await params;

  const [page, detailID] = slug;

  return (
    <>
      Details {page} - {detailID}
    </>
  );
}
