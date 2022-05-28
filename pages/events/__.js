import { useRouter } from "next/router";
import useSWR from "swr";
import Events from "../../components/Events";
import Nav from "../../components/Nav";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { query } = useRouter();
  const { data, error } = useSWR(`/api/event?${query.price}`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Nav />
      <div className="flex flex-wrap -mx-3">
        {data
          .filter((event) => event.price == query.price)
          .map((event, i) => (
            <Events key={i} event={event} />
          ))}
      </div>
    </>
  );
}
