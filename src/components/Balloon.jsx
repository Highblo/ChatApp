
export const Balloon = (props) => {

  const { backgroundColor, top, bottom, left, right, children } = props;

  const balloonStyle = {
    position: "absolute",
    top,
    bottom,
    left,
    right,
    backgroundColor,
    width: "180px",
    padding: "24px",
    fontSize: "1.5rem",
    textAlign: "center",
    borderRadius: "25px 180px 180px",
  };

  return (
    <div className="balloon" style={balloonStyle}>{children}</div>
  );
};