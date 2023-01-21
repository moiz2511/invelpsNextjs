import "../styles/globals.css";
import localFont from "@next/font/local";

const calibiriFont = localFont({ src: "../public/fonts/Calibri/Calibri.ttf" });

export default function App({ Component, pageProps }) {
  return (
    <main className={calibiriFont.className}>
      <Component {...pageProps} />
    </main>
  );
}
