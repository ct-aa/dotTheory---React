import PropTypes from "prop-types";

const PendingGuest = ({ name }) => {
  if (!name) return;

  return (
    <li className="guest-list-item">
      <span className="pending-name">{name}</span>
    </li>
  );
};

PendingGuest.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PendingGuest;
