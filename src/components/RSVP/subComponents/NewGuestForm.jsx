import PropTypes from "prop-types";
import { LABEL_SUBMIT } from "../RSVP.constants";

const NewGuestForm = ({
  addGuestHandler,
  pendingGuest,
  submitNewGuestHandler,
}) => (
  <form className="form-container">
    <input
      type="text"
      onChange={(e) => {
        addGuestHandler(e.target.value);
      }}
      value={pendingGuest}
      placeholder="Invite someone"
    />
    <button
      onClick={submitNewGuestHandler}
      type="submit"
      className="submit-btn"
    >
      {LABEL_SUBMIT}
    </button>
  </form>
);

NewGuestForm.propTypes = {
  pendingGuest: PropTypes.array.isRequired,
  addGuestHandler: PropTypes.func.isRequired,
  submitNewGuestHandler: PropTypes.func.isRequired,
};

export default NewGuestForm;
