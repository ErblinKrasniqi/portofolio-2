import classes from "./Wrapper.module.scss";

const WrapperCards = ({ children }) => {
  return <div className={classes.WrapperCards}>{children}</div>;
};

export default WrapperCards;
