import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="antialiased bg-cherry" >
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
