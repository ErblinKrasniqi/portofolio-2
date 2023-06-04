
// import React, { useEffect, useState } from 'react';
// import getAPOD  from '../../api/nasa';
import classes from "./ApiSection.module.scss";
import Section from "./Section";
import SectionSecond from "./SectionSecond";
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

  const data = {
    image: "2.jpg",
    text: "Proficient in creating responsive web designs, ensuring optimal user experiences across different devices and screen sizes with a mobile-first approach proficient in creating responsive web designs, ensuring optimal user experiences across different devices and screen sizes with a mobile-first approach",
  };

  const dataSecond = {
    image: "3.jpg",
    text: "Proficient in creating responsive web designs, ensuring optimal user experiences across different devices and screen sizes with a mobile-first approach proficient in creating responsive web designs, ensuring optimal user experiences across different devices and screen sizes with a mobile-first approach",
  };

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <Edges />
        <div className={classes.content}>
          <Section url={data.image} text={data.text} />
        </div>
      </div>
      <div className={classes.container}>
        <Edges />
        <div className={classes.contentSecond}>
          <SectionSecond url={dataSecond.image} text={dataSecond.text} />
        </div>
      </div>
      <div className={classes.container}>
        <Edges />
        <div className={`${classes.contentSecond} ${classes.contentThird}`}>
          <SectionSecond url={dataSecond.image} text={dataSecond.text} />
        </div>
      </div>
    </div>
  );
};

export default ApiSection;
