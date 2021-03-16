import React, { useState } from "react";
import SubElementHeader from "../SubElementHeader";
import ComponentHeader from "../ComponentHeader";
export default function Divider() {
  const [showcode, setShowCode] = useState([]);
  function click(val) {
    if (showcode.includes(val)) {
      setShowCode((prevState) => prevState.splice(showcode.indexOf(val), 1));
    } else setShowCode((prevState) => prevState.concat(val));
  }
  const data = [
    {
      name: "Divider",
      desc: "A standard divider.",
      excode: `<div class="divider"></div>`,
      maincode: (
        <div className="width-90">
          <div className="three-margin-top ">
            <div class="divider"></div>
          </div>
        </div>
      ),
    },
    {
      name: "Text Divider",
      desc: "A Horizontal Text divider.",
      excode: `<div class="content-col">
      <div class="item"></div>
      <div class="item"></div>
      <div class="text-div">AND</div>
    </div>`,
      maincode: (
        <div className="width-90">
        <div className="three-margin-top ">
          <div class="content-col">
            <div class="item"></div>
            <div class="item"></div>
            <div class="text-div">AND</div>
          </div>
        </div>
      </div>
      )
    },{
      name: "Text Divider",
      desc: "A Vertical Text divider.",
      excode: ` <div class="content-row">
      <div class="item"></div>
      <div class="item"></div>
      <div class="text-div">OR</div>
    </div>`,
      maincode: (
        <div className="width-90">
        <div className="three-margin-top">
          <div class="content-row">
            <div class="item"></div>
            <div class="item"></div>
            <div class="text-div">OR</div>
          </div>
        </div>
      </div>
    
      )
    }]
  return (
    <div className="component">
        <ComponentHeader
        compname="Dividers"
        compdesc="A divider divides contents into groups."
      />

      {data.map((item, index) => (
        <SubElementHeader
          Name={item.name}
          Desc={item.desc}
          eleno={(index + 1).toString()}
          click={click}
          showcode={showcode}
          excode={item.excode}
          maincode={item.maincode}
        />
      ))}
     
    
     
      
    </div>
  );
}
