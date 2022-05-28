import useSWR from "swr";
import Footer from "../components/common/Footer";
import Layout from "../components/common/Layout";
import Person from "../components/Person";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR("/api/people", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Layout>
      <ul>
        {data.map((p, i) => (
          <Person key={i} person={p} />
        ))}
      </ul>
      <Footer />
    </Layout>
  );
}
