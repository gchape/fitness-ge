/* eslint-disable react/prop-types */
import styles from "../../css/ProductCard.module.css";

import { useDispatch } from "react-redux";

function ProductCard({ index, product }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        <img src={product.url_image} alt={product.title} />
      </div>
      <div className={styles.productDetails}>
        <h2>{product.title}</h2>
        <p className={styles.price}>Price: ₾{product.price}</p>
        <p className={styles.rating}>Rating: {product.rating}</p>
        <p className={styles.sales_volume}>
          Sales Volume: {product.sales_volume}
        </p>
      </div>
      <button
        onClick={() => {
          dispatch({
            type: "cart/remove",
            amount: product.price,
            index: index,
          });
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default ProductCard;
