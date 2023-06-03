import classes from "./Line.module.scss";
const LineLong = () => {
  return (
    <div className={classes.containerLong}>
      <div className={classes.line}></div>
      <div className={classes.number}></div>
      <div className={classes.line}></div>
      <div className={classes.number}></div>
      <div className={classes.line}></div>
      <div className={classes.numberEnd}>
        <h4>2</h4>
      </div>
    </div>
  );
};

export default LineLong;
