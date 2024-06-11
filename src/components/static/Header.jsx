import styles from "../../css/Header.module.css";

import LanguageBar from "./LanguageBar";

// eslint-disable-next-line react/prop-types
function Header({ children }) {
  return (
    <>
      <LanguageBar />
      <div className={styles.header}>{children}</div>
      <hr className={styles.hr} />
    </>
  );
}

export default Header;
