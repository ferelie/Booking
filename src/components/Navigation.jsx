
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
            }
            end
          >
            View Reservations
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink 
            to="/add" 
            className={({ isActive }) => 
              isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink
            }
          >
            Add Reservation
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;