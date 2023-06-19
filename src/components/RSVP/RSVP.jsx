import { useState } from "react";
import GuestList from "./subComponents/GuestList";
import Counter from "./subComponents/Counter";
import NewGuestForm from "./subComponents/NewGuestForm";
import ConfirmedGuestFilter from "./subComponents/ConfirmedGuestFilter";
import { HEADLINE } from "./RSVP.constants";

const RSVP = () => {
  const [isFiltered, setIsFiltered] = useState(false);
  const [pendingGuest, setPendingGuest] = useState("");
  const [guests, setGuests] = useState([]);
  const [lastGuestId, setLastGuestId] = useState(0);

  const toggleProperty = (property, id) => {
    setGuests(
      guests.map((guest) => {
        if (id === guest.id) {
          return { ...guest, [property]: !guest[property] };
        }
        return guest;
      })
    );
  };

  const setGuestName = (name, id) => {
    setGuests(
      guests.map((guest) => {
        if (id === guest.id) {
          return { ...guest, name };
        }
        return guest;
      })
    );
  };

  const addGuestHandler = (guestName) => {
    setPendingGuest(guestName);
  };

  const removeGuestHandler = (id) => {
    setGuests(guests.filter((guest) => id !== guest.id));
  };

  const newGuestId = () => {
    const id = lastGuestId;
    setLastGuestId(lastGuestId + 1);

    return id;
  };

  const submitNewGuestHandler = (e) => {
    e.preventDefault();
    const id = newGuestId();
    setGuests([
      {
        name: pendingGuest,
        isConfirmed: false,
        isEditing: false,
        id,
      },
      ...guests,
    ]);
    setPendingGuest("");
  };

  const toggleFilter = () => {
    setIsFiltered(!isFiltered);
  };

  const totalInvited = guests.length;
  const attendingGuestsTotal = guests.reduce(
    (total, guest) => (guest.isConfirmed ? total + 1 : total),
    0
  );
  const unconfirmedGuestsTotal = totalInvited - attendingGuestsTotal;

  return (
    <div>
      <h1 className="headline">{HEADLINE}</h1>
      <ConfirmedGuestFilter
        toggleFilter={toggleFilter}
        isFiltered={isFiltered}
      />
      <NewGuestForm
        addGuestHandler={addGuestHandler}
        pendingGuest={pendingGuest}
        submitNewGuestHandler={submitNewGuestHandler}
      />
      <Counter
        totalInvited={totalInvited}
        attendingGuestsTotal={attendingGuestsTotal}
        unconfirmedGuestsTotal={unconfirmedGuestsTotal}
      />
      <GuestList
        guests={guests}
        toggleProperty={toggleProperty}
        setGuestName={setGuestName}
        isFiltered={isFiltered}
        removeGuestHandler={removeGuestHandler}
        pendingGuest={pendingGuest}
      />
    </div>
  );
};

export default RSVP;
