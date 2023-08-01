import PropTypes from "prop-types";
import styles from "./CardItem.module.css";
import picture from "../../assets/picture2 1.png";
import projectLogo from "../../assets/porjectLogo.svg";
import { useDispatch } from "react-redux";
import { editUsersThunk, getUsersThunk } from "../../redux/thunsks";

const CardItem = ({ tweets, followers, avatar, id, isFollowed }) => {
  const dispatch = useDispatch();

  const handleFollow = () => {
    dispatch(
      editUsersThunk({
        id,
        followers: isFollowed ? followers - 1 : followers + 1,
        isFollowed: !isFollowed,
      })
    ).then(() => {
      dispatch(getUsersThunk());
    });
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
        <span className={styles.followers}>{followers} FOLLOWERS</span>
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
  id: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  avatar: PropTypes.string,
  isFollowed: PropTypes.bool.isRequired,
};
