import styles from "../../css/Logo.module.css";

import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();

  return (
    <img
      className={styles.logo}
      onClick={() => {
        navigate("/");
      }}
      src="logo.png"
    />
  );
}

export default Logo;
