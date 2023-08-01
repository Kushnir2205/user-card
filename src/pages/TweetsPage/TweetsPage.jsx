import { NavLink } from "react-router-dom";
import CardList from "../../components/CardList/CardList";
import styles from "./TweetsPage.module.css";
import arrow from "../../assets/arrow-sm-left-svgrepo-com.svg";

const TweetsPage = () => {
  return (
    <>
      <NavLink className={styles.backBtn} to="/">
        Go Back
        <img
          className={styles.arrowBack}
          style={{ stroke: "gold" }}
          src={arrow}
          alt="Arrow"
        />
      </NavLink>
      <CardList />
    </>
  );
};

export default TweetsPage;
