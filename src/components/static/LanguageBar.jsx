import { useTranslation } from "react-i18next";
import styles from "../../css/LanguageBar.module.css";

function LanguageBar() {
  const lngs = {
    ka: "ka",
    en: "en",
  };

  const { i18n } = useTranslation();

  return (
    <div className={styles.language_bar}>
      <img
        src="/ge.svg"
        key={lngs.ka}
        className={styles.language}
        onClick={() => i18n.changeLanguage(lngs.ka)}
      />

      <img
        src="/en.svg"
        key={lngs.en}
        className={styles.language}
        onClick={() => i18n.changeLanguage(lngs.en)}
      />
    </div>
  );
}

export default LanguageBar;
