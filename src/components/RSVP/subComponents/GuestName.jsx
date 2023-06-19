import PropTypes from "prop-types";

const GuestName = ({ isEditing, name, setGuestName }) => {
  if (isEditing) {
    return (
      <input
        type="text"
        value={name}
        onChange={(e) => setGuestName(e.target.value)}
      />
    );
  }

  return <span className="guest-name">{name}</span>;
};

GuestName.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  setGuestName: PropTypes.func.isRequired,
};

export default GuestName;
