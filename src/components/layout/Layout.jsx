import React, { Fragment } from "react";
import Navbar from "@/components/navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      {children}
      {/*<Footer />*/}
    </Fragment>
  );
};

export default Layout;
