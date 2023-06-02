import classes from "./Wrapper.module.scss";

const Wrapper = ({ children }) => {
  return <div className={classes.wrapperFlex}>{children}</div>;
};

export default Wrapper;
