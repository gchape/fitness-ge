import { useTranslation } from "react-i18next";

function SortBar({ setData }) {
  const { t } = useTranslation();

  const selectStyle = {
    marginLeft: "10px",
    padding: "8px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
    maxWidth: "180px",
    boxSizing: "border-box",
  };

  const handleSortChange = (e) => {
    const sortOrder = parseInt(e.target.value);

    setData((data) =>
      data.slice().sort((d1, d2) => (d1.price - d2.price) * sortOrder)
    );
  };

  return (
    <select style={selectStyle} defaultValue="" onChange={handleSortChange}>
      <option defaultValue hidden>
        {t("sort.by")}
      </option>
      <optgroup label={t("Price")}>
        <option value="1">{t("sort.Ascending")}</option>
        <option value="-1">{t("sort.Descending")}</option>
      </optgroup>
    </select>
  );
}

export default SortBar;
