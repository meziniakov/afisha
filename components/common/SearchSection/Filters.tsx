import { useRouter } from "next/router";
import { FC, useState } from "react";
import { IEvent } from "../../../types/event";
import styles from "./Filters.module.scss";

const prices = [
  {
    price: 700,
  },
  {
    price: 1000,
  },
  {
    price: 1500,
  },
];

const Filters = ({ eventsAll }) => {
  console.log(eventsAll);
  const { push } = useRouter();
  // const [priceFilter, setPriceFilter] = useState<number>();
  return (
    <div className={styles.filterGroup}>
      {eventsAll
        .map((event) => event.price)
        .filter((item, index, arr) => {
          return arr.indexOf(item) === index;
        })
        .sort((a, b) => a - b)
        .map((item, index) => (
          <button
            onClick={(e) => push(`?price=${item}`)}
            key={index}
            type="button"
            className={styles.filterBtn}
          >
            {item}
          </button>
        ))}
    </div>
  );
};

export default Filters;
