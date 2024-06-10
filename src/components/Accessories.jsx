import styles from "../css/Products.module.css";

import { useLoaderData } from "react-router-dom";

function Accessories() {
  const accessories = useLoaderData();

  return (
    <div className={styles.product_list}>
      {console.log(accessories)}
      {accessories?.map(({ url, url_image, price }) => (
        <div key={url} className={styles.product_card}>
          <img src={url_image} />
          <p>{url.match(/\/(.*?)\//)[1].replace(/-/g, " ")}</p>
          <code>{price}$</code>
        </div>
      ))}
    </div>
  );
}

export default Accessories;
