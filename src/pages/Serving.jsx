import useFetchReservations from "../hooks/useFetchReservations";
const Serving = () => {
  //   const dummyReservations = [
  //     {
  //       id: 1,
  //       name: "John Doe",
  //       nid: "1234567890",
  //       date: "2022-01-01",
  //       time: "11:00",
  //       createdAt: "2022-01-01T10:00:00Z",
  //     },
  //     {
  //       id: 2,
  //       name: "Jane Doe",
  //       nid: "1234567890",
  //       date: "2024-10-04",
  //       time: "23:15",
  //       createdAt: "2022-01-01T10:30:00Z",
  //     },
  //   ];

  const reservations = useFetchReservations([]);

  function logCurrentPatient(reservations) {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    return reservations.find((reservation) => {
      const scheduledTime = new Date(
        `${reservation.date}T${reservation.time}:00`
      );

      const scheduledHour = scheduledTime.getHours();
      const scheduledMinute = scheduledTime.getMinutes();

      let endTimeHour = scheduledHour;
      let endTimeMinute = scheduledMinute + 30;

      if (endTimeMinute > 60) {
        endTimeHour += 1;
        endTimeMinute -= 60;
      }

      return (
        (currentHour === scheduledHour &&
          currentMinute >= scheduledMinute &&
          currentMinute < endTimeMinute) ||
        (currentHour === endTimeHour && currentMinute < endTimeMinute)
      );
    });
  }

  const currentPatient = logCurrentPatient(reservations);

  return (
    <div
      style={{
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 48,
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      {currentPatient && (
        <p>
          Current Patient:{" "}
          <span style={{ color: "#007bff" }}>{currentPatient.name}</span>
        </p>
      )}
    </div>
  );
};

export default Serving;
