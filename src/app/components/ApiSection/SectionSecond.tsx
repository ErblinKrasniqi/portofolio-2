import classes from "./ApiSection.module.scss";
const SectionSecond = ({ url, text }) => {
  return (
    <>
      <div className={classes.nav}>
        <img src={url} alt="" />
      </div>
      <div className={classes.sidebar}>
        <img src={url} alt="" />
      </div>
      <div className={classes.text}>
        <p>{text}</p>
      </div>
    </>
  );
};

export default SectionSecond;
