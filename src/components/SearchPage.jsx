import styles from "../css/Products.module.css";

import { useLoaderData } from "react-router-dom";

function SearchPage() {
  const searchResults = useLoaderData();

  return (
    <div className={styles.product_list}>
      {searchResults?.map(({ url, url_image, price }) => (
        <div key={url} className={styles.product_card}>
          <img src={url_image} />
          <p>{url.match(/\/(.*?)\//)[1].replace(/-/g, " ")}</p>
          <code>{price}$</code>
        </div>
      ))}
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const searchPageLoader = async ({ params }) => {
  const supplementsData = await fetchData("/assets/gym_supplements.json");
  const accessoriesData = await fetchData("/assets/gym_accessories.json");
  const weightsData = await fetchData("/assets/gym_weights.json");

  return [
    ...supplementsData.results[0].content.results.organic.filter((s) =>
      s.title.toLowerCase().includes(params.query)
    ),
    ...accessoriesData.results[0].content.results.organic.filter((s) =>
      s.title.toLowerCase().includes(params.query)
    ),
    ...weightsData.results[0].content.results.organic.filter((s) =>
      s.title.toLowerCase().includes(params.query)
    ),
  ];
};

const fetchData = async (url) => {
  const resp = await fetch(url);
  const productData = await resp.json();

  return productData;
};

export default SearchPage;
