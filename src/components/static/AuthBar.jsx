import { Link } from "react-router-dom";
import styles from "../../css/AuthBar.module.css";

function AuthBar() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src="login-avatar.png" width="22.5px" />
      <Link to={"/user/login"} className={styles.login}>
        log in
      </Link>
      /
      <Link to={"/user/register"} className={styles.register}>
        register
      </Link>
    </div>
  );
}

export default AuthBar;
