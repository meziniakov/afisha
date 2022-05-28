import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.headnavbar}>
        <div className={styles.navContainer}>
          <div className={styles.navHeader}>
            <a href="#" className={styles.brand}>
              <svg
                className="fill-current h-8 w-8 mr-2"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
              </svg>
              <span className="font-semibold text-xl tracking-tight">
                Tailwind CSS
              </span>
            </a>
            <a href="#" className="brand brand-overlay"></a>
            <button className="toggle-bar core-nav-toggle">
              <span className="ti-align-justify"></span>
            </button>
          </div>
          <div className={styles.wrapCoreNavList}>
            <ul className={styles.menuCoreNavList}>
              <li className={styles.dropdown}>
                <a href="">Home</a>
                <ul className={styles.dropdownMenu}>
                  <li className="dropdown">
                    <a href="">Standard Style</a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="index.html">Home Style 1</a>
                      </li>
                    </ul>
                  </li>
                  <li className={styles.dropdown}>
                    <a href="">Air BNB Style</a>
                    <ul className={styles.dropdownMenu}>
                      <li>
                        <a href="home-2.html">Home Style 1</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className={styles.dropdown}>
                <a href="" className="active">
                  Explore
                </a>
                <ul className={styles.dropdownMenu}>
                  <li>
                    <a href="hotels.html">
                      <div className="mg-menu-items">
                        <i className="lni-apartment"></i>
                        <h5>
                          Find Hotels<span>Search Your Hotels</span>
                        </h5>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>

              <li className={styles.dropdown}>
                <a href="">Listings</a>
                <ul className={styles.dropdownMenu}>
                  <li className={styles.dropdown}>
                    <a href="">List Layouts</a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="list-layout-with-sidebar.html">With Sadebar</a>
                      </li>
                    </ul>
                  </li>
                  <li className={styles.dropdown}>
                    <a href="">Grid Layouts</a>
                    <ul className={styles.dropdownMenu}>
                      <li>
                        <a href="grid-with-sidebar.html">With Sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li className={styles.dropdown}>
                    <a href="">Half Map Screen</a>
                    <ul className={styles.dropdownMenu}>
                      <li>
                        <a href="half-map-with-list-layout.html">
                          With List Layout
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className={styles.dropdown}>
                    <a href="">Single Listing</a>
                    <ul className={styles.dropdownMenu}>
                      <li>
                        <a href="single-property-1.html">Single Listing 1</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#" data-toggle="modal" data-target="#signup">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={styles.dropdownOverlay}></div>
    </div>
  );
};

export default Header;
