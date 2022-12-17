import Head from "next/head";
import Projects from "../../components/Projects";
export default function index() {
  return (
    <>
      <Head>
        <title>Dawood Khatri | Projects</title>
        <meta name="description" content="Work Done by Me" />
      </Head>
      <Projects />
    </>
  );
}
