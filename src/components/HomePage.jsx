import styles from "../css/HomePage.module.css";

import { Outlet, useLocation } from "react-router-dom";
import Index from "./index/Index";

function HomePage() {
  const url = useLocation();

  return (
    <>
      <Index />
      {url.pathname === "/" ? (
        <>
          <main className={styles.main}></main>
          <div className={styles.services}>
            <div className={styles.service_card}>
              <img
                src="https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/99334b94-5373-4aec-99bb-e027c93db2e2/saitistvis.png"
                alt=""
              />
              <h2>
                ვაკის და საბურთალოს ფილიალი
                <span> ნინო რამიშვილის 20 - სანდრო ეულის 7 </span>
              </h2>
              <ul>
                <li>კარდიო ზონა</li>
                <li>მძიმე წონების ზონა</li>
                <li>გარე სავარჯიშო სივრცე</li>
                <li>Techno Gym ტრენაჟორები</li>
                <li>წევრთა ლაუნჯი</li>
                <li>მასაჟის სივრცე</li>
              </ul>
              <div className={styles.prices}>
                <h3>
                  <span>₾ 205</span> / 1 თვე
                </h3>
                <h4>₾185 / 3 თვე (₾555)</h4>
                <h5>₾165/ 6 თვე (₾990)</h5>
                <h6>₾150 / 12 თვე (₾1,805)</h6>
              </div>
            </div>

            <div className={styles.service_card}>
              <img
                src="https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/a4961302-aa84-4fc2-b108-1bd56f4e47e3/1-saitistvis.png"
                alt=""
              />
              <h2>
                სითი მოლის და მზიურის ფილიალი
                <span>
                  პეტრე ქავთარაძე 1 (სითი მოლი) - ჭაბუა ამირეჯიბის 2 (მზიური
                  ბიზნეს ცენტრი){" "}
                </span>
              </h2>
              <ul>
                <li>კარდიო ზონა</li>
                <li>მძიმე წონების ზონა</li>
                <li>Life Fitness ტრენაჟორები</li>
                <li>ჯგუფური ვარჯიშების სტუდია</li>
                <li>ფუნქციონალური ვარჯიშების ზონა</li>
                <li>Ergoline სოლარიუმი</li>
              </ul>
              <div className={styles.prices}>
                <h3>
                  <span>₾ 285</span> / 1 თვე
                </h3>
                <h4>₾245 / 3 თვე (₾555)</h4>
                <h5>₾225/ 6 თვე (₾990)</h5>
                <h6>₾195 / 12 თვე (₾1,805)</h6>
              </div>
            </div>

            <div className={styles.service_card}>
              <img
                src="https://files.elfsight.com/storage/1d330207-1ad5-4d39-bb68-27190fd2e199/62dc4a50-4b2a-4700-a676-12415b7e0e52.jpeg"
                alt=""
              />
              <h2>
                ბათუმის ფილიალი
                <span> შერიფ ხიმსიაშვილის 29 (გრანდ მოლი) </span>
              </h2>
              <ul>
                <li>კარდიო ზონა</li>
                <li>მძიმე წონების ზონა</li>
                <li>Techno Gym ტრენაჟორები</li>
                <li>მასაჟის სივრცე</li>
                <li>დახურული პარკინგი</li>
              </ul>
              <div className={styles.prices}>
                <h3>
                  <span>₾ 205</span> / 1 თვე
                </h3>
                <h4>₾185 / 3 თვე (₾555)</h4>
                <h5>₾165/ 6 თვე (₾990)</h5>
                <h6>₾150 / 12 თვე (₾1,805)</h6>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default HomePage;
