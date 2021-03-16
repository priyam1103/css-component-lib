import React, { useState } from "react";
import SubElementHeader from "../SubElementHeader";
import ComponentHeader from "../ComponentHeader";
export default function Button() {
  const [showcode, setShowCode] = useState([]);
  function click(val) {
    if (showcode.includes(val)) {
      setShowCode((prevState) => prevState.splice(showcode.indexOf(val), 1));
    } else setShowCode((prevState) => prevState.concat(val));
  }
  const data = [
    {
      name: "Button",
      desc: "A button indicates a possible user action",
      excode: `<button class="btn btn-normal">Standard</button>
      <button class="btn btn-normal">Button</button>`,
      maincode: (
        <div className="width-20">
          <div className="three-margin-top btn-group-horizontal">
            <button class="btn btn-normal">Standard</button>
            <button class="btn btn-normal">Button</button>
          </div>
        </div>
      ),
    },
    {
      name: "Form Buttons",
      desc: "A button can be demonstrated as different effects.",
      excode: `<button class="btn btn-primary">save</button>
      <button class="btn btn-normal">cancel</button> `,
      maincode: (
        <div className="width-20">
          <div className="three-margin-top btn-group-horizontal">
            <button class="btn btn-primary">save</button>
            <button class="btn btn-normal">cancel</button>
          </div>
        </div>
      ),
    },
    {
      name: "Different standard buttons.",
      desc: "Every button has there own meaning and colour.",
      excode: `<div className="three-margin-top btn-group-horizontal">
      <button class="btn btn-primary">Primary</button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-success">Success</button>
      <button class="btn btn-danger">Danger</button>
      <button class="btn btn-warning">Warning</button>
      </div>`,
      maincode: (
        <div className="width-60">
          <div className="three-margin-top btn-group-horizontal">
            <button class="btn btn-primary">Primary</button>
            <button class="btn btn-secondary">Secondary</button>
            <button class="btn btn-success">Success</button>
            <button class="btn btn-danger">Danger</button>
            <button class="btn btn-warning">Warning</button>
          </div>
        </div>
      ),
    },
    {
      name: "Large Button",
      desc: "Large size button.",
      excode: `<button class="btn btn-primary btn-lg">Large Button</button>`,
      maincode: (
        <div className="width-60">
          <div className="three-margin-top">
            <button class="btn btn-primary btn-sm">Small Button</button>
          </div>
        </div>
      ),
    },
    {
      name: "Small Button",
      desc: "Small size button.",
      excode: `<button class="btn btn-primary btn-sm">Small Button</button>`,
      maincode: (
        <div className="three-margin-top">
          <button class="btn btn-primary btn-sm">Small Button</button>
        </div>
      ),
    },
    {
      name: "Border effect buttons.",
      desc: "Different buttons with border effects.",
      excode: `<div className="three-margin-top btn-group-horizontal">
      <button class="btn btn-border-primary">Primary</button>
      <button class="btn btn-border-secondary">Secondary</button>
      <button class="btn btn-border-success">Success</button>
      <button class="btn btn-border-danger">Danger</button>
      <button class="btn btn-border-warning">Warning</button>
      <button class="btn btn-border-normal">Normal</button>
    </div>`,
      maincode: (
        <div className="width-80">
          <div className="three-margin-top btn-group-horizontal">
            <button class="btn btn-border-primary">Primary</button>
            <button class="btn btn-border-secondary">Secondary</button>
            <button class="btn btn-border-success">Success</button>
            <button class="btn btn-border-danger">Danger</button>
            <button class="btn btn-border-warning">Warning</button>
            <button class="btn btn-border-normal">Normal</button>
          </div>
        </div>
      ),
    },
    {
      name: "Fluid button.",
      desc: "Button that fits in your container.",
      excode: `<button class="btn btn-primary btn-fluid">Fluid Button</button>`,
      maincode: (
        <div className="width-80">
          <div className="three-margin-top">
            <button class="btn btn-primary btn-fluid">Fluid Button</button>
          </div>
        </div>
      ),
    },
    {
      name: "Option button.",
      desc: "Styled option buttons.",
      excode: ` <div class="duo-buttons">
      <button class="btn btn-danger">Cancel</button>
      <div class="btn-or">or</div>
      <button class="btn btn-success">Save</button>
    </div>`,
      maincode: (
        <div className="width-80">
          <div className="three-margin-top">
            <div class="duo-buttons">
              <button class="btn btn-danger">Cancel</button>
              <div class="btn-or">or</div>
              <button class="btn btn-success">Save</button>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Positive Button",
      desc:
        " Colour of the button should me according to its work. Green is for success.",
      excode: `<button class="btn btn-success">Positive Button</button>`,
      maincode: (
        <div className="width-60">
          <div className="three-margin-top">
            <button class="btn btn-success">Positive Button</button>
          </div>
        </div>
      ),
    },
    {
      name: "Negative Button",
      desc:
        " Colour of the button should me according to its work. Red is for error.",
      excode: `  <button class="btn btn-danger">Negative Button</button>`,
      maincode: (
        <div className="width-60">
          <div className="three-margin-top">
            <button class="btn btn-danger">Negative Button</button>
          </div>
        </div>
      ),
    },
    {
      name: "Horizontal Buttons",
      desc: "Buttons aligned horizontally.",
      excode: `<div class="three-margin-top btn-group-horizontal">
      <button class="btn btn-normal">Normal</button>
      <button class="btn btn-normal">Normal</button>
    </div>`,
      maincode: (
        <div className="width-20">
          <div class="three-margin-top btn-group-horizontal">
            <button class="btn btn-normal">Normal</button>
            <button class="btn btn-normal">Normal</button>
          </div>
        </div>
      ),
    },
    {
      name: "Vertical Buttons",
      desc: "Buttons aligned Vertically.",
      excode: `<div class="three-margin-top btn-group-vertical">
      <button class="btn btn-normal">Normal</button>
      <button class="btn btn-normal">Normal</button>
      <button class="btn btn-normal">Normal</button>
      <button class="btn btn-normal">Normal</button>
    </div> `,
      maincode: (
        <div className="">
          <div class="three-margin-top btn-group-vertical">
            <button class="btn btn-normal">Normal</button>
            <button class="btn btn-normal">Normal</button>
            <button class="btn btn-normal">Normal</button>
            <button class="btn btn-normal">Normal</button>
          </div>
        </div>
      ),
    },
    {
      name: "Resize Buttons",
      desc: "You can resize any button using.",
      excode: `<button class="btn btn-normal btn-lg">Large ( btn-lg )</button>
      <button class="btn btn-normal btn-sm">
        Small ( btn-sm )
      </button>`,
      maincode: (
        <div className="width-60">
          <div className="three-margin-top">
            <button class="btn btn-normal btn-lg">Large ( btn-lg )</button>
            <button
              class="btn btn-normal btn-sm"
              style={{ marginLeft: "1rem" }}
            >
              Small ( btn-sm )
            </button>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="component">
      <ComponentHeader
        compname="Button"
        compdesc="A button indicates a possible user action"
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
