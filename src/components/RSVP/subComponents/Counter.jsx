import PropTypes from "prop-types";
import {
  COUNTER_ATTENDING,
  COUNTER_UNCONFIRMED,
  COUNTER_TOTAL,
} from "../RSVP.constants";

const Counter = ({
  totalInvited,
  attendingGuestsTotal,
  unconfirmedGuestsTotal,
}) => (
  <div className="table-container">
    <table className="table-content">
      <tbody>
        <tr>
          <td className="table-label">{COUNTER_ATTENDING}:</td>
          <td className="table-count">{attendingGuestsTotal}</td>
        </tr>
        <tr>
          <td className="table-label">{COUNTER_UNCONFIRMED}:</td>
          <td className="table-count">{unconfirmedGuestsTotal}</td>
        </tr>
        <tr>
          <td className="table-label">{COUNTER_TOTAL}:</td>
          <td className="table-count">{totalInvited}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

Counter.propTypes = {
  totalInvited: PropTypes.number.isRequired,
  attendingGuestsTotal: PropTypes.number.isRequired,
  unconfirmedGuestsTotal: PropTypes.number.isRequired,
};

export default Counter;
