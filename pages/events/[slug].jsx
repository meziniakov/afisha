import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/common/Layout";

const Events = () => {
  const { query } = useRouter();
  return <Layout>Events {query.slug}</Layout>;
};

export default Events;
