import classes from "./Code.module.scss";

const Code = () => {
  return (
    <div className={classes.grid}>
      <div className={classes.container}>
        <div className={classes.numbers}>
          <h4>1</h4>
          <h4>2</h4>
          <h4>3</h4>
          <h4>4</h4>
          <h4>5</h4>
          <h4>6</h4>
          <h4>7</h4>
          <h4>8</h4>
          <h4>9</h4>
          <h4>10</h4>
        </div>
        <pre>
          <code>
            {``}
            <span>let</span>
            {` message = `}
            <spang>"bye world"</spang>
            {`;

`}
            <span>if</span>
            {` (this > that) {
  console.log(`}
            <spang>"Hello world"</spang>
            {`);
} else {
  return message;
}

`}
            <span>const</span>
            {` home = (not) => {
  message = 2 + not;
}`}
          </code>
        </pre>
      </div>
      <div className={`${classes.container} ${classes.containerSecond}`}>
        <div className={classes.numbers}>
          <h4>1</h4>
          <h4>2</h4>
          <h4>3</h4>
          <h4>4</h4>
          <h4>5</h4>
          <h4>6</h4>
          <h4>7</h4>
          <h4>8</h4>
          <h4>9</h4>
          <h4>10</h4>
        </div>
        <pre>
          <code>
            {``}
            <span>let</span>
            {` message = `}
            <spang>"bye world"</spang>
            {`;

`}
            <span>if</span>
            {` (this > that) {
  console.log(`}
            <spang>"Hello world"</spang>
            {`);
} else {
  return message;
}

`}
            <span>const</span>
            {` home = (not) => {
  message = 2 + not;
}`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Code;
