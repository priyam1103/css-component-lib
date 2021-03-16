import React, { useState } from "react";
import SubElementHeader from "../SubElementHeader";
import ComponentHeader from "../ComponentHeader";

export default function Table() {
  const data = [
    {
      id: "1",
      name: "Table",
      desc: "Table with three columns",
      excode: `<table>
        <thead>
          <td>Name</td>
          <td>Age</td>
          <td>Number</td>
        </thead>
        <tr>
          <td>Priyam</td>
          <td>22</td>
          <td>9162617035</td>
        </tr>
        <tr>
          <td>Priyam</td>
          <td>22</td>
          <td>9162617035</td>
        </tr>
        <tr>
          <td>Priyam Poddar</td>
          <td>22</td>
          <td>9162617035</td>
        </tr>
      </table>`,
      maincode: (
        <div className="width-90 three-margin-top">
          <table>
            <thead>
              <td>Name</td>
              <td>Age</td>
              <td>Number</td>
            </thead>
            <tr>
              <td>Priyam</td>
              <td>22</td>
              <td>9162617035</td>
            </tr>
            <tr>
              <td>Priyam</td>
              <td>22</td>
              <td>9162617035</td>
            </tr>
            <tr>
              <td>Priyam Poddar</td>
              <td>22</td>
              <td>9162617035</td>
            </tr>
          </table>
        </div>
      ),
    },
    {
      id: "2",
      name: "Table with single line.",
      desc: "Table with only rows have borders.",
      excode: `<table class="single-line-table">
        <thead>
          <td>Name</td>
          <td>Age</td>
          <td>Number</td>
        </thead>
        <tr>
          <td>Priyam</td>
          <td>22</td>
          <td>9162617035</td>
        </tr>
        <tr>
          <td>Priyam</td>
          <td>22</td>
          <td>9162617035</td>
        </tr>
        <tr>
          <td>Priyam Poddar</td>
          <td>22</td>
          <td>9162617035</td>
        </tr>
      </table>`,
      maincode: (
        <div className="width-90 three-margin-top">
          {" "}
          <table class="single-line-table">
            <thead>
              <td>Name</td>
              <td>Age</td>
              <td>Number</td>
            </thead>
            <tr>
              <td>Priyam</td>
              <td>22</td>
              <td>9162617035</td>
            </tr>
            <tr>
              <td>Priyam</td>
              <td>22</td>
              <td>9162617035</td>
            </tr>
            <tr>
              <td>Priyam Poddar</td>
              <td>22</td>
              <td>9162617035</td>
            </tr>
          </table>
        </div>
      ),
    },
    {
      id: "3",
      name: "Table with options.",
      desc: "Table having options to add and remove the fields.",
      excode: `<table>
        <thead>
          <td>Name</td>
          <td>Age</td>
          <td>Number</td>
        </thead>
        <tbody>
          <tr>
            <td>Priyam</td>
            <td>22</td>
            <td>9162617035</td>
          </tr>
          <tr>
            <td>Priyam</td>
            <td>22</td>
            <td>9162617035</td>
          </tr>
          <tr>
            <td>Priyam Poddar</td>
            <td>22</td>
            <td>9162617035</td>
          </tr>
          <tr>
            <td><button class="btn btn-secondary">Remove -</button></td>
            <td></td>
            <td><button class="btn btn-secondary">Add +</button></td>
          </tr>
        </tbody>
      </table>`,
      maincode: (
        <div className="width-90 three-margin-top">
          {" "}
          <table>
            <thead>
              <td>Name</td>
              <td>Age</td>
              <td>Number</td>
            </thead>
            <tbody>
              <tr>
                <td>Priyam</td>
                <td>22</td>
                <td>9162617035</td>
              </tr>
              <tr>
                <td>Priyam</td>
                <td>22</td>
                <td>9162617035</td>
              </tr>
              <tr>
                <td>Priyam Poddar</td>
                <td>22</td>
                <td>9162617035</td>
              </tr>
              <tr>
                <td>
                  <button class="btn btn-secondary">Remove -</button>
                </td>
                <td></td>
                <td>
                  <button class="btn btn-secondary">Add +</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
  ];
  const [showcode, setShowCode] = useState("");
  function click(val) {
    if (showcode===(val)) {
      setShowCode("");
    } else setShowCode(val);
  }
  return (
    <div className="component">
      <ComponentHeader
        compname="Table"
        compdesc="A table displays a collection of data grouped into rows and columns."
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
