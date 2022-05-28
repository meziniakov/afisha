import { FC } from "react";
import Nav from "./Header/Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div>{children}</div>
      {/* <Footer /> */}
    </>
  );
};
export default Layout;
