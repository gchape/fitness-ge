/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

function Product({ styles, url, url_image, price, product }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <div key={url} className={styles.product_card}>
      <img src={url_image} />
      <p>{url.match(/\/(.*?)\//)[1].replace(/-/g, " ")}</p>
      <code>{price}₾</code>
      <button
        onClick={() => {
          dispatch({
            type: "cart/add",
            amount: price,
            item: { ...product },
          });
        }}
      >
        {t("Add to cart")}
      </button>
    </div>
  );
}

export default Product;
