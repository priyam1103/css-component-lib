/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import SubElementHeader from "../SubElementHeader";
import ComponentHeader from "../ComponentHeader";

export default function List() {
  const data = [
    {
      id: "1",
      name: "Detailed list.",
      desc: "A list of data with details",
      excode: ` 
            <ul class="list-box detailed">
                <li>
                       <div class="row-flex">
                        <h3>Notification heading</h3>
                        <span>3 days ago</span>
                    </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>And some small print.</span>
                    
                </li>
                <li>
                    <div class="row-flex">
                     <h3>Notification heading</h3>
                     <span>3 days ago</span>
                 </div>
                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                     <span>And some small print.</span>
                 
             </li>
             <li>
                <div class="row-flex">
                 <h3>Notification heading</h3>
                 <span>3 days ago</span>
             </div>
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                 <span>And some small print.</span>
             
         </li>
         <li>
            <div class="row-flex">
             <h3>Notification heading</h3>
             <span>3 days ago</span>
         </div>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
             <span>And some small print.</span>
         
        </li>
            </ul>
    `,
      maincode: (
        <div className="width-90 three-margin-top">
          <ul class="list-box detailed">
            <li>
              <div class="row-flex">
                <h3>Notification heading</h3>
                <span>3 days ago</span>
              </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>And some small print.</span>
            </li>
            <li>
              <div class="row-flex">
                <h3>Notification heading</h3>
                <span>3 days ago</span>
              </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>And some small print.</span>
            </li>
            <li>
              <div class="row-flex">
                <h3>Notification heading</h3>
                <span>3 days ago</span>
              </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>And some small print.</span>
            </li>
            <li>
              <div class="row-flex">
                <h3>Notification heading</h3>
                <span>3 days ago</span>
              </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>And some small print.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "2",
      name: "Standard list.",
      desc: "A list of data with border",
      excode: ` <ul class="list-box">
            <li>
                Buy Milk
            </li>
            <li>
                Go to park
            </li>
            <li>
                Get some drinks for tonight
            </li>
            <li>
                Doctor appointment
            </li>
        </ul>
    `,
      maincode: (
        <div className="width-90 three-margin-top">
          <ul class="list-box">
            <li>Buy Milk</li>
            <li>Go to park</li>
            <li>Get some drinks for tonight</li>
            <li>Doctor appointment</li>
          </ul>
        </div>
      ),
    },
    {
      id: "3",
      name: "Unordered lists",
      desc: "List with bullets",
      excode: `<ul class="ul-lists">
    <li>Bread</li>
    <li>Milk</li>
    <li>Grocceries
    <ul>
        <li>Oil</li>
        <li>Wheat</li>
        <li>Rice</li>
    </ul>
</li>
</ul>`,
      maincode: (
        <div className="width-90 three-margin-top">
          <ul class="ul-lists">
            <li>Bread</li>
            <li>Milk</li>
            <li>
              Grocceries
              <ul>
                <li>Oil</li>
                <li>Wheat</li>
                <li>Rice</li>
              </ul>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "4",
      name: "Ordered list - Symbols",
      desc: "List with symbols",
      excode: `<ol class="ul-lists-symbol">
        <li value="*">Bread</li>
        <li value="*">Milk</li>
        <li value="*">Grocceries
        <ol class="">
            <li value="-">Oil</li>
            <li value="-">Wheat</li>
            <li value="-">Rice</li>
        </ol>
    </li>
   
</ol>`,
      maincode: (
        <div className="width-90 three-margin-top">
          <ol class="ul-lists-symbol">
            <li value="*">Bread</li>
            <li value="*">Milk</li>
            <li value="*">
              Grocceries
              <ol class="">
                <li value="-">Oil</li>
                <li value="-">Wheat</li>
                <li value="-">Rice</li>
              </ol>
            </li>
          </ol>
        </div>
      ),
    },
    {
      id: "5",
      name: "Unordered list - Links",
      desc: "Patterned list of links.",
      excode: ` <ul class="ul-lists">
        <li><a href="#">Getting started</a></li>
        <li><a href="#">Introduction</a></li>
        <li><a href="#">Elements</a>
        <ul>
            <li><a href="#">Button</a></li>
            <li><a href="#">Card</a></li>
            <li><a href="#">Lists</a></li>
        </ul>
    </li>
   
</ul>`,
      maincode: (
        <div className="width-90 three-margin-top">
          {" "}
          <ul class="ul-lists">
            <li>
              <a href="#">Getting started</a>
            </li>
            <li>
              <a href="#">Introduction</a>
            </li>
            <li>
              <a href="#">Elements</a>
              <ul>
                <li>
                  <a href="#">Button</a>
                </li>
                <li>
                  <a href="#">Card</a>
                </li>
                <li>
                  <a href="#">Lists</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "6",
      name: "Ordered List",
      desc:
        "Ordered List accoridng to numbers , you can specifiy the starting with start attribute.",
      excode: `<ol class="ul-lists" start="50">
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
        <li>Water</li>
        <li>Juice</li>
        <li>Beer</li>
      </ol>`,
      maincode: (
        <div className="width-90 three-margin-top">
          <ol class="ul-lists" start="50">
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
            <li>Water</li>
            <li>Juice</li>
            <li>Beer</li>
          </ol>
        </div>
      ),
    },
    {
      id: "7",
      name: "Detailed List",
      desc: "List of different taks and timings",
      excode: ` <ul class="detailed-list m-list">
        <li>
            <p>First Phase / First Phase </p>
            <span>Time will be 2:00pm</span>
        </li>
        <li>
            <p>First Phase / First Phase </p>
            <span>Time will be 2:00pm</span>
        </li>
        <li>
            <p>First Phase / First Phase </p>
            <span>Time will be 2:00pm</span>
        </li>
        <li>
            <p>First Phase / First Phase </p>
            <span>Time will be 2:00pm</span>
        </li>
    </ul>`,
      maincode: (
        <div className="width-90 three-margin-top">
          {" "}
          <ul class="detailed-list m-list">
            <li>
              <p>First Phase / First Phase </p>
              <span>Time will be 2:00pm</span>
            </li>
            <li>
              <p>First Phase / First Phase </p>
              <span>Time will be 2:00pm</span>
            </li>
            <li>
              <p>First Phase / First Phase </p>
              <span>Time will be 2:00pm</span>
            </li>
            <li>
              <p>First Phase / First Phase </p>
              <span>Time will be 2:00pm</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "8",
      name: "Question lists",
      desc: "List of questions",
      excode: ` <ul class="question-list m-list">
        <li>
            <p>What is your name ?</p>
        </li>
        <li>
            <p>What is your name ?</p>
        </li>
        <li>
            <p>What is your name ?</p>
        </li>
        <li>
            <p>What is your name ?</p>
        </li>
    </ul>`,
      maincode: (
        <div className="width-90 three-margin-top">
          {" "}
          <ul class="question-list m-list">
            <li>
              <p>What is your name ?</p>
            </li>
            <li>
              <p>What is your name ?</p>
            </li>
            <li>
              <p>What is your name ?</p>
            </li>
            <li>
              <p>What is your name ?</p>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "9",
      name: "Notifications List",
      desc: "List of notifications",
      excode: `
        <ul class="notification-list m-list">
            <li>
                <span>Username</span>
                <p> <span>Username</span> liked your status.</p>
            </li>
            <li>
                <span>Username</span>
                <p>You viewed <span>Username's</span> profile</p>
            </li>
            <li>
                <span>Username</span>
                <p> <span>Username</span> liked your status.</p>
            </li>
            <li>
                <span>Username</span>
                <p>You viewed <span>Username's</span> profile</p>
            </li>
        </ul>`,
      maincode: (
        <div className="width-90 three-margin-top">
          <ul class="notification-list m-list">
            <li>
              <span>Username</span>
              <p>
                {" "}
                <span>Username</span> liked your status.
              </p>
            </li>
            <li>
              <span>Username</span>
              <p>
                You viewed <span>Username's</span> profile
              </p>
            </li>
            <li>
              <span>Username</span>
              <p>
                {" "}
                <span>Username</span> liked your status.
              </p>
            </li>
            <li>
              <span>Username</span>
              <p>
                You viewed <span>Username's</span> profile
              </p>
            </li>
          </ul>
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
        compname="Lists"
        compdesc="Listing of items or grouping of data."
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
