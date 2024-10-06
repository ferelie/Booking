import useFetchReservations from "../hooks/useFetchReservations";
import {useState} from 'react';
import ActionsModule from "./ActionsModule";
import styles from "./ViewReservations.module.css";

function ViewReservations() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const reservations = useFetchReservations([], refreshTrigger);

  const handleRefresh = () => {
    setRefreshTrigger(prevValue => prevValue + 1);
  }
  console.log(reservations);

  return (
    <div>
      <h2 className={styles.title}>Reservations for Today</h2>
      <div className={styles.buttonContainer}>
        <button className={styles.viewAllButton}>View All</button>
        <button className={styles.viewTodayButton}>
          View Today&apos;s Appointments
        </button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>Name</th>
            <th className={styles.tableHeader}>National ID</th>
            <th className={styles.tableHeader}>Date</th>
            <th className={styles.tableHeader}>Time</th>
            <th className={styles.tableHeader}>Created At</th>
            <th className={styles.tableHeader}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.id} className={styles.tableRow}>
              <td className={styles.tableData}>{reservation.name}</td>
              <td className={styles.tableData}>{reservation.nid}</td>
              <td className={styles.tableData}>{reservation.date}</td>
              <td className={styles.tableData}>{reservation.time}</td>
              <td className={styles.tableData}>{reservation.createdAt}</td>
              <td className={styles.tableData}>
                <ActionsModule reservationID={reservation.id} handleRefresh={handleRefresh} />

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewReservations;
