// eslint-disable-next-line react/prop-types
function LeftArrow({ setCount }) {
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
      onClick={() =>
        setCount((count) => {
          if (count > 1) return count - 1;
          else return count;
        })
      }
    />
  );
}

export default LeftArrow;
