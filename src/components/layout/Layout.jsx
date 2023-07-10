import React, { Fragment } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />

      <div style={{ paddingTop: "97px" }}>{children}</div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
