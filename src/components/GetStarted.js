import React from "react";
import { Icon } from "semantic-ui-react";
import copy from "copy-to-clipboard";
import { Link } from "react-router-dom";
export default function GetStarted() {
  return (
    <div className="component">
      <p class="header centered-header">Get Started</p>

      <div>
        <h2>Install</h2>

        <div className="border-margin"></div>
        <p style={{ fontSize: "1.5rem" }}>
          Dusky UI provides components with themes as CSS stylesheets. Use the
          classes and html that suits your needs.
        </p>
        <div class="code-example">
          <div class="header">
            <p>Example</p>
            <Icon
              onClick={() =>
                copy(
                  `<link rel="stylesheet" href="https://css-component-lib.netlify.app/styles.css"/>`
                )
              }
              name="copy"
              size="large"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div class="content">
            <pre>
              <code>{`    <link rel="stylesheet" href="https://css-component-lib.netlify.app/styles.css"/>
`}</code>
            </pre>
          </div>
        </div>
        <h2>Example</h2>

        <div className="border-margin"></div>
        <p style={{ fontSize: "1.5rem" }}>
          Dusky UI provides components with themes as CSS stylesheets. Use the
          classes and html that suits your needs.
        </p>
        <ul class="ul-lists">
          <li>
            <Link to="/buttons">Button</Link>
          </li>
          <li>
            <Link to="/cards">Card</Link>
          </li>
          <li>
            <Link to="/lists">List</Link>
          </li>
          <li>
            <Link to="/inputs">Input</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
