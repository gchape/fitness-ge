import styles from "../../css/Cart.module.css";

import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

function Cart() {
  const navigate = useNavigate();
  const total = useSelector((state) => state.cartReducer.total);

  return (
    <div className={styles.wrapper}>
      <img
        src="/cart.svg"
        className={styles.cart}
        onClick={() => navigate("/cart")}
      />
      <p>{total}₾</p>
    </div>
  );
}

export default Cart;
