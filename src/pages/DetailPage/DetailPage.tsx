import classNames from "classnames";
import { useNavigate, useParams } from "react-router";

type DetailsPageParams = {
  page: string;
  peopleID: string;
};

export default function DetailPage() {
  const navigate = useNavigate();
  const { page } = useParams<DetailsPageParams>();

  const handleClose = () => {
    navigate(`/${page}`);
  };

  return (
    <div
      className={classNames(
        "flex justify-end",
        "fixed w-full h-full top-0 left-0"
      )}
    >
      <div
        className={classNames(
          "absolute w-full h-full",
          "bg-gray-700 opacity-50"
        )}
        onClick={handleClose}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Escape" && handleClose()}
      />

      <div
        className={classNames("w-md h-full p-8", "relative z-40", "bg-white")}
      >
        <button
          className={classNames(
            "absolute right-0 top-0,",
            "text-5xl text-right"
          )}
        >
          &#x2715;
        </button>

        <div className="mt-15">
          <h1>Example</h1>
        </div>
      </div>
    </div>
  );
}
