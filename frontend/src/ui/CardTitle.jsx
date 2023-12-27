const CardTitle = ({ title, icon: Icon, iconClasses }) => {
  return (
    <h2
      className={`${
        Icon ? "flex flex-row items-center gap-3" : ""
      } mb-8 text-3xl text-primary font-medium`}
    >
      {Icon && <Icon className={iconClasses || ""} />}
      {title}
    </h2>
  );
};

export default CardTitle;
