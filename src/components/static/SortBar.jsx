/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";

import styles from "../../css/SortBar.module.css";

function SortBar({ setData }) {
  const { t } = useTranslation();

  const handleSortChange = (e) => {
    const sortOrder = parseInt(e.target.value);
    const title = (url) => url.match(/\/(.*?)\//)[1].replace(/-/g, " ");

    setData((data) => {
      switch (e.target.selectedOptions[0].id) {
        case "Asc":
        case "Desc":
          return data
            .slice()
            .sort((item1, item2) => (item1.price - item2.price) * sortOrder);
        case "A":
        case "Z":
          return data
            .slice()
            .sort(
              (item1, item2) =>
                title(item1.url).localeCompare(title(item2.url)) * sortOrder
            );
      }
    });
  };

  return (
    <select
      className={styles.sort_bar}
      defaultValue=""
      onChange={handleSortChange}
    >
      <option defaultValue hidden>
        {t("sort.by")}
      </option>
      <optgroup label={t("Price")}>
        <option value="1" id="Asc">
          {t("sort.Ascending")}
        </option>
        <option value="-1" id="Desc">
          {t("sort.Descending")}
        </option>
      </optgroup>
      <optgroup label={t("Alphabet")}>
        <option value="1" id="A">
          {t("sort.A...Z")}
        </option>
        <option value="-1" id="Z">
          {t("sort.Z...A")}
        </option>
      </optgroup>
    </select>
  );
}

export default SortBar;
