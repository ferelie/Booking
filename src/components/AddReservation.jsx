import { useState, useEffect } from 'react';
import { ref, push, set, get, query, orderByChild, equalTo } from 'firebase/database';
import { database } from '../firebase/config';
import styles from './AddReservation.module.css';

function AddReservation() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [nid, setNid] = useState('');
  const [notification, setNotification] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if NID already exists
      const reservationsRef = ref(database, 'reservations');
      const nidQuery = query(reservationsRef, orderByChild('nid'), equalTo(nid));
      
      try {
        const snapshot = await get(nidQuery);
        if (snapshot.exists()) {
          setNotification({ type: 'error', message: 'A reservation with this National ID already exists.' });
          return;
        }
      } catch (error) {
        console.error("Error checking for existing NID:", error);
        // If there's an error checking for existing NID, we'll proceed with adding the reservation
        console.warn("Proceeding with reservation creation without NID check.");
      }

      const newReservationRef = push(ref(database, 'reservations'));
      
      await set(newReservationRef, {
        name,
        date,
        time,
        nid,
        createdAt: new Date().toISOString()
      });

      console.log("Reservation added with key: ", newReservationRef.key);
      
      setNotification({ type: 'success', message: 'Reservation added successfully!' });
      
      // Clear the form
      setName('');
      setDate('');
      setTime('');
      setNid('');
    } catch (error) {
      console.error("Error adding reservation: ", error);
      setNotification({ type: 'error', message: 'Failed to add reservation. Please try again.' });
    }
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add Reservation</h2>
      {notification && (
        <div className={`${styles.notification} ${styles[notification.type]}`}>
          {notification.message}
        </div>
      )}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="nid" className={styles.label}>National ID</label>
          <input
            id="nid"
            type="text"
            placeholder="Enter your National ID"
            value={nid}
            onChange={(e) => setNid(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="date" className={styles.label}>Date</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="time" className={styles.label}>Time</label>
          <input
            id="time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>Add Reservation</button>
      </form>
    </div>
  );
}

export default AddReservation;