import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import Navigation from "../components/navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
