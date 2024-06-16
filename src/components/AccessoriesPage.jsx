import styles from "../css/Products.module.css";

import SortBar from "./static/SortBar";
import Product from "./static/Product";

import { useLoaderData } from "react-router-dom";
import { useState } from "react";

function AccessoriesPage() {
  const [accessories, setAccessories] = useState(useLoaderData());

  return (
    <>
      <SortBar setData={setAccessories} />
      <div className={styles.product_list}>
        {accessories?.map(({ url, url_image, price }, i) => (
          <Product
            key={url}
            product={accessories[i]}
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

export default AccessoriesPage;
