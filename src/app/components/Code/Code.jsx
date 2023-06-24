"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import classes from "./Code.module.scss";

const Code = () => {
  const codeRef1 = useRef(null);
  const codeRef2 = useRef(null);

  useEffect(() => {
    const codeElement1 = codeRef1.current;
    const codeElement2 = codeRef2.current;

    const options1 = {
      strings: [
        "",
        `<span>let</span> message = "Say my name";
<span>if</span> (this > that) {
console.log
  (<spang>"Heisenberg"</spang>);
}<span>else</span> {
  return message;
}
<span>const</span> cooking = (ingredients) =>
 {
  message = 
   "Cooking " + ingredients;}`,
      ],
      typeSpeed: 50, // Adjust the typing speed for the first component
      backSpeed: 60,
      startDelay: 30,
      loop: true,
      loopCount: Infinity,
    };

    const options2 = {
      strings: [
        "",
        `<span>let</span> x = 5;
  <span>if</span> (x > 10) {
console.log
   (<spang>"x is greater than 10"</spang>);
} <span>else</span> {
console.log
  (<spang>"I am the one who knocks"</spang>);
}
message = "Cooking " + ingredients
;
<span>let</span> message = "Say my name";`,
      ],
      typeSpeed: 30, // Adjust the typing speed for the second component
      backSpeed: 60,
      startDelay: 30,
      loop: true,
      loopCount: Infinity,
    };

    const typed1 = new Typed(codeElement1, options1);
    const typed2 = new Typed(codeElement2, options2);

    return () => {
      typed1.destroy();
      typed2.destroy();
    };
  }, []);

  return (
    <div className={classes.grid}>
      <div className={classes.container}>
        <div className={classes.numbers}>
          <h4>1</h4>
          <h4>2</h4>
          <h4>3</h4>
          <h4>4</h4>
          <h4>5</h4>
          <h4>6</h4>
          <h4>7</h4>
          <h4>8</h4>
          <h4>9</h4>
          <h4>10</h4>
          <h4>11</h4>
        </div>
        <pre>
          <code ref={codeRef1}></code>
        </pre>
      </div>
      <div className={`${classes.container} ${classes.containerSecond}`}>
        <div className={classes.numbers}>
          <h4>1</h4>
          <h4>2</h4>
          <h4>3</h4>
          <h4>4</h4>
          <h4>5</h4>
          <h4>6</h4>
          <h4>7</h4>
          <h4>8</h4>
          <h4>9</h4>
          <h4>10</h4>
          <h4>11</h4>
        </div>
        <pre>
          <code ref={codeRef2}></code>
        </pre>
      </div>
    </div>
  );
};

export default Code;
