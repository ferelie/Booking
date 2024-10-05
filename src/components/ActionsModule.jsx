import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import styles from "./ActionsModule.module.css";

const ActionsModule = () => {
  return (
    <div className={styles.buttonGroup}>
      <button className={styles.editButton}>
        <FontAwesomeIcon icon={faEdit} />
      </button>
      <button className={styles.deleteButton}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default ActionsModule;
