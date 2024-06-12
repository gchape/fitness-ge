import styles from "../css/HomePage.module.css";

import { Outlet, useLocation } from "react-router-dom";
import Index from "./index/Index";

function HomePage() {
  const url = useLocation();

  return (
    <>
      <Index />
      {url.pathname === "/" ? (
        <main className={styles.main}>
        </main>
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default HomePage;
