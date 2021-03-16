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
export default function Form() {
  const data = [
    {
        id: "1",
        name: "Success Alert",
        desc: "",
        excode: `<div class="alert alert-success">
        <p>Success alert</p>
    </div>`,
        maincode: (<div className="width-90 three-margin-top"><div class="alert alert-success">
        <p>Success alert</p>
    </div></div>),
      },
      {
        id: "2",
        name: "Error Alert",
        desc: "",
        excode: `    <div class="alert alert-danger">
        <p>Danger alert</p>
    </div>`,
        maincode: (<div className="width-90 three-margin-top">    <div class="alert alert-danger">
        <p>Danger alert</p>
    </div></div>),
      },
      {
        id: "3",
        name: "Warning Alert",
        desc: "",
        excode: ` <div class="alert alert-warning">
        <p>Warning alert</p>
    </div>`,
        maincode: (<div className="width-90 three-margin-top"> <div class="alert alert-warning">
        <p>Warning alert</p>
    </div></div>),
      },
      {
        id: "4",
        name: "Dismiss Alert",
        desc: "",
        excode: ` <div class="alert alert-dismiss">
        <span class="alert-dismiss-btn">X</span>
        <p>Dismiss alert</p>
    </div>`,
        maincode: (<div className="width-90 three-margin-top">  <div class="alert alert-dismiss">
        <span class="alert-dismiss-btn">X</span>
        <p>Dismiss alert</p>
    </div></div>),
      }
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
        compname="Alert"
        compdesc="A simple message that notifies users about the actions."
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
