import classes from "./Cards.module.scss";

const Card = ({ icon, h1, p }) => {
  return (
    <div className={classes.container}>
      <div className={classes.svg}><img src={icon} alt="" /></div>
      <h1>{h1}</h1>
      <p>{p}</p>
    </div>
  );
};

export default Card;
