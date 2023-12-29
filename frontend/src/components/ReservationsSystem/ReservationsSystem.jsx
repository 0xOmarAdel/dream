const ReservationsSystem = () => {
  return (
    <div
      className="relative h-[600px] bg-center bg-cover bg-fixed"
      style={{
        backgroundImage:
          "url(https://demo-storage.com/pm/html/restbeef/img/page_backgrounds/index01-1.jpg)",
      }}
    >
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-gray-200">
        <h3 className="text-4xl font-medium capitalize">reserve your table</h3>
      </div>
      <div className="absolute inset-0 z-10 bg-black bg-opacity-70"></div>
    </div>
  );
};

export default ReservationsSystem;
