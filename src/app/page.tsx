import Navbar from "./components/Navbar/Navbar";
import classes from "./page.module.scss";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Wrapper from "./Wrapper/Wrapper";
import Code from "./components/Code/Code";
import { Fragment } from "react";

let headerText = {
  h1: "Skills and Academic Journey",
  p: "During my computer science journey, I've developed expertise in JavaScript, HTML, CSS, and frameworks like React and Redux",
};

const page = () => {
  return (
    <Fragment>
      <Navbar />
      <div className={classes.main}>
        <Home />
        <Header text={headerText} />
        <Wrapper><Code /></Wrapper>
      </div>
    </Fragment>
  );
};

export default page;
