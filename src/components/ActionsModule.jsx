import { ref, remove } from "firebase/database";
import { database } from "../firebase/config";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import styles from "./ActionsModule.module.css";

const ActionsModule = ({ reservationID, handleRefresh }) => {
  const handleDelete = () => {
    console.log(reservationID);
    const reservationRef = ref(database, `reservations/${reservationID}`);
    remove(reservationRef)
      .then(() => {
        console.log("Reservation deleted successfully!");
        handleRefresh();
      })
      .catch((error) => {
        console.error("Error deleting reservation:", error);
      });
  };

  return (
    <div className={styles.buttonGroup}>
      <button className={styles.editButton}>
        <FontAwesomeIcon icon={faEdit} />
      </button>
      <button className={styles.deleteButton} onClick={handleDelete}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

ActionsModule.propTypes = {
  reservationID: PropTypes.string.isRequired,
  handleRefresh: PropTypes.func.isRequired,
};

export default ActionsModule;
