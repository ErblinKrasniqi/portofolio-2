import classes from "./ApiSection.module.scss";

const Edges = () => {
  return (
    <>
      <div className={classes.sidebar}></div>
      <div className={classes.nav}>
        <div className={classes.buttons}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={classes.bar}>
          <span></span>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Edges;
