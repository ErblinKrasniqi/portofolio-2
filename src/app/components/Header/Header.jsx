import classes from "./Header.module.scss";

const Header = ({ text }) => {
  return (
    <div className={classes.container}>
      <h1>{text.h1}</h1>
      <p>{text.p}</p>
    </div>
  );
};

export default Header;
