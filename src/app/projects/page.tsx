import React from "react";
import Navbar from "../components/Navbar/Navbar";
import classes from "./project.module.scss";

import homepage from "../../Assets/sc/Homepage.png";
import dashboard from "../../Assets/sc/Dashboard.png";
import login from "../../Assets/sc/login.png";
import createAcc from "../../Assets/sc/Createacc.png";
import createPost from "../../Assets/sc/Createpost.png";

import Image from "next/image";

const ProjectDocumentation = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className={classes.main}>
        <header className={classes.header}>
          <h1>Blog Space Project Documentation</h1>
          <p>
            Welcome to the documentation for <strong>Blog Space</strong>, a
            full-stack web application that allows users to create, manage, and
            interact with blog posts. This guide provides an overview of the
            features, screenshots, and technical details of the project.
          </p>
        </header>

        <section className={classes.section}>
          <h2>Homepage</h2>
          <Image
            src={homepage}
            alt="Homepage Screenshot"
            className={classes.image}
          />
          <p>
            The homepage provides an overview of the platform, showcasing
            trending posts, and allowing users to explore content even as
            guests. Users can navigate to login, register, or browse through
            posts.
          </p>
        </section>

        <section className={classes.section}>
          <h2>User Dashboard</h2>
          <Image
            src={dashboard}
            alt="Dashboard Screenshot"
            className={classes.image}
          />
          <p>
            Once logged in, users can access their personalized dashboard. Here,
            they can create new posts, view their published content, and manage
            (edit/delete) existing posts. The dashboard also displays insights
            like the number of likes and comments on each post.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Login Page</h2>
          <Image
            src={login}
            alt="Login Page Screenshot"
            className={classes.image}
          />
          <p>
            Users can log in securely using their credentials. JWT tokens are
            utilized to maintain authentication sessions. The login process is
            smooth and redirects users to their dashboard upon successful
            authentication.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Account Creation</h2>
          <Image
            src={createAcc}
            alt="Account Creation Screenshot"
            className={classes.image}
          />
          <p>
            New users can sign up by filling out the registration form. The
            system ensures validation checks for secure and error-free account
            creation.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Create a Post</h2>
          <Image
            src={createPost}
            alt="Create Post Screenshot"
            className={classes.image}
          />
          <p>
            Users can easily create a blog post by entering the title, content,
            and uploading optional images. This feature allows users to share
            their ideas with the community in a streamlined manner.
          </p>
        </section>
      </div>
    </React.Fragment>
  );
};

export default ProjectDocumentation;
