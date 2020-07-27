import "../styles/index.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div className="antialiased bg-cherry">
      <Head>
        <title>Valentizabal</title>
        <meta name="theme-color" content="#E12D58" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
