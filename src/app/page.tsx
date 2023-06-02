import React from "react";
import Navbar from "./components/Navbar/Navbar";
import classes from "./page.module.scss";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Wrapper from "./Wrapper/Wrapper";
import WrapperFlex from "./Wrapper/WrapperFlex";
import Card from "./components/Cards/Cards";
import Code from "./components/Code/Code";

const headerText = {
  h1: "Skills and Academic Journey",
  p: "During my computer science journey, I've developed expertise in JavaScript, HTML, CSS, and frameworks like React and Redux",
};

const cards = [
  {
    icon: "./wranch.svg",
    h1: "Technical Skills",
    p: "Proficient in React, Redux, Next.js, and other frontend technologies, delivering robust and interactive web applications  ",
  },
  {
    icon: "./database.svg",
    h1: "Database Management",
    p: "Experienced in working with databases like MySQL and MongoDB, ensuring efficient data storage and retrieval for scalable applications  ",
  },
  {
    icon: "./code.svg",
    h1: "Code Development",
    p: "Passionate about coding with JavaScript, utilizing modern frameworks and libraries to build innovative and optimized solutions  ",
  },
];

const page = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className={classes.main}>
        <Home />
        <Header text={headerText} />
        <Wrapper>
          <Code />
          <WrapperFlex>
            {cards.map((card, index) => (
              <Card key={index} icon={card.icon} h1={card.h1} p={card.p} />
            ))}
          </WrapperFlex>
        </Wrapper>
      </div>
    </React.Fragment>
  );
};

export default page;
