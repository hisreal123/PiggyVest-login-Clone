import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

interface all {
  alt: string;
}
const Home = (props: all) => {
  return (
    <div className="wrapper">
      <Head>
        <title>PiggyVest Login Page</title>
        <meta name="description" content="developed by Tobi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>
        <Link href="../LoginPage">
          <a {alt}="login page"> Login page</a>
        </Link>
      </p>
    </div>
  );
};

export default Home;
