import classes from "./Cards.module.scss";

const Card = ({ key, icon, h1, p }) => {
  return (
    <div key={key} className={classes.container}>
      <div className={classes.svg}><img src={icon} alt="" /></div>
      <h1>{h1}</h1>
      <p>{p}</p>
    </div>
  );
};

export default Card;
