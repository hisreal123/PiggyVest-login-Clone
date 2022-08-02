import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import "../All.scss";

const Home: NextPage = () => {
  return (
    <div className="wrapper">
      <Head>
        <title>PiggyVest Login Page</title>
        <meta name="description" content="developed by Tobi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>PiggyVest Login page</p>
    </div>
  );
};

export default Home;
