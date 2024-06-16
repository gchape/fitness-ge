import styles from "../css/Products.module.css";

import SortBar from "./static/SortBar";
import Product from "./static/Product";

import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function WeightsPage() {
  const [weights, setWights] = useState(useLoaderData());

  return (
    <>
      <SortBar setData={setWights} />
      <div className={styles.product_list}>
        {weights?.map(({ url, url_image, price }, i) => (
          <Product
            key={url}
            product={weights[i]}
            url_image={url_image}
            styles={styles}
            price={price}
            url={url}
          />
        ))}
      </div>
    </>
  );
}

export default WeightsPage;
