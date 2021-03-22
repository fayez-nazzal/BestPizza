import React, { useState } from "react";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";
import NavMenu from "./NavMenu";

const Layout = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <Helmet>
        <title>Best Pizza | بيست بيتزا</title>
        <html lang="ar" dir="rtl" />
        <meta charSet="utf-8" />
      </Helmet>
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <NavMenu open={menuOpen} />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
