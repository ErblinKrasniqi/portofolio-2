import classes from "./Navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={classes.container}>
      <div className={classes.logo}>
        <h1>Erblin Krasniqi</h1>
      </div>
      <div className={classes.links}>
        <h3>Docs</h3>
        <h3>About</h3>
        <Link href="/projects">
          {" "}
          <h3>Projects</h3>
        </Link>
        <h3>Certifications</h3>
      </div>
      <div className={classes.profile}>
        <h3>Login</h3>
        <img src="./profile.jpg"></img>
      </div>
    </nav>
  );
};

export default Navbar;
