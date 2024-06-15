/* eslint-disable react/prop-types */
import { useState } from "react";
import useWindowWidth from "../hooks/useWindowSize";

import ServiceCard from "./ServiceCard";
import LeftArrow from "../static/LeftArrow";
import RightArrow from "../static/RightArrow";

function Services({ styles }) {
  const [count, setCount] = useState(0);
  const width = useWindowWidth();

  const services = [
    {
      img: "https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/99334b94-5373-4aec-99bb-e027c93db2e2/saitistvis.png",
      title: "Vaki and Saburtalo Branch",
      address: "Nino Ramishvili 20",
      options: [
        "Cardio Zone",
        "Heavy Weights Zone",
        "Outdoor Exercise Area",
        "Techno Gym Machines",
        "Member Lounge",
      ],
      prices: [
        { duration: 1, amount: 205 },
        { duration: 3, amount: 185 },
        { duration: 6, amount: 165 },
        { duration: 12, amount: 150 },
      ],
    },
    {
      img: "https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/a4961302-aa84-4fc2-b108-1bd56f4e47e3/1-saitistvis.png",
      title: "City Mall and Mziuri Branch",
      address: "Petre Kavtaradze 1 (City Mall)",
      options: [
        "Cardio Zone",
        "Heavy Weights Zone",
        "Life Fitness",
        "Functional Training Zone",
        "Ergoline Solarium",
      ],
      prices: [
        { duration: 1, amount: 285 },
        { duration: 3, amount: 245 },
        { duration: 6, amount: 225 },
        { duration: 12, amount: 195 },
      ],
    },
    {
      img: "https://files.elfsight.com/storage/1d330207-1ad5-4d39-bb68-27190fd2e199/62dc4a50-4b2a-4700-a676-12415b7e0e52.jpeg",
      title: "Batumi Branch",
      address: "Sherif Khimshiashvili 29 (Grand Mall)",
      options: [
        "Cardio Zone",
        "Heavy Weights Zone",
        "Techno Gym Machines",
        "Massage Area",
        "Closed Parking",
      ],
      prices: [
        { duration: 1, amount: 205 },
        { duration: 3, amount: 185 },
        { duration: 6, amount: 165 },
        { duration: 12, amount: 150 },
      ],
    },
  ];

  const match = (count) => {
    return <ServiceCard {...services[count]} />;
  };

  const prevService = () => {
    setCount((prevCount) =>
      prevCount === 0 ? services.length - 1 : prevCount - 1
    );
  };

  const nextService = () => {
    setCount((prevCount) =>
      prevCount === services.length - 1 ? 0 : prevCount + 1
    );
  };

  return (
    <div className={styles.services}>
      {width > 750 ? (
        services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))
      ) : (
        <>
          <LeftArrow onClick={prevService} />
          <RightArrow onClick={nextService} />
          {match(count)}
        </>
      )}
    </div>
  );
}

export default Services;
