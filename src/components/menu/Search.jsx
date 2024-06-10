import styles from "../../css/Search.module.css";

function Search() {
  return (
    <div className={styles.search_bar}>
      <input type="text" placeholder="Search..." className={styles.input} />
      <button type="submit" className={styles.search} />
    </div>
  );
}

export default Search;
