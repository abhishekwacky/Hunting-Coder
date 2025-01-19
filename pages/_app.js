import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  console.log("Wacky:::", pageProps);
  return (
    <>
      <Navbar />
      <Component {...pageProps} />{" "}
    </>
  );
}

export default MyApp;
