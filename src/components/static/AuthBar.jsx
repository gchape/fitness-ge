import styles from "../../css/AuthBar.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function AuthBar() {
  const { t } = useTranslation();

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src="login-avatar.png" width="22.5px" alt="Login Avatar" />
      <Link to={"/log-in"} className={styles.login}>
        {t("auth.log in")}
      </Link>
    </div>
  );
}

export default AuthBar;

