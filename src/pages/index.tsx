import React from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";

import Card from "../components/card/Card";
import Header from "../components/Layout/Header";
import Post from "../components/post/Post";

export function Home() {
  return (
    <>
      <Head>
        <title>homeです</title>
      </Head>
      <Header />
      <Card />
      <Post />
    </>
  );
}
export default Home;
