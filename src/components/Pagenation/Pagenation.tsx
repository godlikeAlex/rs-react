import classNames from "classnames";
import { Link } from "react-router";

type Props = {
  pages: number;
  currentPage: number;
};

export default function Pagenation({ pages, currentPage }: Props) {
  return (
    <nav aria-label="Page navigation example">
      <ul className="d-flex inline-flex justify-center -space-x-px text-sm w-full mt-2">
        {Array.from({ length: pages }, (_, x) => x + 1).map((page) => (
          <li key={page}>
            <Link
              to={`?page=${page}`}
              className={classNames(
                "flex items-center justify-center px-3 h-8",
                {
                  "bg-blue-500 text-white hover:bg-blue-500 cursor-not-allowed":
                    currentPage === page,
                  "hover:bg-gray-100 hover:text-gray-700": currentPage !== page,
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
