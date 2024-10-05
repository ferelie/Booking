import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import AddReservation from "./components/AddReservation";
import ViewReservations from "./components/ViewReservations";
import Serving from "./pages/Serving";
import styles from "./App.module.css";

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Navigation />
        <main className={styles.mainContent}>
          <Routes>
            <Route path="/" element={<ViewReservations />} />
            <Route path="/add" element={<AddReservation />} />
            <Route path="/edit/:id" element={<AddReservation />} />
            <Route path="/serving" element={<Serving/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
