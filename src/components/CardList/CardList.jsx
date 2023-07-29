import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../../redux/selector";
import CardItem from "../CardItem/CardItem";
import { useEffect, useState } from "react";
import { getUsersThunk } from "../../redux/thunsks";
import styles from "./CardList.module.css";

const CardList = () => {
  const [visibleCards, setVisibleCards] = useState(3);
  const dispatch = useDispatch();
  const userSelect = useSelector(selectUsers);
  const cards = userSelect;

  const showMore = () => {
    setVisibleCards(visibleCards + 3);
  };

  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  return (
    <div className={styles.cardListWrapper}>
      <ul className={styles.cardList}>
        {cards
          .filter((card, idx) => idx < visibleCards)
          .map((user) => (
            <CardItem
              key={user.id}
              tweets={user.tweets}
              followers={user.followers}
              avatar={user.avatar}
            />
          ))}
      </ul>
      {visibleCards < cards.length && (
        <button className={styles.loadMore} onClick={showMore} type="button">
          Load More
        </button>
      )}
    </div>
  );
};

export default CardList;
