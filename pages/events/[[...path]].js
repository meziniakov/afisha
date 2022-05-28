import { useRouter } from "../../lib/router";
import useSWR from "swr";
import Events from "../../components/Events";
import Nav from "../../components/Nav";
// import { events } from "../../public/moscow2";

const fetcher = (url) => fetch(url).then((res) => res.json());

export async function getServerSideProps(ctx) {
  const events = await fetcher(getUrl(ctx.params, ctx.query));
  return {
    props: { events },
  };
}

function getUrl(params, query) {
  let url = "http://localhost:3000/api/events";
  const searchParams = new URLSearchParams();
  if (params.path?.[0]) {
    searchParams.append("filter", params.path[0]);
  }
  if (query.id) {
    searchParams.append("id", query.id);
  }
  if (query.price) {
    searchParams.append("price", query.price);
  }
  if (query.ageRestriction) {
    searchParams.append("ageRestriction", query.ageRestriction);
  }
  const searchString = searchParams.toString();

  return `${url}${searchString.length !== 0 ? "?" + searchString : ""}`;
}

export default function Index({ events }) {
  const { router, params, query } = useRouter();

  const { data, error } = useSWR(getUrl(params, query), fetcher, {
    initialData: events,
  });
  // console.log("Is data ready?", !!data);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  if (data.status == "error")
    return (
      <>
        <Nav />
        <div>{data.message}</div>
      </>
    );

  return (
    <>
      <Nav />
      {Array.isArray(data) ? (
        <div className="flex flex-wrap -mx-3">
          {data.map((event, i) => (
            <Events key={i} event={event} />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap -mx-3">
          <Events key={data.id} event={data} />
        </div>
      )}
    </>
  );
}
