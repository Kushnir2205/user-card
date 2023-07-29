import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./CardItem.module.css";
import picture from "../../assets/picture2 1.png";
import projectLogo from "../../assets/porjectLogo.svg";

const CardItem = ({ tweets, followers, avatar }) => {
  const [quantityFollowers, setQuantityFollowers] = useState(followers);
  const [isFollowed, setIsFollowed] = useState(false);

  const handleFollow = () => {
    setIsFollowed(!isFollowed);
    setQuantityFollowers(
      isFollowed ? quantityFollowers - 1 : quantityFollowers + 1
    );
  };

  return (
    <>
      <li className={styles.cardItem}>
        <img className={styles.projectLogo} src={projectLogo} alt="Logo" />
        <img className={styles.picture} src={picture} alt="Picture" />
        <div className={styles.centerLine}>
          <img className={styles.imageAvatar} src={avatar} alt={avatar} />
        </div>
        <span className={styles.tweets}>{tweets} TWEETS</span>
        <span className={styles.followers}>{quantityFollowers} FOLLOWERS</span>
        <button
          className={`${styles.followButton} ${
            isFollowed ? styles.following : styles.followButton
          }`}
          type="button"
          onClick={handleFollow}
        >
          {isFollowed ? "FOLLOWING" : "FOLLOW"}
        </button>
      </li>
    </>
  );
};

export default CardItem;

CardItem.propTypes = {
  user: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  avatar: PropTypes.string,
};

// const [count, setCount] = useState(0)

{
  /* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */
}
