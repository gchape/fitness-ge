import { useTranslation } from "react-i18next";
import styles from "../../css/MenuBar.module.css";

// eslint-disable-next-line react/prop-types
function MenuBar({ setMenuMode }) {
  const { t } = useTranslation();

  return (
    <div className={styles.menu} onClick={() => setMenuMode(() => true)}>
      <svg
        className={styles.svg_icon}
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line className="line1" x1="0" y1="6" x2="21" y2="6"></line>
        <line className="line2" x1="0" y1="12" x2="21" y2="12"></line>
        <line className="line3" x1="0" y1="18" x2="21" y2="18"></line>
      </svg>
      <span>{t("Menu")}</span>
    </div>
  );
}

export default MenuBar;
