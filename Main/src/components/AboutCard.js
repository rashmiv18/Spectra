function AboutCard(props) {
  return (
    <div style={{ margin: "3rem 16rem" }}>
      <img
        src={props.src}
        alt="illustration"
        style={{ width: "16rem", marginRight: "5rem", float: "left" }}
      />
      <div style={{ textAlign: "center" }}>
        <h2
          style={{
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "1.5rem",
            lineHeight: "38px",
            color: "#7bb1be",
            margin: "2rem 0",
            width: "90%",
          }}
        >
          {props.h2}
        </h2>
        <p
          style={{
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "1.2rem",
            lineHeight: "33px",
            color: "#606060",
          }}
        >
          {props.p}
        </p>
        <br />
        <br />
      </div>
    </div>
  );
}

export default AboutCard;
