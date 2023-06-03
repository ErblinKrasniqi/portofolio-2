import classes from "./Globe.module.scss";
import Card from '../Cards/Cards'

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
]

const Globe = () => {
  return (
    <div className={classes.container}>
      <h1>Proficient Programming Languages</h1>
      <p className={classes.pFirst}>
        With expertise in JavaScript, Python, Java, and HTML/CSS, I develop
        versatile and efficient solutions for diverse software development
        needs.
      </p>
      <p className={classes.pSecond}>
        In addition to programming languages, I am skilled in using frameworks
        and libraries like React, Node.js, and Redux to build robust and
        scalable applications.
      </p>
      <div className={classes.cards}>

      {cards.map((card, index) => (
              <Card key={index} icon={card.icon} h1={card.h1} p={card.p} />
            ))}
      </div>
    </div>
    
  );
};
export default Globe;
