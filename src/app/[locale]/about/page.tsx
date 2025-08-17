import { getTranslations } from "next-intl/server";

export default async function Page() {
  const t = await getTranslations("About");

  return (
    <div className="px-4 py-4 border-1 border-zinc-200 rounded-lg shadow-md text-center dark:text-white">
      <h1 className="text-3xl">{t("title")}</h1>
      <h2 className="my-2">{t("desc")}</h2>

      <a
        href="https://github.com/godlikeAlex"
        target="_blank"
        className=" block underline"
        rel="noreferrer"
      >
        {t("my github")}
      </a>

      <a
        href="https://rs.school/courses/reactjs"
        target="_blank"
        className=" underline"
        rel="noreferrer"
      >
        RS School React
      </a>
    </div>
  );
}
