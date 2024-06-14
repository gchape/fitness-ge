/* eslint-disable react/prop-types */
import styles from "../../css/ServiceCard.module.css";

// eslint-disable-next-line react/prop-types
function ServiceCard({ img, title, address, options, children }) {
  return (
    <div className={styles.service_card}>
      <img src={img} />
      <h2>
        {title}
        <span>{address}</span>
      </h2>
      <ul>
        {options.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ul>
      <div className={styles.prices}>{children}</div>
    </div>
  );
}

export default ServiceCard;
