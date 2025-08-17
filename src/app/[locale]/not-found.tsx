import { getTranslations } from "next-intl/server";

export default async function NotFound() {
  const t = await getTranslations("NotFound");

  return (
    <div className="px-4 py-4 border-1 border-zinc-200 rounded-lg shadow-md text-center">
      <h2>{t("title")}</h2>
    </div>
  );
}
