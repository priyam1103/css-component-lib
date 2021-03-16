import React, { useState } from "react";
import SubElementHeader from "../SubElementHeader";
import ComponentHeader from "../ComponentHeader";

export default function Grid() {
  const data = [
    {
        id: "1",
        name: "Column Grids",
        desc: "",
        excode: ` <div class="column-grid">
        <div class="item-grid"></div>
        <div class="item-grid"></div>
        <div class="item-grid"></div>
        <div class="item-grid"></div>
        <div class="item-grid"></div>
        <div class="item-grid"></div>
    
     </div>`,
          maincode: (<div className="width-90 three-margin-top">
             <div class="column-grid">
     <div class="item-grid"></div>
     <div class="item-grid"></div>
     <div class="item-grid"></div>
     <div class="item-grid"></div>
     <div class="item-grid"></div>
     <div class="item-grid"></div>
 
  </div>
        </div>),
      },
      {
        id: "2",
        name: "Row Grids",
        desc: "",
        excode: `<div class="row-grid">
        <div class="item-grid"></div>
        <div class="item-grid"></div>
        <div class="item-grid"></div>
        <div class="item-grid"></div>
        <div class="item-grid"></div>
        <div class="item-grid"></div>
    
     </div>`,
        maincode: (<div className="width-90 three-margin-top">  <div class="row-grid">
        <div class="item-grid"></div>
        <div class="item-grid"></div>
        <div class="item-grid"></div>
        <div class="item-grid"></div>
        <div class="item-grid"></div>
        <div class="item-grid"></div>
    
     </div></div>),
      },
  ];
  const [showcode, setShowCode] = useState([]);
  function click(val) {
    if (showcode.includes(val)) {
      setShowCode((prevState) => prevState.splice(showcode.indexOf(val), 1));
    } else setShowCode([...showcode,val]);
  }
  return (
    <div className="component">
      <ComponentHeader
        compname="Grids"
        compdesc="A grid is used to manage rows and columns of the layout."
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
