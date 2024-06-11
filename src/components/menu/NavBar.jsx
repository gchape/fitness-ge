import styles from "../../css/NavBar.module.css";

import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function NavBar({ setMenuMode }) {
  const action = () => setMenuMode(() => false);

  return (
    <div className={styles.navbar}>
      <NavLink to={"/supplements"} onClick={action}>
        Supplements 💊
      </NavLink>
      <NavLink to={"/accessories"} onClick={action}>
        Accessories 🛍️
      </NavLink>
      <NavLink to={"/weights"} onClick={action}>
        Weights 🏋️
      </NavLink>
      <NavLink to="/contact-us" onClick={action}>
        Contact Us 💬
      </NavLink>
    </div>
  );
}

export default NavBar;
