import GuestName from "./GuestName";
import PropTypes from "prop-types";
import { LABEL_CONFIRMED, LABEL_REMOVE } from "../RSVP.constants";

const Guest = ({
  name,
  isConfirmed,
  isEditing,
  toggleProperty,
  setGuestName,
  removeGuestHandler,
}) => (
  <li className="guest-list-item">
    <GuestName
      isEditing={isEditing}
      name={name}
      setGuestName={(name) => {
        setGuestName(name);
      }}
    />
    <label className="guest-confirmation-box">
      <input
        type="checkbox"
        checked={isConfirmed}
        onChange={() => {
          toggleProperty("isConfirmed");
        }}
      />{" "}
      {LABEL_CONFIRMED}
    </label>
    <button
      onClick={() => {
        toggleProperty("isEditing");
      }}
      className="guest-edit-btn"
    >
      {isEditing ? "save" : "edit"}
    </button>
    <button className="guest-remove-btn" onClick={removeGuestHandler}>
      {LABEL_REMOVE}
    </button>
  </li>
);

Guest.propTypes = {
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  toggleProperty: PropTypes.func.isRequired,
  setGuestName: PropTypes.func.isRequired,
  removeGuestHandler: PropTypes.func.isRequired,
};

export default Guest;
