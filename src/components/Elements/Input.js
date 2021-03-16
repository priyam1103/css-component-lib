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
        <h1 className="name">Input</h1>
        <p className="description">A input is used to input from user.</p>
      </div>
      <div className="border-margin"></div>

      <div className="sub-header">
        <h2 className="name">Types</h2>
      </div>
      <div className="border"></div>
      <div className="sub-element">
        <div className="head">
          <div>
            <h3>Input</h3>
            <p className="description">Standard input.</p>
          </div>
          <div onClick={() => click("1")}>
            <Icon name="code" size="large" style={{ cursor: "pointer" }} />
          </div>
        </div>
        {showcode.includes("1") && (
          <div class="code-example">
            <div class="header">
              <p>Example</p>
              <p
                onClick={() =>
                  copy(`<input type="text" placeholder="Search..." class="std-input"/>
`)
                }
              >
                <Icon
              name="copy"
              size="large"
              style={{ cursor: "pointer" }}
            />
              </p>
            </div>
            <div class="content">
              <pre>
                <code>{`<input type="text" placeholder="Search..." class="std-input"/>
`}</code>
              </pre>
            </div>
          </div>
        )}

        <div className="width-90 three-margin-top">
          <input type="text" placeholder="Search..." class="std-input" />
        </div>
      </div>

      <div className="sub-element">
        <div className="head">
          <div>
            <h3>Input</h3>
            <p className="description">Standard input with label.</p>
          </div>
          <div onClick={() => click("8")}>
            <Icon name="code" size="large" style={{ cursor: "pointer" }} />
          </div>
        </div>
        {showcode.includes("8") && (
          <div class="code-example">
            <div class="header">
              <p>Example</p>
              <p
                onClick={() =>
                  copy(` <div class="ip-label">
                  <label class="nm-label">Enter a value</label>
                  <input type="text" placeholder="Search..." class="std-input"/>
                  <span class="error-label">Please enter a value</span>
                  </div>`)
                }
              >
                <Icon
              name="copy"
              size="large"
              style={{ cursor: "pointer" }}
            />
              </p>
            </div>
            <div class="content">
              <pre>
                <code>{` <div class="ip-label">
<label class="nm-label">Enter a value</label>
<input type="text" placeholder="Search..." class="std-input"/>
<span class="error-label">Please enter a value</span>
</div>`}</code>
              </pre>
            </div>
          </div>
        )}

        <div className="width-90 three-margin-top">
          <div class="ip-label">
            <label class="nm-label">Enter a value</label>
            <input type="text" placeholder="Search..." class="std-input" />
            <span class="error-label">Please enter a value</span>
          </div>{" "}
        </div>
      </div>

      <div className="sub-element">
        <div className="head">
          <div>
            <h3>Focused Input</h3>
            <p className="description">Input in a focused state.</p>
          </div>
          <div onClick={() => click("2")}>
            <Icon name="code" size="large" style={{ cursor: "pointer" }} />
          </div>
        </div>
        {showcode.includes("2") && (
          <div class="code-example">
            <div class="header">
              <p>Example</p>
              <p
                onClick={() =>
                  copy(
                    `<div class="ip-label">
                    <label class="nm-label">Enter a value</label>
                    <input type="text" placeholder="Search..." class="std-input focused"/>
                    <span class="error-label">Please enter a value</span>
                
                </div>`
                  )
                }
              >
                <Icon
              name="copy"
              size="large"
              style={{ cursor: "pointer" }}
            />
              </p>
            </div>
            <div class="content">
              <pre>
                <code>{`<div class="ip-label">
    <label class="nm-label">Enter a value</label>
    <input type="text" placeholder="Search..." class="std-input focused"/>
    <span class="error-label">Please enter a value</span>

</div>`}</code>
              </pre>
            </div>
          </div>
        )}

        <div className="width-90 three-margin-top">
          <div class="ip-label">
            <label class="nm-label">Enter a value</label>
            <input
              type="text"
              placeholder="Search..."
              class="std-input focused"
            />
            <span class="error-label">Please enter a value</span>
          </div>
        </div>
      </div>

      <div className="sub-element">
        <div className="head">
          <div>
            <h3>Input with a loader</h3>
            <p className="description">
              Input which can show the loading state.
            </p>
          </div>
          <div onClick={() => click("3")}>
            <Icon name="code" size="large" style={{ cursor: "pointer" }} />
          </div>
        </div>
        {showcode.includes("3") && (
          <div class="code-example">
            <div class="header">
              <p>Example</p>
              <p
                onClick={() =>
                  copy(`<div class="ip-label">
                  <label class="nm-label">Enter a value</label>
                  <div class="icon-input">
                      <input type="text" placeholder="Search..." class="input-loader"/>
                      <div class="sm-loader"></div>
                  </div>
                  <span class="error-label">Please enter a value</span>
              </div>`)
                }
              >
                <Icon
              name="copy"
              size="large"
              style={{ cursor: "pointer" }}
            />
              </p>
            </div>
            <div class="content">
              <pre>
                <code>{`<div class="ip-label">
    <label class="nm-label">Enter a value</label>
    <div class="icon-input">
        <input type="text" placeholder="Search..." class="input-loader"/>
        <div class="sm-loader"></div>
    </div>
    <span class="error-label">Please enter a value</span>
</div>`}</code>
              </pre>
            </div>
          </div>
        )}

        <div className="width-90 three-margin-top">
          <div class="ip-label">
            <label class="nm-label">Enter a value</label>
            <div class="icon-input">
              <input type="text" placeholder="Search..." class="input-loader" />
              <div class="ip-loader"></div>
            </div>
            <span class="error-label">Please enter a value</span>
          </div>
        </div>
      </div>

      <div className="sub-element">
        <div className="head">
          <div>
            <h3>Error in input</h3>
            <p className="description">
              Input which throws an error due to wrong input.
            </p>
          </div>
          <div onClick={() => click("4")}>
            <Icon name="code" size="large" style={{ cursor: "pointer" }} />
          </div>
        </div>
        {showcode.includes("4") && (
          <div class="code-example">
            <div class="header">
              <p>Example</p>
              <p
                onClick={() =>
                  copy(`   <div class="ip-label">
                  <label class="nm-label">Enter a value</label>
                  <input type="text" placeholder="Search..." class="std-input error-input"/>
                  <span class="error-label">Please enter a value</span>
                  </div>
`)
                }
              >
                <Icon
              name="copy"
              size="large"
              style={{ cursor: "pointer" }}
            />
              </p>
            </div>
            <div class="content">
              <pre>
                <code>{`   <div class="ip-label">
<label class="nm-label">Enter a value</label>
<input type="text" placeholder="Search..." class="std-input error-input"/>
<span class="error-label">Please enter a value</span>
</div>`}</code>
              </pre>
            </div>
          </div>
        )}

        <div className="width-90 three-margin-top">
          <div class="ip-label">
            <label class="nm-label">Enter a value</label>
            <input
              type="text"
              placeholder="Search..."
              class="std-input error-input"
            />
            <span class="error-label">Please enter a value</span>
          </div>
        </div>
      </div>

      <div className="sub-element">
        <div className="head">
          <div>
            <h3>Disabled input</h3>
            <p className="description">Input which is disabled for the user.</p>
          </div>
          <div onClick={() => click("5")}>
            <Icon name="code" size="large" style={{ cursor: "pointer" }} />
          </div>
        </div>
        {showcode.includes("5") && (
          <div class="code-example">
            <div class="header">
              <p>Example</p>
              <p
                onClick={() =>
                  copy(`<input disabled type="text" placeholder="Search..." class="std-input"/>
                  `)
                }
              >
                <Icon
              name="copy"
              size="large"
              style={{ cursor: "pointer" }}
            />
              </p>
            </div>
            <div class="content">
              <pre>
                <code>{`<input disabled type="text" placeholder="Search..." class="std-input"/>
`}</code>
              </pre>
            </div>
          </div>
        )}

        <div className="width-90 three-margin-top">
          <input
            disabled
            type="text"
            placeholder="Search..."
            class="std-input"
          />
        </div>
      </div>

      <div className="sub-element">
        <div className="head">
          <div>
            <h3>Labeled input</h3>
            <p className="description">Input with suffix label.</p>
          </div>
          <div onClick={() => click("6")}>
            <Icon name="code" size="large" style={{ cursor: "pointer" }} />
          </div>
        </div>
        {showcode.includes("6") && (
          <div class="code-example">
            <div class="header">
              <p>Example</p>
              <p
                onClick={() =>
                  copy(`<div class="labeled-input labeled-input-right">
                  <input type="text" placeholder="Search..." class="input-loader"/>
                  <div class="label">http://</div>
              </div>
                  `)
                }
              >
                <Icon
              name="copy"
              size="large"
              style={{ cursor: "pointer" }}
            />
              </p>
            </div>
            <div class="content">
              <pre>
                <code>{`<div class="labeled-input labeled-input-right">
    <input type="text" placeholder="Search..." class="input-loader"/>
    <div class="label">http://</div>
</div>
`}</code>
              </pre>
            </div>
          </div>
        )}

        <div className="width-90 three-margin-top">
          <div class="labeled-input labeled-input-right">
            <input type="text" placeholder="Search..." class="input-loader" />
            <div class="label">http://</div>
          </div>
        </div>
      </div>
      <div className="sub-element">
        <div className="head">
          <div>
            <h3>Labeled input</h3>
            <p className="description">Input with prefix label.</p>
          </div>
          <div onClick={() => click("7")}>
            <Icon name="code" size="large" style={{ cursor: "pointer" }} />
          </div>
        </div>
        {showcode.includes("7") && (
          <div class="code-example">
            <div class="header">
              <p>Example</p>
              <p
                onClick={() =>
                  copy(`<div class="labeled-input labeled-input-left">
                  <input type="text" placeholder="Search..." class="input-loader"/>
                  <div class="label">http://</div>
              </div>
                  `)
                }
              >
                <Icon
              name="copy"
              size="large"
              style={{ cursor: "pointer" }}
            />
              </p>
            </div>
            <div class="content">
              <pre>
                <code>{`<div class="labeled-input labeled-input-left">
    <input type="text" placeholder="Search..." class="input-loader"/>
    <div class="label">http://</div>
</div>
`}</code>
              </pre>
            </div>
          </div>
        )}

        <div className="width-90 three-margin-top">
          <div class="labeled-input labeled-input-left">
            <input type="text" placeholder="Search..." class="input-loader" />
            <div class="label">http://</div>
          </div>
        </div>
      </div>
    </div>
  );
}
