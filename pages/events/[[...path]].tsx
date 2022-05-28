import { useRouter } from "../../lib/router";
import useSWR from "swr";
import Events from "../../components/Events";
import { GetServerSideProps, NextPage } from "next";
import { IEvent } from "../../types/event";
import Layout from "../../components/common/Layout";
import SearchSection from "../../components/common/SearchSection/SearchSection";
import Filters from "../../components/common/SearchSection/Filters";
// import { events } from "../../public/moscow2";

interface IIndex {
  events: IEvent[];
  eventsAll: IEvent[];
}

const fetcher = (url) => fetch(url).then((res) => res.json());

function getUrl(params: { [key: string]: string | string[] }, query: any) {
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

const Index: NextPage<IIndex> = ({ events, eventsAll }) => {
  const { params, query } = useRouter();

  const { data, error } = useSWR(
    getUrl(params, query),
    fetcher
    // , {initialData: events}
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  if (data.status == "error")
    return (
      <>
        <div>{data.message}</div>
      </>
    );

  return (
    <Layout>
      <SearchSection />
      <Filters eventsAll={eventsAll} />
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
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const result = await fetch(getUrl(ctx.params, ctx.query));
  const events = await result.json();
  const resultAll = await fetch("http://localhost:3000/api/events");
  const eventsAll = await resultAll.json();
  return {
    props: { events, eventsAll },
  };
};
export default Index;
