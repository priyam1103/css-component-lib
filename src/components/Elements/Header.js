import React, { useState } from "react";
import copy from "copy-to-clipboard";
import { Icon } from "semantic-ui-react";

export default function Header() {
  const [showcode, setShowCode] = useState([]);
  function click(val) {
    if (showcode.includes(val)) {
      setShowCode((prevState) => prevState.splice(prevState.indexOf(val), 1));
    } else setShowCode([...showcode,val]);
  }
  return (
    <div className="component">
      <div className="header">
        <h1 className="name">Headers</h1>
        <p className="description">A header is the first impression of the content.</p>
      </div>
      <div className="border-margin"></div>

      <div className="sub-header">
        <h2 className="name">Types</h2>
      </div>
      <div className="border"></div>
      <div className="sub-element">
        <div className="head">
          <div>
            <h3>Header</h3>
            <p className="description">Different sizes of header.</p>
          </div>
          <div onClick={() => click("1")} ><Icon
          name="code"
          size="large"
          style={{ cursor: "pointer" }}
        /></div>
        </div>
        {showcode.includes("1") && (
          <div class="code-example">
            <div class="header">
              <p>Example</p>
              <p onClick={() => copy(`<h1 class="header">First Header</h1>
<h2 class="header">Second Header</h2>
<h3 class="header">Third Header</h3>
<h4 class="header">Fourth Header</h4>
<h5 class="header">Fifth Header</h5>`)}><Icon
              name="copy"
              size="large"
              style={{ cursor: "pointer" }}
            /></p>
            </div>
            <div class="content">
              <pre>
                <code>{`<h1 class="header">First Header</h1>
<h2 class="header">Second Header</h2>
<h3 class="header">Third Header</h3>
<h4 class="header">Fourth Header</h4>
<h5 class="header">Fifth Header</h5>`}</code>
              </pre>
            </div>
          </div>
        )}

        <div className="width-90">
          <div className="three-margin-top ">
          <h1 class="header">First Header</h1>
<h2 class="header">Second Header</h2>
<h3 class="header">Third Header</h3>
<h4 class="header">Fourth Header</h4>
<h5 class="header">Fifth Header</h5>
          </div>
        </div>
          </div>
          <div className="sub-element">
        <div className="head">
          <div>
            <h3>Centered Header</h3>
            <p className="description">Header aligned in the center , font size in rem .</p>
          </div>
          <div onClick={() => click("2")} ><Icon
          name="code"
          size="large"
          style={{ cursor: "pointer" }}
        /></div>
        </div>
        {showcode.includes("2") && (
          <div class="code-example">
            <div class="header">
              <p>Example</p>
              <p onClick={() => copy(`<p class="header centered-header">Center Aligned Header</p>`)}><Icon
              name="copy"
              size="large"
              style={{ cursor: "pointer" }}
            /></p>
            </div>
            <div class="content">
              <pre>
                <code>{`<p class="header centered-header">Center Aligned Header</p>`}</code>
              </pre>
            </div>
          </div>
        )}

        <div className="width-90">
          <div className="three-margin-top ">
          <p class="header centered-header">Center Aligned Header</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
