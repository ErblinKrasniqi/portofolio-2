import classes from "./Navbar.module.scss";
import Icons from "./Icons";
import IconsSecond from "./IconsSecond";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <Icons />
      <IconsSecond />
    </div>
  );
};

export default Navbar;
