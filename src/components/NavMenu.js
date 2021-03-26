import React from "react";
import NavigationLink from "./NavigationLink";

const NavMenu = (props) => {
  return (
    <aside
      className={`md:hidden select-none fixed z-50 left-0 right-0 ${
        props.open ? "top-18" : "-top-56"
      } `}
    >
      <ul className="divide-y-2 divide-tussock divide-opacity-80 ">
        <NavigationLink opacity={props.opacity} insideMenu>
          عن خدماتنا
        </NavigationLink>
        <NavigationLink opacity={props.opacity} insideMenu>
          البيتزا
        </NavigationLink>
        <NavigationLink opacity={props.opacity} insideMenu>
          موقعنا
        </NavigationLink>
        <NavigationLink opacity={props.opacity} insideMenu>
          من نحن
        </NavigationLink>
      </ul>
    </aside>
  );
};

export default NavMenu;
