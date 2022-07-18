import React from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import { image } from "../data/user.js"


function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About
