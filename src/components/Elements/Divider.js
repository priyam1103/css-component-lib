import React, { useState } from "react";
import copy from "copy-to-clipboard";

export default function Divider() {
  const [showcode, setShowCode] = useState([]);
  function click(val) {
    if (showcode.includes(val)) {
      setShowCode((prevState) => prevState.splice(showcode.indexOf(val), 1));
    } else setShowCode((prevState) => prevState.concat(val));
  }
  return (
    <div className="component">
      <div className="header">
        <h1 className="name">Dividers</h1>
        <p className="description">A divider divides contents into groups.</p>
      </div>
      <div className="border-margin"></div>

      <div className="sub-header">
        <h2 className="name">Types</h2>
      </div>
      <div className="border"></div>
      <div className="sub-element">
        <div className="head">
          <div>
            <h3>Divider</h3>
            <p className="description">A standard divider.</p>
          </div>
          <div onClick={() => click("1")}>Code</div>
        </div>
        {showcode.includes("1") && (
          <div class="code-example">
            <div class="header">
              <p>Example</p>
              <p onClick={() => copy(` <div class="divider"></div>`)}>Copy</p>
            </div>
            <div class="content">
              <pre>
                <code>{` <div class="divider"></div>`}</code>
              </pre>
            </div>
          </div>
        )}

        <div className="width-90">
          <div className="three-margin-top ">
            <div class="divider"></div>
          </div>
        </div>
      </div>
      <div className="sub-element">
        <div className="head">
          <div>
            <h3>Text Divider</h3>
            <p className="description">A Horizontal Text divider.</p>
          </div>
          <div onClick={() => click("2")}>Code</div>
        </div>
        {showcode.includes("2") && (
          <div class="code-example">
            <div class="header">
              <p>Example</p>
              <p
                onClick={() =>
                  copy(`<div class="content-col">
              <div class="item"></div>
              <div class="item"></div>
              <div class="text-div">AND</div>
            </div>`)
                }
              >
                Copy
              </p>
            </div>
            <div class="content">
              <pre>
                <code>
                  {` <div class="content-col">
              <div class="item"></div>
              <div class="item"></div>
              <div class="text-div">AND</div>
            </div>`}
                </code>
              </pre>
            </div>
          </div>
        )}
        <div className="width-90">
          <div className="three-margin-top ">
            <div class="content-col">
              <div class="item"></div>
              <div class="item"></div>
              <div class="text-div">AND</div>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-element">
        <div className="head">
          <div>
            <h3>Text Divider</h3>
            <p className="description">A Vertical Text divider.</p>
          </div>
          <div onClick={() => click("3")}>Code</div>
        </div>
        {showcode.includes("3") && (
          <div class="code-example">
            <div class="header">
              <p>Example</p>
              <p
                onClick={() =>
                  copy(` <div class="content-row">
              <div class="item"></div>
              <div class="item"></div>
              <div class="text-div">OR</div>
            </div>`)
                }
              >
                Copy
              </p>
            </div>
            <div class="content">
              <pre>
                <code>
                  {`  <div class="content-row">
              <div class="item"></div>
              <div class="item"></div>
              <div class="text-div">OR</div>
            </div>`}
                </code>
              </pre>
            </div>
          </div>
        )}
        <div className="width-90">
          <div className="three-margin-top">
            <div class="content-row">
              <div class="item"></div>
              <div class="item"></div>
              <div class="text-div">OR</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
