import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Event() {
  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.id && `/api/event/${query.id}?price=${query.price}`,
    fetcher
  );
  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading....</div>;

  return (
    <>
      {data.name}
      {query.price}
    </>
  );
}
