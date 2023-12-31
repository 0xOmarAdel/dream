// src/components/ReservationHistory.js
import React, { useState } from "react";

const ReservationHistory = () => {
  const [reservations, setReservations] = useState([]);

  // Assume you have a way to fetch reservation history and update reservations state accordingly

  return (
    <div className="max-w-2xl mx-auto mt-8 p-8 bg-white shadow-lg rounded-md">
      <h2 className="text-3xl font-semibold mb-6">Reservation History</h2>
      {reservations.length === 0 ? (
        <p className="text-gray-500">No reservations yet.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {reservations.map((reservation, index) => (
            <li key={index} className="py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{reservation.name}</h3>
                  <p className="text-gray-500">
                    {reservation.date.toDateString()} at {reservation.time}
                  </p>
                </div>
                {/* Add additional details or actions if needed */}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReservationHistory;
