import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import ReservationCard from "../../components/ReservationCards/ReservationCard";
import { useLocation } from "react-router-dom";
import axiosApi from "../../utils/axiosConfig";
import Loading from "../../ui/Loading";

const AdminReservations = () => {
  const {
    runAxios: fetchReservations,
    data: reservations,
    loading,
  } = useAxios("/reservation");

  const [selectedStatus, setSelectedStatus] = useState("all");

  useEffect(() => {
    fetchReservations();
  }, [fetchReservations]);
  const updateStatus = async (reservationId, newStatus) => {
    try {
      await axiosApi.request({
        method: "PUT",
        url: `/reservation/edit/${reservationId}`,
        data: {
          status: newStatus,
        },
      });

      fetchReservations();
    } catch (error) {
      console.error("Error updating status:", error.message);
    }
  };

  const location = useLocation();
  const isAdminReservations = location.pathname === "/admin/reservations";

  const filteredReservations = () => {
    if (selectedStatus === "all") {
      return reservations.data;
    } else {
      const filtered = reservations.data.filter(
        (order) => order.status === selectedStatus
      );
      return filtered;
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="h-screen overflow-y-auto pb-12 mb-4">
      <label className="font-medium">
        Sort Reservations Status:
        <select
          className="ml-2 pe-9 border-gray-200 outline-none rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Declined">Declined</option>
        </select>
      </label>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {filteredReservations()?.map((reservation) => (
          <ReservationCard
            isAdminReservations={isAdminReservations}
            updateStatus={updateStatus}
            key={reservation._id}
            reservation={reservation}
          />
        ))}
      </div>
    </div>
  );
};
export default AdminReservations;
