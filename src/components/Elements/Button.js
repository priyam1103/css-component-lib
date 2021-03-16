import React, { useState } from "react";
import copy from "copy-to-clipboard";
import SubElementHeader from "../SubElementHeader";
import ComponentHeader from "../ComponentHeader";
export default function Button() {
  const [showcode, setShowCode] = useState([]);
  function click(val) {
    if (showcode.includes(val)) {
      setShowCode((prevState) => prevState.splice(showcode.indexOf(val), 1));
    } else setShowCode((prevState) => prevState.concat(val));
  }
  return (
    <div className="component">
      <ComponentHeader
        compname="Button"
        compdesc="A button indicates a possible user action"
      />
     
      <SubElementHeader
        Name="Button"
        Desc="A standard button."
        eleno="1"
        click={click}
        showcode={showcode}
        excode={`<button class="btn btn-normal">Standard</button>
        <button class="btn btn-normal">Button</button>`}
        maincode={     <div className="width-20">
        <div className="three-margin-top btn-group-horizontal">
          <button class="btn btn-normal">Standard</button>
          <button class="btn btn-normal">Button</button>
        </div>
      </div>}
      />
      {/* <div className="sub-element">
        <div className="head">
          <div>
            <h3>Button</h3>
            <p className="description">A standard button.</p>
          </div>
          <div onClick={() => click("1")}>Code</div>
        </div>
        {showcode.includes("1") && (
          <div class="code-example">
            <div class="header">
              <p>Example</p>
              <p onClick={()=>copy(`<button class="btn btn-normal">Standard</button>
            <button class="btn btn-normal">Button</button>`)}>Copy</p>
            </div>
            <div class="content">
              <pre>
                <code>
                  {`<button class="btn btn-normal">Standard</button>
            <button class="btn btn-normal">Button</button>`}
                </code>
              </pre>
            </div>
          </div>
        )}
        <div className="width-20">
          <div className="three-margin-top btn-group-horizontal">
            <button class="btn btn-normal">Standard</button>
            <button class="btn btn-normal">Button</button>
          </div>
        </div>
      </div> */}

      <div className="sub-element">
        <div className="head">
          <div>
            <h3>Form Buttons</h3>
            <p className="description">
              A button can be demonstrated as different effects.
            </p>
          </div>
          <div onClick={() => click("3")}>Code</div>
        </div>
        {showcode.includes("3") && (
          <div class="code-example">
            <div class="header">
              <p>Example</p>
              <p>Copy</p>
            </div>
            <div class="content">
              <p>{`<button class="btn btn-primary">save</button>
            <button class="btn btn-normal">cancel</button>`}</p>
            </div>
          </div>
        )}

        <div className="width-20">
          <div className="three-margin-top btn-group-horizontal">
            <button class="btn btn-primary">save</button>
            <button class="btn btn-normal">cancel</button>
          </div>
        </div>
      </div>

      <div className="sub-element">
        <div className="head">
          <div>
            <h3>Different standard buttons.</h3>
            <p className="description">
              Every button has there own meaning and colour.
            </p>
          </div>
          <div onClick={() => click("4")}>Code</div>
        </div>
        {showcode.includes("4") && (
          <div class="code-example">
            <div class="header">
              <p>Example</p>
              <p>Copy</p>
            </div>
            <div class="content">
              <pre>
                <code>
          {`<div className="three-margin-top btn-group-horizontal">
            <button class="btn btn-primary">Primary</button>
            <button class="btn btn-secondary">Secondary</button>
            <button class="btn btn-success">Success</button>
            <button class="btn btn-danger">Danger</button>
            <button class="btn btn-warning">Warning</button>
            </div>`}
                </code>
              </pre>
            </div>
          </div>
        )}

        <div className="width-60">
          <div className="three-margin-top btn-group-horizontal">
            <button class="btn btn-primary">Primary</button>
            <button class="btn btn-secondary">Secondary</button>
            <button class="btn btn-success">Success</button>
            <button class="btn btn-danger">Danger</button>
            <button class="btn btn-warning">Warning</button>
          </div>
        </div>
      </div>

      <div className="sub-element">
        <div className="head">
          <div>
            <h3>Large Button</h3>
            <p className="description">Large size button.</p>
          </div>
          <div onClick={() => click("5")}>Code</div>
        </div>
        {showcode.includes("5") && (
          <div class="code-example">
            <div class="header">
              <p>Example</p>
              <p>Copy</p>
            </div>
            <div class="content">
              <p>{` <button class="btn btn-primary btn-lg">Large Button</button>`}</p>
            </div>
          </div>
        )}

        <div className="width-60">
          <div className="three-margin-top">
            <button class="btn btn-primary btn-lg">Large Button</button>
          </div>
        </div>
      </div>
      <div className="sub-element">
        <div className="head">
          <div>
            <h3>Small Button</h3>
            <p className="description">Small size button.</p>
          </div>
          <div onClick={() => click("6")}>Code</div>
        </div>
        {showcode.includes("6") && (
          <div class="code-example">
            <div class="header">
              <p>Example</p>
              <p>Copy</p>
            </div>
            <div class="content">
              <p>{`<button class="btn btn-primary btn-sm">Small Button</button>`}</p>
            </div>
          </div>
        )}

        <div className="width-60">
          <div className="three-margin-top">
            <button class="btn btn-primary btn-sm">Small Button</button>
          </div>
        </div>
      </div>

      <div className="sub-element">
        <div className="head">
          <div>
            <h3>Border effect buttons.</h3>
            <p className="description">
              Different buttons with border effects.
            </p>
          </div>
          <div onClick={() => click("7")}>Code</div>
        </div>
        {showcode.includes("7") && (
          <div class="code-example">
            <div class="header">
              <p>Example</p>
              <p>Copy</p>
            </div>
            <div class="content">
              <p>{`<div className="three-margin-top btn-group-horizontal">
            <button class="btn btn-border-primary">Primary</button>
            <button class="btn btn-border-secondary">Secondary</button>
            <button class="btn btn-border-success">Success</button>
            <button class="btn btn-border-danger">Danger</button>
            <button class="btn btn-border-warning">Warning</button>
            <button class="btn btn-border-normal">Normal</button>
          </div>`}</p>
            </div>
          </div>
        )}

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
      </div>

      <div className="sub-element">
        <div className="head">
          <div>
            <h3>Fluid button.</h3>
            <p className="description">Button that fits in your container.</p>
          </div>
          <div onClick={() => click("8")}>Code</div>
        </div>
        {showcode.includes("8") && (
          <div class="code-example">
            <div class="header">
              <p>Example</p>
              <p>Copy</p>
            </div>
            <div class="content">
              <p>{`<button class="btn btn-primary btn-fluid">Fluid Button</button>`}</p>
            </div>
          </div>
        )}

        <div className="width-80">
          <div className="three-margin-top">
            <button class="btn btn-primary btn-fluid">Fluid Button</button>
          </div>
        </div>
      </div>

      <div className="sub-element">
        <div className="head">
          <div>
            <h3>Option button.</h3>
            <p className="description">Styled option buttons.</p>
          </div>
          <div onClick={() => click("9")}>Code</div>
        </div>
        {showcode.includes("9") && (
          <div class="code-example">
            <div class="header">
              <p>Example</p>
              <p>Copy</p>
            </div>
            <div class="content">
              <p>{` <div class="duo-buttons">
              <button class="btn btn-danger">Cancel</button>
              <div class="btn-or">or</div>
              <button class="btn btn-success">Save</button>
            </div>`}</p>
            </div>
          </div>
        )}

        <div className="width-80">
          <div className="three-margin-top">
            <div class="duo-buttons">
              <button class="btn btn-danger">Cancel</button>
              <div class="btn-or">or</div>
              <button class="btn btn-success">Save</button>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-element">
        <div className="head">
          <div>
            <h3>Positive Button</h3>
            <p className="description">
              Colour of the button should me according to its work. Green is for
              success
            </p>
          </div>
          <div onClick={() => click("10")}>Code</div>
        </div>
        {showcode.includes("10") && (
          <div class="code-example">
            <div class="header">
              <p>Example</p>
              <p>Copy</p>
            </div>
            <div class="content">
              <p>{` <button class="btn btn-success">Positive Button</button>`}</p>
            </div>
          </div>
        )}

        <div className="width-60">
          <div className="three-margin-top">
            <button class="btn btn-success">Positive Button</button>
          </div>
        </div>
      </div>
      <div className="sub-element">
        <div className="head">
          <div>
            <h3>Negative Button</h3>
            <p className="description">
              Colour of the button should me according to its work. Red is for
              error.
            </p>
          </div>
          <div onClick={() => click("11")}>Code</div>
        </div>
        {showcode.includes("11") && (
          <div class="code-example">
            <div class="header">
              <p>Example</p>
              <p>Copy</p>
            </div>
            <div class="content">
              <p>{`            <button class="btn btn-danger">Negative Button</button>
`}</p>
            </div>
          </div>
        )}

        <div className="width-60">
          <div className="three-margin-top">
            <button class="btn btn-danger">Negative Button</button>
          </div>
        </div>
      </div>

      <div className="sub-element">
        <div className="head">
          <div>
            <h3>Horizontal Buttons</h3>
            <p className="description">Buttons aligned horizontally.</p>
          </div>
          <div onClick={() => click("12")}>Code</div>
        </div>
        {showcode.includes("12") && (
          <div class="code-example">
            <div class="header">
              <p>Example</p>
              <p>Copy</p>
            </div>
            <div class="content">
              <p>{`<div class="three-margin-top btn-group-horizontal">
            <button class="btn btn-normal">Normal</button>
            <button class="btn btn-normal">Normal</button>
          </div>`}</p>
            </div>
          </div>
        )}

        <div className="width-20">
          <div class="three-margin-top btn-group-horizontal">
            <button class="btn btn-normal">Normal</button>
            <button class="btn btn-normal">Normal</button>
          </div>
        </div>
      </div>

      <div className="sub-element">
        <div className="head">
          <div>
            <h3>Vertical Buttons</h3>
            <p className="description">Buttons aligned Vertically.</p>
          </div>
          <div onClick={() => click("13")}>Code</div>
        </div>
        {showcode.includes("13") && (
          <div class="code-example">
            <div class="header">
              <p>Example</p>
              <p>Copy</p>
            </div>
            <div class="content">
              <p>{`<div class="three-margin-top btn-group-vertical">
            <button class="btn btn-normal">Normal</button>
            <button class="btn btn-normal">Normal</button>
            <button class="btn btn-normal">Normal</button>
            <button class="btn btn-normal">Normal</button>
          </div>`}</p>
            </div>
          </div>
        )}

        <div className="">
          <div class="three-margin-top btn-group-vertical">
            <button class="btn btn-normal">Normal</button>
            <button class="btn btn-normal">Normal</button>
            <button class="btn btn-normal">Normal</button>
            <button class="btn btn-normal">Normal</button>
          </div>
        </div>
      </div>

      <div className="sub-element">
        <div className="head">
          <div>
            <h3>Resize Buttons</h3>
            <p className="description">You can resize any button using.</p>
          </div>
          <div onClick={() => click("14")}>Code</div>
        </div>
        {showcode.includes("14") && (
          <div class="code-example">
            <div class="header">
              <p>Example</p>
              <p>Copy</p>
            </div>
            <div class="content">
              <p>{` <button class="btn btn-normal btn-lg">Large ( btn-lg )</button>
            <button class="btn btn-normal btn-sm">
              Small ( btn-sm )
            </button>`}</p>
            </div>
          </div>
        )}

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
      </div>

      {/* <button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-success">Success</button>
    <button class="btn btn-danger">Danger</button>
    <button class="btn btn-warning">Warning</button>
 
    <a role="button" class="btn btn-primary" href="#">Link</a>
    <input type="button" class="btn btn-success" value="Success"/>
    <input type="submit" class="btn btn-primary" value="submit"/>

    <button class="btn btn-primary btn-lg">Large Button</button>
    <button class="btn btn-primary btn-sm">Small Button</button> */}
    </div>
  );
}
