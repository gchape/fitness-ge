// eslint-disable-next-line react/prop-types
function RightArrow({ onClick }) {
  return (
    <img
      src="/right-arrow.svg"
      width="30px"
      style={{
        padding: "5px",
        cursor: "pointer",
        borderRadius: "40px",
        backgroundColor: "green",
        position: "absolute",
        right: "2%",
      }}
      onClick={onClick}
    />
  );
}

export default RightArrow;
