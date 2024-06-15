import { useTranslation } from "react-i18next";
import styles from "../../css/LanguageBar.module.css";

function LanguageBar() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.language_bar}>
      <img
        src="/ge.svg"
        className={styles.language}
        alt="Georgian"
        onClick={() => changeLanguage("ka")}
      />

      <img
        src="/en.svg"
        className={styles.language}
        alt="English"
        onClick={() => changeLanguage("en")}
      />
    </div>
  );
}

export default LanguageBar;
