import styles from "../css/Products.module.css";

import SortBar from "./static/SortBar";
import Product from "./static/Product";

import { useLoaderData } from "react-router-dom";
import { useState } from "react";

function SupplementsPage() {
  const [supplements, setSupplements] = useState(useLoaderData());

  return (
    <>
      <SortBar setData={setSupplements} />
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
