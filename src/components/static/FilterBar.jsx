/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "../../css/FilterBar.module.css";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

function FilterBar({ items, setFilteredItems }) {
  const maxPriceRef = useRef();
  const { t } = useTranslation();
  const itemsRef = useRef(items.slice());

  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [ratingRange, setRatingRange] = useState({ min: 0, max: 5 });

  useEffect(() => {
    maxPriceRef.current = parseInt(
      items.reduce((curr, item) => (item.price > curr ? item.price : curr), 0)
    );

    setPriceRange({ ...priceRange, max: maxPriceRef.current });
  }, [items, priceRange]);

  const handlePriceChange = (e) => {
    const newMin = parseInt(e.target.value);
    setPriceRange({ ...priceRange, min: newMin });

    setFilteredItems(() =>
      itemsRef.current.filter((item1) => item1.price >= newMin)
    );
  };

  const handleRatingChange = (e) => {
    const newMin = parseFloat(e.target.value);
    setRatingRange({ ...ratingRange, min: newMin });

    setFilteredItems(() =>
      itemsRef.current.filter((item1) => item1.rating >= newMin)
    );
  };

  return (
    <div className={styles.filter_bar}>
      <div className={styles.filter_section}>
        <label htmlFor="priceRange">{t("Price Range")}:</label>
        <div className={styles.range_slider}>
          <input
            type="range"
            id="priceRange"
            min={0}
            max={maxPriceRef.current}
            value={priceRange.min}
            onChange={handlePriceChange}
          />
          <span>
            ₾{priceRange.min} - ₾{priceRange.max}
          </span>
        </div>
      </div>
      <div className={styles.filter_section}>
        <label htmlFor="ratingRange">{t("Rating Range")}:</label>
        <div className={styles.range_slider}>
          <input
            type="range"
            id="ratingRange"
            min={0}
            max={5}
            step={0.1}
            value={ratingRange.min}
            onChange={handleRatingChange}
          />
          <span>
            {ratingRange.min} - {ratingRange.max}
          </span>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
