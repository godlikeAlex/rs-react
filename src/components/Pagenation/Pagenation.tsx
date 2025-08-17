import Link from "next/link";
import classNames from "classnames";

type Props = {
  pages: number;
  currentPage: number;
  renderLink: (page: number) => string;
};

export default function Pagenation({ pages, currentPage, renderLink }: Props) {
  return (
    <nav aria-label="Page navigation example">
      <ul className="d-flex inline-flex justify-center -space-x-px text-sm w-full mt-2">
        {Array.from({ length: pages }, (_, x) => x + 1).map((page) => (
          <li key={page}>
            <Link
              href={renderLink(page)}
              className={classNames(
                "flex items-center justify-center px-3 h-8",
                {
                  "bg-blue-500 text-white hover:bg-blue-500 cursor-not-allowed":
                    currentPage === page,
                  "hover:bg-gray-100 hover:text-gray-700 dark:text-white":
                    currentPage !== page,
                },
                "leading-tight text-gray-500 border border-gray-300"
              )}
            >
              {page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
