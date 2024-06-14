// eslint-disable-next-line react/prop-types
function RightArrow({ setCount }) {
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
      onClick={() =>
        setCount((count) => {
          if (count < 3) return count + 1;
          else return count;
        })
      }
    />
  );
}

export default RightArrow;
