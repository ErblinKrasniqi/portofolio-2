import React from "react";
import Navbar from "../components/Navbar/Navbar";
import classes from "./project.module.scss";
import image1 from "../../Assets/sc1.png";
import Image from "next/image";

const page = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className={classes.main}>
        <Image src={image1} alt="Description of the image" />
        <h1>The main projcet</h1>
        <p>
          This is the main page where you can log into the account and its all
          conenctet to mingi dm and Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Ab ex inventore obcaecati vero officia pariatur
          dolore alias eaque est iure blanditiis sapiente odit doloremque
          deserunt ullam autem tenetur sed, rerum molestias porro ipsam, a
          repudiandae. Sunt recusandae fuga eos? Minima obcaecati quod tempora,
          facere doloremque possimus <a href="#">blanditiis EE</a>, quis vero
          voluptates, officia laborum? Iure laudantium deserunt quidem esse ea
          modi, soluta excepturi quas dolorum ratione ipsa numquam dolore
          officia ducimus cum, deleniti voluptas. Aspernatur vero laboriosam
          hic, in omnis rem magnam voluptatibus nobis dignissimos ullam enim
          excepturi unde exercitationem aperiam quos consectetur, fugit ut?
          Minus, adipisci exercitationem laboriosam reiciendis eaque maxime?
        </p>
        <Image src={image1} alt="Description of the image" />
        <p>
          This is the main page where you can log into the account and its all
          conenctet to mingi dm and Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Ab ex inventore obcaecati vero officia pariatur
          dolore alias eaque est iure blanditiis sapiente odit doloremque
          deserunt ullam autem tenetur sed, rerum molestias porro ipsam, a
          repudiandae. Sunt recusandae fuga eos? Minima obcaecati quod tempora,
          facere doloremque possimus <a href="#">blanditiis EE</a>, quis vero
          voluptates, officia laborum? Iure laudantium deserunt quidem esse ea
          modi, soluta excepturi quas dolorum ratione ipsa numquam dolore
          officia ducimus cum, deleniti voluptas. Aspernatur vero laboriosam
          hic, in omnis rem magnam voluptatibus nobis dignissimos ullam enim
          excepturi unde exercitationem aperiam quos consectetur, fugit ut?
          Minus, adipisci exercitationem laboriosam reiciendis eaque maxime?
        </p>
      </div>
    </React.Fragment>
  );
};

export default page;
