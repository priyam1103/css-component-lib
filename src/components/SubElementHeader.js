import React from "react";
import copy from "copy-to-clipboard";
import { Icon } from "semantic-ui-react";

export default function SubElementHeader({
  Name,
  Desc,
  eleno,
  click,
  showcode,
  excode,
  maincode,
}) {
  return (
    <div className="sub-element">
      <div className="head">
        <div>
          <h3>{Name}</h3>
          <p className="description">{Desc}</p>
        </div>
        <Icon
          onClick={() => click(eleno)}
          name="code"
          size="large"
          style={{ cursor: "pointer" }}
        />
      </div>
      {showcode===(eleno) && (
        <div class="code-example">
          <div class="header">
            <p>Example</p>
            <Icon
              onClick={() => copy(`${excode}`)}
              name="copy"
              size="large"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div class="content">
            <pre>
              <code>{`${excode}`}</code>
            </pre>
          </div>
        </div>
      )}
      {maincode}
    </div>
  );
}
