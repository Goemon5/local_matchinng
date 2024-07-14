import React from "react";
import Head from "next/head";

import Card from "/Users/takeuchidaiki/local_matchinng/src/components/card/Card.tsx";
import Header from "/Users/takeuchidaiki/local_matchinng/src/components/Layout/Header.tsx";

export function Home() {
  return (
    <>
      <Head>
        <title>homeです</title>
      </Head>
      <Header />
      <Card />
    </>
  );
}
