import styles from "../../css/Search.module.css";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
function Search({ setMenuMode }) {
  const { t } = useTranslation();

  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  return (
    <div className={styles.search_bar}>
      <input
        type="text"
        placeholder={t("Search product...")}
        onChange={(e) => setQuery(() => e.target.value)}
        className={styles.input}
      />
      <button
        type="submit"
        className={styles.search}
        onClick={() => {
          if (query) {
            setMenuMode(() => false);
            navigate(`/search/${query}`);
          }
        }}
      />
    </div>
  );
}

export default Search;
