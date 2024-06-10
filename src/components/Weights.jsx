import styles from "../css/Products.module.css";

import { useEffect, useState } from "react";

function Weights() {
  const [weights, setWeights] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await fetch("src/assets/gym_weights.json");
      const data = await resp.json();

      setWeights(() => data.results[0].content.results.organic);
    })();
  }, []);

  return (
    <div className={styles.product_list}>
      {console.log(weights)}
      {weights?.map(({ url, url_image, price }) => (
        <div key={url} className={styles.product_card}>
          <img src={url_image} />
          <p>{url.match(/\/(.*?)\//)[1].replace(/-/g, " ")}</p>
          <code>{price}$</code>
        </div>
      ))}
    </div>
  );
}

export default Weights;
