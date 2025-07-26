import { useEffect, useRef, useState } from "react";
type Parameters<T> = {
  queryFn: () => Promise<T>;
  key: readonly unknown[];
};

type Status = "idle" | "error" | "loading";

type UseFetchResult<T> =
  | {
      status: "idle";
      data: T;
    }
  | {
      status: "error";
      data: undefined;
    }
  | {
      status: "loading";
      data: undefined;
    };

export default function useFetch<T>({
  queryFn,
  key,
}: Parameters<T>): UseFetchResult<T> {
  const keyHash = JSON.stringify(key);
  const prevKeyHash = useRef<string | null>(null);

  const [status, setStatus] = useState<Status>("loading");
  const [data, setData] = useState<T | undefined>();

  useEffect(() => {
    if (prevKeyHash.current === keyHash) {
      return;
    }

    prevKeyHash.current = keyHash;

    const fetchQuery = async () => {
      setStatus("loading");

      try {
        const result = await queryFn();

        setData(result);
        setStatus("idle");
      } catch {
        setStatus("error");
      }
    };

    fetchQuery();
  }, [keyHash, queryFn]);

  if (status === "loading") return { status, data: undefined };
  if (status === "error") return { status, data: undefined };

  return { status: "idle", data: data! };
}
