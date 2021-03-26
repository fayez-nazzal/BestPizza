import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";
import NavMenu from "./NavMenu";
import { getScrollPercent } from "../helpers/helpers";

const Layout = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const getOpacity = () => {
    const val =
      ((scrollParcent > 12 ? scrollParcent * 1.5 : scrollParcent) + 25) / 75;
    return val > 1 ? 1 : val;
  };

  const [scrollParcent, setScrollParcent] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrollParcent(parseInt(getScrollPercent()));
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div>
      <Helmet>
        <title>Best Pizza | بيست بيتزا</title>
        <html lang="ar" dir="rtl" />
        <meta charSet="utf-8" />
      </Helmet>
      <Navbar
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        opacity={getOpacity()}
      />
      <NavMenu open={menuOpen} opacity={getOpacity()} />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
