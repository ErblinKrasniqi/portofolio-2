import classes from "./page.module.scss";
import React from "react";
import Wrapper from "./Wrapper/Wrapper";
import WrapperLong from "./Wrapper/WrapperLong";
import WrapperFlex from "./Wrapper/WrapperFlex";
import WrapperCards from "./Wrapper/WrapperCards";
import Line from "./components/Line/Line";
import LineLong from "./components/Line/LineLong";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import ApiSection from "./components/ApiSection/ApiSection";
import Card from "./components/Cards/Cards";
import Code from "./components/Code/Code";
import Globe from "./components/Globe/Globe";
import Demensional from "./components/Demensional/Demensional";
import EndPage from "./components/EndPage/EndPage";
import Analytics from "./Analystics";

const headerText = {
  h1: "Skills and Academic Journey",
  p: "During my computer science journey, I've developed expertise in JavaScript, HTML, CSS, and frameworks like React and Redux",
};

const headerText2 = {
  h1: "Skills and Academic Journey",
};

const headerTextSecond = {
  h1: "Academic Background and Research",
  p: "I am actively engaged in computer science research, exploring topics like machine learning and data analysis, contributing to the advancement of knowledge in the field.",
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

const cardsSecond = [
  {
    icon: "./clout.svg",
    h1: "Cloud Computing and Deployment",
    p: "Experienced in cloud computing platforms like AWS and Azure, deploying scalable and reliable applications with a focus on cloud infrastructure and services.    ",
  },
  {
    icon: "./arrow.svg",
    h1: "Responsive Web Design",
    p: "Proficient in creating responsive web designs, ensuring optimal user experiences across different devices and screen sizes with a mobile-first approach    ",
  },
  {
    icon: "./loptop.svg",
    h1: "Performance Optimization",
    p: "Focused on optimizing application performance, leveraging techniques like code optimization, caching, and database query optimization to deliver faster and efficient experiences.    ",
  },
];

const page = () => {
  return (
    <React.Fragment>
      <Analytics />
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
        <Line />
        <Header text={headerTextSecond} />
        <WrapperLong>
          <ApiSection />
          <LineLong />
          <WrapperCards>
            {cardsSecond.map((card, index) => (
              <Card key={index} icon={card.icon} h1={card.h1} p={card.p} />
            ))}
          </WrapperCards>
        </WrapperLong>
        <Header text={headerText2} />
        <Wrapper>
          <Globe />
          <Demensional />
        </Wrapper>
        <EndPage />
      </div>
    </React.Fragment>
  );
};

export default page;
