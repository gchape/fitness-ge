import styles from "../../css/Menu.module.css";
import NavBar from "./NavBar";
import Search from "./Search";

// eslint-disable-next-line react/prop-types
function Menu({ setMenuMode }) {
  return (
    <div className={styles.overlay} onClick={() => setMenuMode(() => false)}>
      <div className={styles.menu} onClick={(e) => e.stopPropagation()}>
        <Search />
        <NavBar setMenuMode={setMenuMode} />
      </div>
    </div>
  );
}

export default Menu;
