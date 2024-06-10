import styles from "../../css/LanguageBar.module.css";

function LanguageBar() {
  return (
    <div className={styles.language_bar}>
      <img
        src="ge.svg"
        className={styles.language}
      />
      <img
        src="en.svg"
        className={styles.language}
      />
    </div>
  );
}

export default LanguageBar;
