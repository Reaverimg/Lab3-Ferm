import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem, Icon } from "react-materialize";
export default function Navigation() {
  return (
    <Navbar
      // className="menu"
      // alignLinks="center"
      // brand={<span className="brand-logo">CGV</span>}
      // id="mobile-nav"
      // menuIcon={<Icon>menu</Icon>}
      alignLinks="center"
      brand={
        <a className="brand-logo" href="#">
          CGV Cinema
        </a>
      }
      centerLogo
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
    >
      <ul>
        <li>
          <Link to="/fetch">
            <Link to="/fetch">
              <Icon left>home</Icon>Home
            </Link>
          </Link>
        </li>
        {/* <li href="/mews">
          <Link to="/news">
            <Icon left>fiber_new</Icon>News
          </Link>
        </li>
        <li to="/about">
          <Link to="/about">
            <Icon left>info_outline</Icon>About
          </Link>
        </li> */}
        <li href="/contact">
          <Link to="/contact">
            <Icon left>contacts</Icon>Contact
          </Link>
        </li>
        <li href="/add">
          <Link to="/add">
            <Icon left>backup</Icon>Edit Films
          </Link>
        </li>
      </ul>
    </Navbar>
  );
}
