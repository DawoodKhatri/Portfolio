import Head from "next/head";
import Contact from "../../components/Contact";
export default function index() {
  return (
    <>
      <Head>
        <title>Dawood Khatri | Contact</title>
        <meta
          name="description"
          content="Send a Message, Other Links"
        />
      </Head>
      <Contact />
    </>
  );
}
