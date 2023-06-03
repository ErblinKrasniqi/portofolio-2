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
          porro unde. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Quibusdam?
        </p>
        <button>Link to GitHub</button>
      </div>
      <div>
        <img src="linkedin.svg" alt="" />
        <h2>
          View my <a>Linkedin</a>
        </h2>
        <p>
          Everything you need to build your site exactly how you imagine, from
          automatic API handling to built-in image and performance
          optimizations.
        </p>
        <button>Link to Linkedin</button>
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
