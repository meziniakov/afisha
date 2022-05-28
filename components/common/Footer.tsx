import { useRouter } from "next/router";
import React from "react";
import styles from "./Footer.module.scss";

type TypeNavItem = {
  icon: string;
  link: string;
};

const navItem: TypeNavItem[] = [
  {
    icon: "home",
    link: "/",
  },
  {
    icon: "explore",
    link: "/explore",
  },
  {
    icon: "place",
    link: "/events/kyoto",
  },
  {
    icon: "person",
    link: "/person",
  },
];

const Footer = () => {
  const { push, pathname } = useRouter();
  return (
    <footer className={styles.footer}>
      <nav>
        {navItem.map((item) => (
          <button
            className={pathname === item.link ? styles.active : ""}
            onClick={() => push(item.link)}
            key={item.icon}
          >
            <span className="material-icons">{item.icon}</span>
          </button>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
