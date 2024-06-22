import styles from "../css/Products.module.css";

import SortBar from "./static/SortBar";
import Product from "./static/Product";

import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import FilterBar from "./static/FilterBar";

function SupplementsPage() {
  const [supplements, setSupplements] = useState(useLoaderData());

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <FilterBar items={supplements} setFilteredItems={setSupplements} />
        <SortBar setData={setSupplements} />
      </div>
      <div className={styles.product_list}>
        {supplements?.map(({ url, url_image, price }, i) => (
          <Product
            key={url}
            product={supplements[i]}
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

export default SupplementsPage;
