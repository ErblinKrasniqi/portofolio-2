import classes from "./EndPage.module.scss";
const EndPage = () => {
  return (
    <div className={classes.container}>
      <div>
        <img src="code.svg" alt="" />
        <h2>
          View my <a>Github</a>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          porro unde.
        </p>
        <button></button>
      </div>
    </div>
  );
};

export default EndPage;
