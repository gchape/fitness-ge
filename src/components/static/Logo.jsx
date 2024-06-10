import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();

  return (
    <img
      onClick={() => {
        navigate("/");
      }}
      src="logo.png"
      style={{
        position: "absolute",
        cursor: "pointer",
        width: "90px",
        left: "46%",
      }}
    />
  );
}

export default Logo;
