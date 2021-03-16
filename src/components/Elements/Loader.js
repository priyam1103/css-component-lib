/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import SubElementHeader from "../SubElementHeader";
import ComponentHeader from "../ComponentHeader";
const d = {
  id: "",
  name: "",
  desc: "",
  excode: ``,
  maincode: ``,
};
export default function List() {
  const data = [
    {
      id: "1",
      name: "Loader",
      desc: "Loader of different sizes",
      excode: ` <div class="sm-loader">
            <div class="loader"></div>
          </div>
          <div class="md-loader">
            <div class="loader"></div>
          </div>
          <div class="lg-loader">
            <div class="loader"></div>
          </div>`,
      maincode: (
        <div className="width-90 three-margin-top">
          <div class="sm-loader three-margin-top">
            <div class="loader"></div>
          </div>
          <div class="md-loader three-margin-top">
            <div class="loader"></div>
          </div>
          <div class="lg-loader three-margin-top">
            <div class="loader"></div>
          </div>
        </div>
      ),
    },
    {
      id: "2",
      name: "Loader with message",
      desc: "Loader of different sizes with loading message",
      excode: `  <div class="loading sm-loader three-margin-top">
      <div class="loader"></div>
      <p class="text">Loading...</p>
    </div>

    <div class="loading md-loader three-margin-top">
      <div class="loader"></div>
      <p class="text">Loading...</p>
    </div>

    <div class="loading lg-loader three-margin-top">
      <div class="loader"></div>
      <p class="text">Loading...</p>
    </div>`,
      maincode: (
        <div className="width-90 three-margin-top">
          <div class="loading sm-loader three-margin-top">
            <div class="loader"></div>
            <p class="text">Loading...</p>
          </div>

          <div class="loading md-loader three-margin-top">
            <div class="loader"></div>
            <p class="text">Loading...</p>
          </div>

          <div class="loading lg-loader three-margin-top">
            <div class="loader"></div>
            <p class="text">Loading...</p>
          </div>
        </div>
      ),
    },
    {
      id: "3",
      name: "Horizontal Loader",
      desc: "Loading with perecentage",
      excode: `<div class="horizontal-loader">
            <div class="fill"></div>
          </div>`,
      maincode: (
        <div className="width-90 three-margin-top">
          <div class="horizontal-loader">
            <div class="fill"></div>
          </div>
        </div>
      ),
    },
  ];
  const [showcode, setShowCode] = useState([]);
  function click(val) {
    if (showcode.includes(val)) {
      setShowCode((prevState) => prevState.splice(showcode.indexOf(val), 1));
    } else setShowCode((prevState) => prevState.concat(val));
  }
  return (
    <div className="component">
      <ComponentHeader
        compname="Lists"
        compdesc="Listing of items or grouping of data."
      />

      {data.map((item) => (
        <SubElementHeader
          Name={item.name}
          Desc={item.desc}
          eleno={item.id}
          click={click}
          showcode={showcode}
          excode={item.excode}
          maincode={item.maincode}
        />
      ))}
    </div>
  );
}
