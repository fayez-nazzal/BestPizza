import React from 'react'
import NavigationLink from "./NavigationLink";

const NavMenu = (props) => {
    return (
      <aside
        className={`md:hidden select-none absolute z-0 left-0 right-0 ${
          props.open ? "top-16" : "-top-56"
        }  origin-top duration-150`}
      >
        <ul className="divide-y-2 divide-tussock divide-opacity-30">
          <NavigationLink insideMenu>عن خدماتنا</NavigationLink>
          <NavigationLink insideMenu>البيتزا</NavigationLink>
          <NavigationLink insideMenu>العروض</NavigationLink>
          <NavigationLink insideMenu>من نحن</NavigationLink>
        </ul>
      </aside>
    );
}

export default NavMenu
