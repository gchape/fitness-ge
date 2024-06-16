import { useSelector } from "react-redux";

import ProductCard from "./static/ProductCard";

function CartPage() {
  const items = useSelector((state) => state.cartReducer.items);

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        margin: "50px",
      }}
    >
      {items.map((product, i) => (
        <ProductCard key={product.url} index={i} product={product} />
      ))}
    </div>
  );
}

export default CartPage;
