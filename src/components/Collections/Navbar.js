/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import SubElementHeader from "../SubElementHeader";
import ComponentHeader from "../ComponentHeader";

export default function Navbar() {
  const data = [
    {
        id: "1",
        name: "Navbar",
        desc: "Navbar with links and brand name.",
        excode: ` <div class="navbar row-flex">
        <div>
        <h2>Navbar</h2>
    </div>
    <div class="nav-links">
        
        <a href="#" class="">
            Home
        </a>
        <a href="#">
            About
        </a>
        <a href="#">
            Contact
        </a>
        <a href="#">
            Careers
        </a>
    
        
    </div>
    </div>`,
          maincode: (<div className="width-90 three-margin-top">
              <div class="navbar row-flex">
        <div>
        <h2>Navbar</h2>
    </div>
    <div class="nav-links">
        
        <a href="#" class="">
            Home
        </a>
        <a href="#">
            About
        </a>
        <a href="#">
            Contact
        </a>
        <a href="#">
            Careers
        </a>
    
        
    </div>
    </div>
        </div>),
      },
      {
        id: "2",
        name: "Navbar",
        desc: "Navbar with links and search box.",
        excode: `<div class="navbar row-flex">
        <div class="nav-links">
          <a href="#"> Home </a>
          <a href="#"> About </a>
          <a href="#"> Contact </a>
          <a href="#"> Careers </a>
        </div>
  
        <input type="text" placeholder="Search..." class="std-input" />
      </div> `,
          maincode: (<div className="width-90 three-margin-top">
             <div class="navbar row-flex">
      <div class="nav-links">
        <a href="#"> Home </a>
        <a href="#"> About </a>
        <a href="#"> Contact </a>
        <a href="#"> Careers </a>
      </div>

      <input type="text" placeholder="Search..." class="std-input" />
    </div>
        </div>),
      },
     
  ];
  const [showcode, setShowCode] = useState("");
  function click(val) {
    if (showcode===(val)) {
      setShowCode("");
    } else setShowCode(val);
  }
  return (
    <div className="component">
      <ComponentHeader
        compname="Navbar"
        compdesc="A navigation bar form which user can navigate to the application."
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
