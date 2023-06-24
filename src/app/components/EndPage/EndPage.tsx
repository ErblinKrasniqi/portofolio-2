import classes from "./EndPage.module.scss";
const EndPage = () => {
  return (
    <div className={classes.container}>
      <div>
        <img src="code.svg" alt="" />
        <h2>
          View my{" "}
          <a target="_blank" href="https://github.com/ErblinKrasniqi">
            Github
          </a>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          porro unde. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Quibusdam?
        </p>
        <button>
          <a target="_blank" href="https://github.com/ErblinKrasniqi">
            Link to GitHub
          </a>
        </button>
      </div>
      <div>
        <img src="linkedin.svg" alt="" />
        <h2>
          View my{" "}
          <a target="_blank" href="https://www.linkedin.com/in/erblinkrasniqi/">
            Linkedin
          </a>
        </h2>
        <p>
          Everything you need to build your site exactly how you imagine, from
          automatic API handling to built-in image and performance
          optimizations.
        </p>
        <button>
          <a target="_blank" href="https://www.linkedin.com/in/erblinkrasniqi/">
            Link to LinkedIn
          </a>
        </button>
      </div>
      <div>
        <img src="email.svg" alt="" />
        <h2>
          View my <a>Email</a>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          porro unde. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Quibusdam?
        </p>
        <button>Link to Email</button>
      </div>
    </div>
  );
};

export default EndPage;
