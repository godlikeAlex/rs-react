import { Loading } from "@/components";
import useFetch from "@/hooks/useFetch";
import StarWarsService from "@/services/StarwarsService";
import classNames from "classnames";
import { useNavigate, useParams } from "react-router";

type DetailsPageParams = {
  page: string;
  peopleID: string;
};

export default function DetailPage() {
  const navigate = useNavigate();
  const { page, peopleID } = useParams<DetailsPageParams>();

  const { status, data: people } = useFetch({
    queryFn: () => StarWarsService.getPeople(peopleID!),
    key: [peopleID],
  });

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
            "absolute right-5 top-0,",
            "text-5xl text-right cursor-pointer"
          )}
          onClick={handleClose}
        >
          &#x2715;
        </button>

        <div className="mt-15">
          {status === "loading" ? (
            <Loading />
          ) : status === "error" ? (
            <h1>Somethind went wrong</h1>
          ) : (
            <>
              <h1 className="text-blue-600 text-2xl font-bold">
                {people.name}
              </h1>

              <h2 className="mt-4">
                Height: <span className="font-bold">{people.height}</span>
              </h2>
              <h2 className="mt-2">
                Birth Year:
                <span className="font-bold">{people.birth_year}</span>
              </h2>
              <h2 className="mt-2">
                Gender: <span className="font-bold">{people.gender}</span>
              </h2>
              <h2 className="mt-2">
                Mass: <span className="font-bold">{people.mass}</span>
              </h2>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
