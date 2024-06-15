import { useTranslation } from "react-i18next";
import styles from "../../css/NavBar.module.css";
import { NavLink } from "react-router-dom";

function NavBar({ setMenuMode }) {
  const { t } = useTranslation();

  const handleMenuClose = () => {
    setMenuMode(false);
  };

  return (
    <div className={styles.navbar}>
      <NavLink to={"/supplements"} onClick={handleMenuClose}>
        {t("navbar.Supplements")} 💊
      </NavLink>
      <NavLink to={"/accessories"} onClick={handleMenuClose}>
        {t("navbar.Accessories")} 🛍️
      </NavLink>
      <NavLink to={"/weights"} onClick={handleMenuClose}>
        {t("navbar.Weights")} 🏋️
      </NavLink>
      <NavLink to="/contact-us" onClick={handleMenuClose}>
        {t("Contact Us")} 💬
      </NavLink>
    </div>
  );
}

export default NavBar;
