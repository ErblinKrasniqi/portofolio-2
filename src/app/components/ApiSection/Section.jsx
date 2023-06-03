const Section = ({url, text}) => {
  return (
    <>
      <p>
        {text}
      </p>
      <img src={url} alt="" />
    </>
  );
};

export default Section;
