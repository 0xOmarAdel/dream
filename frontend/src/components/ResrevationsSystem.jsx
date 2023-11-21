// ReservationSystem.js

import React, { useState } from "react";

const ReservationSystem = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
    // Toggle seat selection
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
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
            className={`seat ${isSelected ? "selected" : ""}`}
            onClick={() => handleSeatClick(seatNumber)}
          >
            <div className="table">
              <div className={`chair ${isSelected ? "selected-chair" : ""}`} />
            </div>
            <span className="seat-number">{seatNumber}</span>
          </div>
        );
      }
    }

    return seatGrid;
  };

  return (
    <div className="reservation-system ">
      <h2>Restaurant Table Reservation</h2>
      <div className="seat-container ">{renderSeats()}</div>
      <div className="selected-seats">
        <h3>Selected Seats</h3>
        <p>{selectedSeats.join(", ")}</p>
      </div>
    </div>
  );
};

export default ReservationSystem;
