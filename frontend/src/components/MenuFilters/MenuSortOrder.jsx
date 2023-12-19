import Select from "react-select";
const MenuSortOrder = ({ selectedOption, onChange }) => {
  const options = [
    { value: "Price (lowest to highest)", label: "Price (lowest to highest)" },
    { value: "Price (highest to lowest)", label: "Price (highest to lowest)" },
    {
      value: "Rating (lowest to highest)",
      label: "Rating (lowest to highest)",
    },
    {
      value: "Rating (highest to lowest)",
      label: "Rating (highest to lowest)",
    },
  ];

  return (
    <Select
      value={selectedOption}
      onChange={onChange}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: "gray",
          primary: "#0ea5ea",
        },
      })}
      options={options}
    />
  );
};

export default MenuSortOrder;
