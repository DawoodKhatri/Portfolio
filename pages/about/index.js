import Head from "next/head";
import About from "../../components/About";
export default function index() {
  return (
    <>
      <Head>
        <title>Dawood Khatri | About</title>
        <meta
          name="description"
          content="I am in my Third Year Pursuing my Bachelor's of Engineering in Information Technology."
        />
      </Head>
      <About />
    </>
  );
}
