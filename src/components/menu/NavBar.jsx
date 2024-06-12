import { useTranslation } from "react-i18next";
import styles from "../../css/NavBar.module.css";

import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function NavBar({ setMenuMode }) {
  const { t } = useTranslation();

  const action = () => setMenuMode(() => false);

  return (
    <div className={styles.navbar}>
      <NavLink to={"/supplements"} onClick={action}>
        {t("Supplements")} 💊
      </NavLink>
      <NavLink to={"/accessories"} onClick={action}>
        {t("Accessories")} 🛍️
      </NavLink>
      <NavLink to={"/weights"} onClick={action}>
        {t("Weights")} 🏋️
      </NavLink>
      <NavLink to="/contact-us" onClick={action}>
        {t("Contact Us")} 💬
      </NavLink>
    </div>
  );
}

export default NavBar;
