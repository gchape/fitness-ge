/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import styles from "../../css/ServiceCard.module.css";

function ServiceCard({ img, title, address, options, prices }) {
  const { t } = useTranslation();

  return (
    <div className={styles.service_card}>
      <img src={img} />
      <h2>
        {t(title)}
        <span>{t(address)}</span>
      </h2>
      <ul>
        {options.map((option) => (
          <li key={option}>{t(option)}</li>
        ))}
      </ul>
      <div className={styles.prices}>
        <h3>
          <span>₾ {prices[0].amount}</span> / {prices[0].duration} {t("month")}
        </h3>
        <h4>
          ₾{prices[1].amount} / {prices[1].duration} {t("month")}
        </h4>
        <h5>
          ₾{prices[2].amount} / {prices[2].duration} {t("month")}
        </h5>
        <h6>
          ₾{prices[3].amount} / {prices[3].duration} {t("month")}
        </h6>
      </div>
    </div>
  );
}

export default ServiceCard;
