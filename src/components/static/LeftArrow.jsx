// eslint-disable-next-line react/prop-types
function LeftArrow({ onClick }) {
  return (
    <img
      src="/left-arrow.svg"
      width="30px"
      style={{
        padding: "5px",
        cursor: "pointer",
        borderRadius: "40px",
        backgroundColor: "green",
        position: "absolute",
        left: "2%",
      }}
      onClick={onClick}
    />
  );
}

export default LeftArrow;
