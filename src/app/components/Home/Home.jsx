"use client";
import classes from "./Home.module.scss";
import Icons from "../Icons/Icons";
import anime from "animejs";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const wordAnimation = anime({
        targets: "#passion",
        loop: true,
        direction: "alternate",
        easing: "linear",
        duration: 50000,
        keyframes: [
          { color: "#fb4e4e" }, // Red
          { color: "#1165b8" }, // Green
          { color: "#fb4e4e" }, // Blue
        ],
      });
      const buttonAnimation = anime({
        targets: "#contactButton",
        loop: true,
        direction: "alternate",
        easing: "linear",
        duration: 50000,
        keyframes: [
          { borderColor: "#fb4e4e", boxShadow: "1px -2px 38px #fb4e4e" }, // Red
          { borderColor: "#1165b8", boxShadow: "1px -2px 38px #00ff00" }, // Green
          { borderColor: "#fb4e4e", boxShadow: "1px -2px 38px #0000ff" }, // Blue
        ],
      });

      return () => {
        wordAnimation.pause();
        buttonAnimation.pause();
      };
    }
  }, []);
  return (
    <div className={classes.container}>
      <h1>
        <span id="passion">Passionate</span> UX Developer.
      </h1>
      <p>
        As an enthusiastic UX developer, I strive to create engaging user
        experiences through thoughtful design and intuitive interfaces.
      </p>
      <button id="contactButton">Contact</button>
      <Icons />
    </div>
  );
};

export default Home;
