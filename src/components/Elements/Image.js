/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import copy from "copy-to-clipboard";
import { Icon } from "semantic-ui-react";

export default function Image() {
  const [showcode, setShowCode] = useState([]);
  function click(val) {
    if (showcode.includes(val)) {
      setShowCode((prevState) => prevState.splice(showcode.indexOf(val), 1));
    } else setShowCode([...showcode,val]);
  }
  return (
    <div className="component">
      <div className="header">
        <h1 className="name">Image</h1>
        <p className="description">A graphical representation.</p>
      </div>
      <div className="border-margin"></div>

      <div className="sub-header">
        <h2 className="name">Types</h2>
      </div>
      <div className="border"></div>
      <div className="sub-element">
        <div className="head">
          <div>
            <h3>Images</h3>
            <p className="description">Different sizes of Images.</p>
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
              <p
                onClick={() =>
                  copy(`<img className="small-img" src="https://dummyimage.com/600x400/000000/fff&text=Small-Image"/>
<img className="medium-img" src="https://dummyimage.com/600x400/000000/fff&text=Medium-Image"/>
<img className="large-img" src="https://dummyimage.com/600x400/000000/fff&text=Large-Image"/>`)
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
                <code>{`<img className="small-img" src="https://dummyimage.com/600x400/000000/fff&text=Small-Image"/>
<img className="medium-img" src="https://dummyimage.com/600x400/000000/fff&text=Medium-Image"/>
<img className="large-img" src="https://dummyimage.com/600x400/000000/fff&text=Large-Image"/>`}</code>
              </pre>
            </div>
          </div>
        )}

        <div className="width-90 height-90">
          <div className="three-margin-top btn-group-vertical">
            <img
              className="small-img"
              src="https://dummyimage.com/600x400/000000/fff&text=Small-Image"
            />
            <img
              className="medium-img"
              src="https://dummyimage.com/600x400/000000/fff&text=Medium-Image"
            />
            <img
              className="large-img"
              src="https://dummyimage.com/600x400/000000/fff&text=Large-Image"
            />
          </div>
        </div>
      </div>

      <div className="sub-element">
        <div className="head">
          <div>
            <h3>Images</h3>
            <p className="description">
              Different sizes of Images controlled by parent element.
            </p>
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
              <p
                onClick={() =>
                  copy(`<img className="small-img" src="https://dummyimage.com/600x400/000000/fff&text=Small-Image"/>
<img className="medium-img" src="https://dummyimage.com/600x400/000000/fff&text=Medium-Image"/>
<img className="large-img" src="https://dummyimage.com/600x400/000000/fff&text=Large-Image"/>`)
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
                <code>{`<div class="small-img">
                            <img src="./dummy.jpg"/>
                        </div>
                        <div class="large-img">
                            <img src="./dummy.jpg"/>
                        </div>`}</code>
              </pre>
            </div>
          </div>
        )}

        <div className="width-90 height-90">
          <div className="three-margin-top btn-group-vertical">
            <div class="small-img">
              <img src="./dummy.jpg" />
            </div>

            <div class="large-img">
              <img src="./dummy.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div className="sub-element">
        <div className="head">
          <div>
            <h3>Fluid image</h3>
            <p className="description">
              Image will be have width and height same as parent element.
            </p>
          </div>
          <div onClick={() => click("3")} ><Icon
          name="code"
          size="large"
          style={{ cursor: "pointer" }}
        /></div>
        </div>
        {showcode.includes("3") && (
          <div class="code-example">
            <div class="header">
              <p>Example</p>
              <p
                onClick={() =>
                  copy(`<div className="width-90 height-300px">
                  <img class="fluid-img" src="./dummy.jpg" />
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
                <code>{`<div className="width-90 height-300px">
            <img class="fluid-img" src="./dummy.jpg" />
          </div>`}</code>
              </pre>
            </div>
          </div>
        )}

        <div className="three-margin-top ">
          <div className="width-90 height-300px">
            <img class="fluid-img" src="./dummy.jpg" />
          </div>
        </div>
          </div>
          
          <div className="sub-element">
        <div className="head">
          <div>
            <h3>Circular image</h3>
            <p className="description">
              Image will be circular.
            </p>
          </div>
          <div onClick={() => click("4")} ><Icon
          name="code"
          size="large"
          style={{ cursor: "pointer" }}
        /></div>
        </div>
        {showcode.includes("4") && (
          <div class="code-example">
            <div class="header">
              <p>Example</p>
              <p
                onClick={() =>
                  copy(`<img class="medium-img circular-img" src="https://dummyimage.com/600x400/000000/fff&text=Circular-Image"/>
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
                <code>{`<img class="medium-img circular-img" src="https://dummyimage.com/600x400/000000/fff&text=Circular-Image"/>
`}</code>
              </pre>
            </div>
          </div>
        )}

        <div className="three-margin-top ">
        <img class="medium-img circular-img" src="https://dummyimage.com/600x400/000000/fff&text=Circular-Image"/>

        </div>
      </div>
    </div>
  );
}
