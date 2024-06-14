import styles from "../css/HomePage.module.css";

import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import Index from "./index/Index";
import Aside from "./static/Aside";
import LeftArrow from "./static/LeftArrow";
import RightArrow from "./static/RightArrow";
import ServiceCard from "./static/ServiceCard";
import { useTranslation } from "react-i18next";

function HomePage() {
  const url = useLocation();
  const { t } = useTranslation();
  const [count, setCount] = useState(1);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(() => window.innerWidth));

    return () => {
      window.removeEventListener("resize", () =>
        setWidth(() => window.innerWidth)
      );
    };
  }, []);

  const serviceOneRef = useRef(
    <ServiceCard
      img="https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/99334b94-5373-4aec-99bb-e027c93db2e2/saitistvis.png"
      title="ვაკის და საბურთალოს ფილიალი"
      address="ნინო რამიშვილის 20"
      options={[
        "კარდიო ზონა",
        "მძიმე წონების ზონა",
        "გარე სავარჯიშო სივრცე",
        "Techno Gym ტრენაჟორები",
        "წევრთა ლაუნჯი",
      ]}
    >
      <h3>
        <span>₾ 205</span> / 1 თვე
      </h3>
      <h4>₾185 / 3 თვე (₾555)</h4>
      <h5>₾165/ 6 თვე (₾990)</h5>
      <h6>₾150 / 12 თვე (₾1,805)</h6>
    </ServiceCard>
  );

  const serviceTwoRef = useRef(
    <ServiceCard
      img={
        "https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/a4961302-aa84-4fc2-b108-1bd56f4e47e3/1-saitistvis.png"
      }
      title={"სითი მოლის და მზიურის ფილიალი"}
      address={"პეტრე ქავთარაძე 1 (სითი მოლი)"}
      options={[
        "კარდიო ზონა",
        "მძიმე წონების ზონა",
        "Life Fitness",
        "ფუნქციონალური ვარჯიშების ზონა",
        "Ergoline სოლარიუმი",
      ]}
    >
      <h3>
        <span>₾ 285</span> / 1 თვე
      </h3>
      <h4>₾245 / 3 თვე (₾555)</h4>
      <h5>₾225/ 6 თვე (₾990)</h5>
      <h6>₾195 / 12 თვე (₾1,805)</h6>
    </ServiceCard>
  );

  const serviceThreeRef = useRef(
    <ServiceCard
      img={
        "https://files.elfsight.com/storage/1d330207-1ad5-4d39-bb68-27190fd2e199/62dc4a50-4b2a-4700-a676-12415b7e0e52.jpeg"
      }
      title={"ბათუმის ფილიალი"}
      address={"შერიფ ხიმსიაშვილის 29 (გრანდ მოლი)"}
      options={[
        "კარდიო ზონა",
        "მძიმე წონების ზონა",
        "Techno Gym ტრენაჟორები",
        "მასაჟის სივრცე",
        "დახურული პარკინგი",
      ]}
    >
      <h3>
        <span>₾ 205</span> / 1 თვე
      </h3>
      <h4>₾185 / 3 თვე (₾555)</h4>
      <h5>₾165/ 6 თვე (₾990)</h5>
      <h6>₾150 / 12 თვე (₾1,805)</h6>
    </ServiceCard>
  );

  const match = (count) => {
    switch (count) {
      case 1:
        return serviceOneRef.current;
      case 2:
        return serviceTwoRef.current;
      default:
        return serviceThreeRef.current;
    }
  };

  return (
    <>
      <Index />
      {url.pathname === "/" ? (
        <>
          <Aside />
          <main className={styles.main}>
            <div className={styles.services}>
              {width > 750 ? (
                <>
                  {serviceOneRef.current}
                  {serviceTwoRef.current}
                  {serviceThreeRef.current}
                </>
              ) : (
                <>
                  <LeftArrow setCount={setCount} />
                  <RightArrow setCount={setCount} />
                  {match(count)}
                </>
              )}
            </div>
          </main>
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default HomePage;
