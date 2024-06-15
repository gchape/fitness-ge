import styles from "../css/HomePage.module.css";

import { Outlet, useLocation } from "react-router-dom";

import Index from "./index/Index";
import Aside from "./static/Aside";
import Services from "./static/Services";

function HomePage() {
  const url = useLocation();

  return (
    <>
      <Index />
      {url.pathname === "/" ? (
        <>
          <Aside />
          <main className={styles.main}>
            <Services styles={styles} />
          </main>
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default HomePage;
