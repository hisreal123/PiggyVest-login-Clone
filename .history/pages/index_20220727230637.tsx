import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="wrapper">
      <Head>
        <title>PiggyVest Login Page</title>
        <meta name="description" content="developed by Tobi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>
        <Link href='../pages/LoginPage.tsx' 
      </p>
    </div>
  );
};

export default Home;
