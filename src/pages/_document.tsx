import Header from "@/components/header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <div className="px-[200px]">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
