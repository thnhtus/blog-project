import React from "react";
import Header from "../header";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="px-[300px]">
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
