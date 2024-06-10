import styles from "../css/Products.module.css";

import { useEffect, useState } from "react";

function Supplements() {
  const [supplements, setSupplements] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await fetch("src/assets/gym_supplements.json");
      const data = await resp.json();

      setSupplements(() => data.results[0].content.results.organic);
    })();
  }, []);

  return (
    <div className={styles.product_list}>
      {console.log(supplements)}
      {supplements?.map(({ url, url_image, price }) => (
        <div key={url} className={styles.product_card}>
          <img src={url_image} />
          <p>{url.match(/\/(.*?)\//)[1].replace(/-/g, " ")}</p>
          <code>{price}$</code>
        </div>
      ))}
    </div>
  );
}

export default Supplements;
