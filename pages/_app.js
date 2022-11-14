import "../styles/globals.css";
import Body from "../components/Body";

function MyApp({ Component, pageProps }) {
  return <Body element={<Component {...pageProps} />} />;
}

export default MyApp;
