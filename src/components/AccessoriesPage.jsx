import styles from "../css/Products.module.css";

import SortBar from "./static/SortBar";
import Product from "./static/Product";

import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import FilterBar from "./static/FilterBar";

function AccessoriesPage() {
  const [accessories, setAccessories] = useState(useLoaderData());

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <FilterBar items={accessories} setFilteredItems={setAccessories} />
        <SortBar setData={setAccessories} />
      </div>
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
