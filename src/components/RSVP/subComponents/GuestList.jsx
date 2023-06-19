import Guest from "./Guest";
import "../RSVP.css";
import PropTypes from "prop-types";
import PendingGuest from "./PendingGuest";

const GuestList = ({
  guests,
  toggleProperty,
  setGuestName,
  isFiltered,
  removeGuestHandler,
  pendingGuest,
}) => (
  <ul className="guest-list-container">
    <PendingGuest name={pendingGuest} />
    {guests
      .filter((guest) => !isFiltered || guest.isConfirmed)
      .map((guest, index) => (
        <Guest
          key={index}
          name={guest.name}
          isConfirmed={guest.isConfirmed}
          isEditing={guest.isEditing}
          toggleProperty={(property) => {
            toggleProperty(property, guest.id);
          }}
          setGuestName={(name) => setGuestName(name, guest.id)}
          removeGuestHandler={() => {
            removeGuestHandler(guest.id);
          }}
        />
      ))}
  </ul>
);

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleProperty: PropTypes.func.isRequired,
  setGuestName: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  removeGuestHandler: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
};

export default GuestList;
