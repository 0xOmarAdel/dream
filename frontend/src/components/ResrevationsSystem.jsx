// ReservationSystem.js

import tableIcon from "../assets/table.png";

const ReservationSystem = ({ selectedSeats, setSelectedSeats }) => {
  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats((prevState) =>
        prevState.filter((seat) => seat !== seatNumber)
      );
    } else {
      setSelectedSeats((prevState) => [...prevState, seatNumber]);
    }
  };

  const renderSeats = () => {
    const rows = 6;
    const seatsPerRow = 4;

    const seatGrid = [];

    for (let row = 1; row <= rows; row++) {
      for (let seat = 1; seat <= seatsPerRow; seat++) {
        const seatNumber = `${row}-${seat}`;
        const isSelected = selectedSeats.includes(seatNumber);

        seatGrid.push(
          <div
            key={seatNumber}
            className={`seat ${isSelected ? "selected rounded-xl" : ""}`}
            onClick={() => handleSeatClick(seatNumber)}
          >
            <div className="table">
              <div className={`chair ${isSelected ? "selected-chair" : ""}`} />
              <img src={tableIcon} alt="table" />
            </div>
            <span className="seat-number">{seatNumber}</span>
          </div>
        );
      }
    }

    return seatGrid;
  };

  return (
    <>
      <div className="reservation-system">
        <div className="hero min-h-screen flex items-center justify-center text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-medium text-sky-500 mb-4 pb-7">
              Choose Your Table
            </h1>
            <div className="seat-container grid grid-cols-4 gap-4 mt-4">
              {renderSeats()}
            </div>
            <div className="selected-seats mt-4">
              <h3>Selected Seats</h3>
              <p>{selectedSeats.join(", ")}</p>
            </div>
            <button className="btn btn-primary mt-4">Confirm</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationSystem;
