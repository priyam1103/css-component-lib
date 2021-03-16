/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
const links = [
  {
    name: "Getting Started",
        item: false,
    doc:true
  },
  {
    name: "Introduction",
      item: false,
      doc:true
  },
  {
    name: "Elements",
    item: false,
  },
  {
    name: "Button",
    item: true,
  },
  {
    name: "Divider",
    item: true,
  },
  {
    name: "Header",
    item: true,
  },
  {
    name: "Image",
    item: true,
  },
  {
    name: "List",
    item: true,
  },
  {
    name: "Loader",
    item: true,
  },
  {
    name: "Collections",
    item: false,
  },
  {
    name: "Form",
    item: true,
  },
  {
    name: "Grid",
    item: true,
  },
  {
    name: "Navbar",
    item: true,
  },
  {
    name: "Alert",
    item: true,
  },
  {
    name: "Table",
    item: true,
  },
  {
    name: "Views",
    item: false,
  },
  {
    name: "Card",
    item: true,
  },
];
export default function Sidebar({ show }) {
  const location = useLocation();
  const linkname = location.pathname;

  let drawer_class = ["sidebar"];
  if (show) {
    drawer_class.push("open");
  }
  if (!show) {
    drawer_class.push("open-width");
  }

  return (
    <div className={drawer_class.join(" ")}>
      {links.map((item) => {
        if (!item.item && item.doc===undefined ) {
          return <p className="header">{item.name}</p>;
        } else if (!item.item && item.doc) {
            return <Link to={"/" + item.name.replace(/ /g,'').toLowerCase() + "s"} className="header">{item.name}</Link>;
          } else if (item.item) {
          return (
            <Link
              to={"/" + item.name.toLowerCase() + "s"}
              className={
                linkname === "/" + item.name.toLowerCase() + "s"
                  ? "bold item"
                  : "item"
              }
            >
              {item.name}
            </Link>
          );
        }
      })}
    </div>
  );
}
