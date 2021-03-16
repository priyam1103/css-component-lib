import React, { useState } from "react";
import SubElementHeader from "../SubElementHeader";
import ComponentHeader from "../ComponentHeader";
const d = {
  id: "",
  name: "",
  desc: "",
  excode: ``,
  maincode: ``,
};
export default function Form() {
  const data = [
    {
      id: "1",
      name: "Form",
      desc: "A Form",
      excode: `<form class="form">
      <div class="ip-label field">
        <label class="nm-label ">Enter First Name</label>
        <input type="text" placeholder="First Name" class="std-input form-ip" />
      </div>
      <div class="ip-label field">
        <label class="nm-label ">Enter Last Name</label>
        <input type="text" placeholder="Last Name" class="std-input form-ip" />
      </div>
      <button class="btn btn-secondary field">Submit</button>
    </form>`,
      maincode: (
        <div className="width-90 three-margin-top">
          <form class="form">
            <div class="ip-label field">
              <label class="nm-label ">Enter First Name</label>
              <input
                type="text"
                placeholder="First Name"
                class="std-input form-ip"
              />
            </div>
            <div class="ip-label field">
              <label class="nm-label ">Enter Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                class="std-input form-ip"
              />
            </div>
            <button class="btn btn-secondary field">Submit</button>
          </form>
        </div>
      ),
    },
    {
      id: "2",
      name: "Detailed Form",
      desc: "Sample User registration form",
      excode: `<form class="form">
      <div class="two-field">
        <div class="ip-label field">
          <label class="nm-label ">Enter First Name</label>
          <input
            type="text"
            placeholder="First Name"
            class="std-input form-ip"
          />
        </div>
        <div class="ip-label field">
          <label class="nm-label ">Enter Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            class="std-input form-ip"
          />
        </div>
        <div class="ip-label field">
          <label class="nm-label ">Mobile Number</label>
          <input
            type="text"
            placeholder="Mobile Number"
            class="std-input form-ip"
          />
        </div>
        <div class="ip-label field">
          <label class="nm-label ">Email Id</label>
          <input
            type="text"
            placeholder="Email Id"
            class="std-input form-ip"
          />
        </div>
      </div>
      <div class="ip-label field">
        <label class="nm-label ">Address</label>
        <input type="text" placeholder="Address" class="std-input form-ip" />
      </div>

      <div class="sixty-wide-field">
        <div class="ip-label field">
          <label class="nm-label ">District</label>
          <input
            type="text"
            placeholder="District"
            class="std-input form-ip"
          />
        </div>
        <div class="ip-label field">
          <label class="nm-label ">State</label>
          <input
            type="text"
            placeholder="State"
            class="std-input form-ip"
          />
        </div>
      </div>
      <button class="btn btn-secondary field">Submit</button>
    </form>`,
      maincode: (
        <div className="width-90 three-margin-top">
          <form class="form">
            <div class="two-field">
              <div class="ip-label field">
                <label class="nm-label ">Enter First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  class="std-input form-ip"
                />
              </div>
              <div class="ip-label field">
                <label class="nm-label ">Enter Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  class="std-input form-ip"
                />
              </div>
              <div class="ip-label field">
                <label class="nm-label ">Mobile Number</label>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  class="std-input form-ip"
                />
              </div>
              <div class="ip-label field">
                <label class="nm-label ">Email Id</label>
                <input
                  type="text"
                  placeholder="Email Id"
                  class="std-input form-ip"
                />
              </div>
            </div>
            <div class="ip-label field">
              <label class="nm-label ">Address</label>
              <input
                type="text"
                placeholder="Address"
                class="std-input form-ip"
              />
            </div>

            <div class="sixty-wide-field">
              <div class="ip-label field">
                <label class="nm-label ">District</label>
                <input
                  type="text"
                  placeholder="District"
                  class="std-input form-ip"
                />
              </div>
              <div class="ip-label field">
                <label class="nm-label ">State</label>
                <input
                  type="text"
                  placeholder="State"
                  class="std-input form-ip"
                />
              </div>
            </div>
            <button class="btn btn-secondary field">Submit</button>
          </form>
        </div>
      ),
    },
    {
      id: "3",
      name: "Grid forms",
      desc: "Form adjust according to screen size",
      excode: `  <form class="form">
      <div class="three-field-form">
      <div class="ip-label field">
          <label class="nm-label ">Enter First Name</label>
          <input type="text" placeholder="First Name" class="std-input form-ip" />
        </div>
        <div class="ip-label field">
          <label class="nm-label ">Enter Last Name</label>
          <input type="text" placeholder="Last Name" class="std-input form-ip" />
        </div>
        <div class="ip-label field">
          <label class="nm-label ">Enter Last Name</label>
          <input type="text" placeholder="Last Name" class="std-input form-ip" />
        </div>
  </div>
      </form>`,
      maincode: (
        <div className="width-90 three-margin-top">
          {" "}
          <form class="form">
            <div class="three-field-form">
              <div class="ip-label field">
                <label class="nm-label ">Enter First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  class="std-input form-ip"
                />
              </div>
              <div class="ip-label field">
                <label class="nm-label ">Enter Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  class="std-input form-ip"
                />
              </div>
              <div class="ip-label field">
                <label class="nm-label ">Enter Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  class="std-input form-ip"
                />
              </div>
            </div>
          </form>
        </div>
      ),
    },
    {
      id: "4",
      name: "Multiple input fields",
      desc: "Input that requires to the multiple fields",
      excode: `<form class="form">
      <div class="label-three-field-form field">
          <label class="nm-label ">Name</label>
     
         
          <input type="text" placeholder="First Name" class="std-input form-ip field" />
        
       
         
          <input type="text" placeholder="Middle Name" class="std-input form-ip field" />
        
          <input type="text" placeholder="Last Name" class="std-input form-ip field" />
  </div>
      </form>`,
      maincode: (
        <div className="width-90 three-margin-top">
          <form class="form">
            <div class="label-three-field-form field">
              <label class="nm-label ">Name</label>

              <input
                type="text"
                placeholder="First Name"
                class="std-input form-ip field"
              />

              <input
                type="text"
                placeholder="Middle Name"
                class="std-input form-ip field"
              />

              <input
                type="text"
                placeholder="Last Name"
                class="std-input form-ip field"
              />
            </div>
          </form>
        </div>
      ),
    },
    {
      id: "5",
      name: "Select box",
      desc: "A dropdown menu for selection",
      excode: `<div class="ip-label">
      <label for="states" class="">Choose a car:</label>

<select name="states" id="states" class="dropdown">
<option  value="states1">state1</option>
<option  value="states1">state1</option>
<option  value="states1">state1</option>
<option  value="states1">state1</option>


</select>
</div>`,
      maincode: (
        <div className="width-90 three-margin-top">
          <div class="ip-label">
            <label for="states" class="">
              Choose a car:
            </label>

            <select name="states" id="states" class="dropdown">
              <option value="states1">state1</option>
              <option value="states1">state1</option>
              <option value="states1">state1</option>
              <option value="states1">state1</option>
            </select>
          </div>
        </div>
      ),
    },
    {
      id: "6",
      name: "Checkbox",
      desc: "Users have an option to check and uncheck the option",
      excode: `<div class="ip-check">
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      <label for="vehicle1" class="check">First Option</label>
      </div>
      <div class="ip-check">
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
          <label for="vehicle1" class="check">First Option</label>
          </div>
          <div class="ip-check">
              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
              <label for="vehicle1" class="check">I agree to terms and condition.</label>
              </div>`,
      maincode: (
        <div className="width-90 three-margin-top">
          <div class="ip-check">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1" class="check">
              First Option
            </label>
          </div>
          <div class="ip-check">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1" class="check">
              First Option
            </label>
          </div>
          <div class="ip-check">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1" class="check">
              I agree to terms and condition.
            </label>
          </div>
        </div>
      ),
    },
    {
      id: "7",
      name: "Radio buttons",
      desc: "Its good for selecting one option at a time.",
      excode: `<div class="ip-check">
      <input type="radio" id="vehicle1" name="vehicle1" value="Bike"/>
      <label for="vehicle1" class="check">Fruits</label>
      </div>
      <div class="ip-check">
          <input type="radio" id="vehicle1" name="vehicle1" value="Bike"/>
          <label for="vehicle1" class="check">Vegetables</label>
          </div>
          <div class="ip-check">
              <input type="radio" id="vehicle1" name="vehicle1" value="Bike"/>
              <label for="vehicle1" class="check">Milk</label>
              </div>`,
      maincode: (
        <div className="width-90 three-margin-top">
          <div class="ip-check">
            <input type="radio" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1" class="check">
              Fruits
            </label>
          </div>
          <div class="ip-check">
            <input type="radio" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1" class="check">
              Vegetables
            </label>
          </div>
          <div class="ip-check">
            <input type="radio" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1" class="check">
              Milk
            </label>
          </div>
        </div>
      ),
    },
    {
      id: "8",
      name: "Radio buttons in grid.",
      desc: "Grid styled radio buttons sample.",
      excode: `<div class="options-grid">
      <label class=" label">What's your fav.</label>
  <div class="ip-check">
      <input type="radio" id="vehicle1" name="vehicle1" value="Bike"/>
      <label for="vehicle1" class="check">Fruits</label>
      </div>
      <div class="ip-check">
          <input type="radio" id="vehicle1" name="vehicle1" value="Bike"/>
          <label for="vehicle1" class="check">Vegetables</label>
          </div>
          <div class="ip-check">
              <input type="radio" id="vehicle1" name="vehicle1" value="Bike"/>
              <label for="vehicle1" class="check">Milk</label>
              </div>
  </div>`,
      maincode: (
        <div className="width-90 three-margin-top">
          <div class="options-grid">
            <label class=" label">What's your fav.</label>
            <div class="ip-check">
              <input type="radio" id="vehicle1" name="vehicle1" value="Bike" />
              <label for="vehicle1" class="check">
                Fruits
              </label>
            </div>
            <div class="ip-check">
              <input type="radio" id="vehicle1" name="vehicle1" value="Bike" />
              <label for="vehicle1" class="check">
                Vegetables
              </label>
            </div>
            <div class="ip-check">
              <input type="radio" id="vehicle1" name="vehicle1" value="Bike" />
              <label for="vehicle1" class="check">
                Milk
              </label>
            </div>
          </div>
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
        compname="Forms"
        compdesc="A form displays collection of user input fields."
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
