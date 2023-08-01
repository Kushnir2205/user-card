import PropTypes from "prop-types";
import styles from "./Dropdown.module.css";
const Dropdown = ({ value, onchange }) => {
  return (
    <label className={styles.selectLabel}>
      <select value={value} onChange={onchange} className={styles.select}>
        <option value="all">Show all</option>
        <option value="follow">Follow</option>
        <option value="following">Following</option>
      </select>
    </label>
  );
};

export default Dropdown;

Dropdown.propTypes = {
  value: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
};
