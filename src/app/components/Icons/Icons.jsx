import classes from "./Icons.module.scss";
import Icons from "./IconsFirst";
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
