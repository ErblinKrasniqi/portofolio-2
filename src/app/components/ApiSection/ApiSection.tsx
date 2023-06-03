"use client";
// import React, { useEffect, useState } from 'react';
// import getAPOD  from '../../api/nasa';
import classes from "./ApiSection.module.scss";
import Section from "./Section";
import Edges from "./Edges";

const ApiSection = () => {
  // const [apodData, setAPODData] = useState(null);

  // useEffect(() => {
  //   const fetchAPOD = async () => {
  //     const data = await getAPOD();
  //     setAPODData(data);
  //   };

  //   fetchAPOD();
  // }, []);

  return (
    <div className={classes.container}>
      <Edges />
      <div className={classes.content}>
        <Section url={"./profile.jpg"} text={"lorem"} />
      </div>
    </div>
  );
};

export default ApiSection;
