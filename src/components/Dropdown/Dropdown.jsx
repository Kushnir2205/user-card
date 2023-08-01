import PropTypes from "prop-types";

const Dropdown = ({ filter, onchange }) => {
  return (
    <label>
      <select value={filter} onChange={onchange}>
        <option value="all">Show all</option>
        <option value="follow">Follow</option>
        <option value="following">Following</option>
      </select>
    </label>
  );
};

export default Dropdown;

Dropdown.propTypes = {
  filter: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
};
