import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink className={styles.navLink} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.navLink} to="tweet">
                Tweets
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.borderBottom}></div>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
