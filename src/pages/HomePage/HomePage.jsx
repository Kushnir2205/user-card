import { Link } from "react-router-dom";
import styles from "./HomePAge.module.css";
const HomePage = () => {
  return (
  
    <>
      <h1 className={styles.title}>
        Hi, go to the tweets and start following there
      </h1>

      <Link to="/tweet">
        <button className={styles.toTweet}>Go to tweet</button>
      </Link>
</>
  );
};

export default HomePage;
