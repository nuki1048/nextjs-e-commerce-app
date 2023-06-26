import React, { Fragment } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar backgroundColor={"transparent"} />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
