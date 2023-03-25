import { AppProps } from "next/app";
import React from "react";
import Header from "../header";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="px-[200px]">{children}</div>
    </div>
  );
};

export default Layout;
