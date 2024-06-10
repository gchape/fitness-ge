import styles from "../css/Products.module.css";

import { useEffect, useState } from "react";

function Accessories() {
  const [accessories, setAccessories] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await fetch("src/assets/gym_accessories.json");
      const data = await resp.json();

      setAccessories(() => data.results[0].content.results.organic);
    })();
  }, []);

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
