import PropTypes from "prop-types";
import { LABEL_FILTER_ALL } from "../RSVP.constants";

const ConfirmedGuestFilter = ({ toggleFilter, isFiltered }) => (
  <div className="confirmed-guest-filter-container">
    <div>{LABEL_FILTER_ALL}</div>
    <input type="checkbox" onChange={toggleFilter} checked={isFiltered} />
  </div>
);

ConfirmedGuestFilter.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
};

export default ConfirmedGuestFilter;
