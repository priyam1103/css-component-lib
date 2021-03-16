/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
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
export default function Card() {
  const data = [
    {
      id: "1",
      name: "Card",
      desc: "Card with image and description",
      excode: `    
      <div class="card">
          <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" class="card-img"/>
          <div class="card-body">
          <span class="title">Card Title</span>
          <p class="details">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque tempora aut blanditiis eaque culpa in architecto nulla iusto maiores aliquam commodi sunt assumenda neque, quod illum perferendis molestiae deleniti quaerat?</p>
          </div>
      </div>`,
      maincode: (
        <div className="width-90 three-margin-top">
          <div class="card">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              class="card-img"
            />
            <div class="card-body">
              <span class="title">Card Title</span>
              <p class="details">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque tempora aut blanditiis eaque culpa in architecto
                nulla iusto maiores aliquam commodi sunt assumenda neque, quod
                illum perferendis molestiae deleniti quaerat?
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "2",
      name: "Card with button",
      desc: "Car with description and button",
      excode: `<div class="card">
      <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" class="card-img-profile"/>
      <div class="card-body">
      <span class="title">Username</span>
      <p class="details">Software Developer</p>
      </div>
  </div>`,
      maincode: (
        <div className="width-90 three-margin-top">
          <div class="card">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              class="card-img"
            />
            <div class="card-body">
              <span class="title">Card Title</span>
              <p class="details">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque tempora aut blanditiis eaque culpa in architecto
                nulla iusto maiores aliquam commodi sunt assumenda neque, quod
                illum perferendis molestiae deleniti quaerat?
              </p>
              <button class="btn btn-primary">Primary</button>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "3",
      name: "User card",
      desc: "Card with user designation.",
      excode: ` <div class="card">
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        class="card-img"
      />
      <div class="card-body">
        <span class="title">Elon Musk</span>
        <p class="details">Software Developer</p>
      </div>
    </div>`,
      maincode: (
        <div className="width-90 three-margin-top">
          <div class="card">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              class="card-img"
            />
            <div class="card-body">
              <span class="title">Elon Musk</span>
              <p class="details">Software Developer</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "4",
      name: "Card with badge",
      desc: "Card with badge and button.",
      excode: `<div class="card">
      <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" class="card-img"/>
      <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" class="card-badge"/>
      <div class="card-body">
      <span class="title">Card Title</span>
      <p class="details">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque tempora aut blanditiis eaque culpa in architecto nulla iusto maiores aliquam commodi sunt assumenda neque, quod illum perferendis molestiae deleniti quaerat?</p>
      <button class="btn btn-primary">Primary</button>    
  </div>
  </div>`,
      maincode: (
        <div className="width-90 three-margin-top">
          <div class="card">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              class="card-img"
            />
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              class="card-badge"
            />
            <div class="card-body">
              <span class="title">Card Title</span>
              <p class="details">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque tempora aut blanditiis eaque culpa in architecto
                nulla iusto maiores aliquam commodi sunt assumenda neque, quod
                illum perferendis molestiae deleniti quaerat?
              </p>
              <button class="btn btn-primary">Primary</button>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "5",
      name: "Card with dismiss button",
      desc: "Dismiss option on detailed card.",
      excode: `<div class="card">
        <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" class="card-img"/>
        <span class="card-dismiss">X</span>
        <div class="card-body">
            <span class="title">Card Title</span>
            <p class="details">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque tempora aut blanditiis eaque culpa in architecto nulla iusto maiores aliquam commodi sunt assumenda neque, quod illum perferendis molestiae deleniti quaerat?</p>
            <button class="btn btn-primary">Primary</button>    
        </div>
    </div>`,
      maincode: (
        <div className="width-90 three-margin-top">
          <div class="card">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              class="card-img"
            />
            <span class="card-dismiss">X</span>
            <div class="card-body">
              <span class="title">Card Title</span>
              <p class="details">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque tempora aut blanditiis eaque culpa in architecto
                nulla iusto maiores aliquam commodi sunt assumenda neque, quod
                illum perferendis molestiae deleniti quaerat?
              </p>
              <button class="btn btn-primary">Primary</button>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "6",
      name: "Descriptive card.",
      desc: "Card with description.",
      excode: `    <div class="card">
        <div class="card-body">
            <span class="title">Card Title</span>
            <p class="details">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque tempora aut blanditiis eaque culpa in architecto nulla iusto maiores aliquam commodi sunt assumenda neque, quod illum perferendis molestiae deleniti quaerat?</p>
            <p class="details">Lorem ipsum dolor, sit amet consectetur , quod illum perferendis molestiae deleniti quaerat?</p>
            <button class="btn btn-primary">Primary</button>      
        </div>
    </div>`,
      maincode: (
        <div className="width-90 three-margin-top">
          <div class="card">
            <div class="card-body">
              <span class="title">Card Title</span>
              <p class="details">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque tempora aut blanditiis eaque culpa in architecto
                nulla iusto maiores aliquam commodi sunt assumenda neque, quod
                illum perferendis molestiae deleniti quaerat?
              </p>
              <button class="btn btn-primary">Primary</button>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "7",
      name: "Card list.",
      desc: "List view of the card.",
      excode: `<div class="card">
        <ul class="card-list-view">
            <li>
              Task 1
            </li>
            <li>
              Task 2
            </li>
            <li>
              Task 3
            </li>
        </ul>
      
  </div>`,
      maincode: (
        <div className="width-90 three-margin-top">
          <div class="card">
            <ul class="card-list-view">
              <li>Task 1</li>
              <li>Task 2</li>
              <li>Task 3</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "8",
      name: "Horizontal Card",
      desc: "Horizontal view of card.",
      excode: `<div class="card ht">
        <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80&text=+" class="card-img-ht"/>
        <div class="card-body">
        <span class="title">Card Title</span>
        <p class="details">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque tempora aut blanditiis eaque culpa in architecto nulla iusto maiores aliquam commodi sunt assumenda neque, quod illum perferendis molestiae deleniti quaerat?</p>
        </div>
    </div>`,
      maincode: (
        <div className="width-90 three-margin-top">
          <div class="card ht">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80&text=+"
              class="card-img-ht"
            />
            <div class="card-body">
              <span class="title">Card Title</span>
              <p class="details">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque tempora aut blanditiis eaque culpa in architecto
                nulla iusto maiores aliquam commodi sunt assumenda neque, quod
                illum perferendis molestiae deleniti quaerat?
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];
  const [showcode, setShowCode] = useState([]);
  function click(val) {
    if (showcode.includes(val)) {
      setShowCode((prevState) => prevState.splice(prevState.indexOf(val), 1));
    } else setShowCode([...showcode,val]);
  }
  return (
    <div className="component">
      <ComponentHeader
        compname="Card"
        compdesc="A card displays site content in a manner similar to a playing card."
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
