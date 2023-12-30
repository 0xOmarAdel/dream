import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";

const EditableMeal = ({ title, options, description, id }) => {
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedOptions, setEditedOptions] = useState([]);
  const [editedDescription, setEditedDescription] = useState(description);

  const { runAxios: updateMeal, loading: loadingUpdateMeal } = useAxios(
    `/meals/${id}`,
    "PUT",
    {
      title: editedTitle,
      options: editedOptions,
      description: editedDescription,
    }
  );

  useEffect(() => {
    if (Array.isArray(options)) {
      setEditedOptions([...options]);
    }
  }, [options]);

  const handleEditStart = () => {
    setEditing(true);
  };

  const handleEditEnd = async () => {
    await updateMeal();
    setEditing(false);
  };

  return (
    <div className="space-y-5">
      {editing ? (
        <div className="flex flex-col">
          <label className="font-medium">Meal Name: </label>
          <input
            type="text"
            value={editedTitle ? editedTitle : title}
            onChange={(e) => setEditedTitle(e.target.value)}
            placeholder="Meal Title"
            className="outline-none ring-1 focus:ring-1 focus:ring-sky-500 px-1"
          />
        </div>
      ) : (
        <div>
          <h2>{title}</h2>
        </div>
      )}

      <EditableOptions
        options={editedOptions}
        editing={editing}
        setEditedOptions={setEditedOptions}
      />

      {editing ? (
        <div className="flex flex-col">
          <label className="font-medium">Meal Description:</label>
          <textarea
            value={editedDescription ? editedDescription : description}
            onChange={(e) => setEditedDescription(e.target.value)}
            placeholder="Meal Description"
            className="outline-none ring-1 focus:ring-1 focus:ring-sky-500 px-1 resize-none"
          />
        </div>
      ) : (
        <div>
          <p>{description}</p>
        </div>
      )}
      <button
        className="btn btn-primary text-white"
        onClick={editing ? handleEditEnd : handleEditStart}
      >
        {editing ? "Save" : "Edit"}
      </button>
    </div>
  );
};

const EditableOptions = ({ options, editing, setEditedOptions }) => {
  const handleSizeChange = (index, newSize) => {
    const updatedOptions = [...options];
    updatedOptions[index].size = newSize;
    setEditedOptions(updatedOptions);
  };

  const handlePriceChange = (index, newPrice) => {
    const updatedOptions = [...options];
    updatedOptions[index].price = newPrice;
    setEditedOptions(updatedOptions);
  };

  const handleAddOption = () => {
    setEditedOptions([...options, { size: "", price: "" }]);
  };

  const handleRemoveOption = (index) => {
    const updatedOptions = [...options];
    updatedOptions.splice(index, 1);
    setEditedOptions(updatedOptions);
  };

  return (
    <div className={`flex ${editing ? "flex-col" : "flex-row"} gap-2`}>
      <p className="font-medium">Meal Options:</p>
      {options.map((editedOption, index) => (
        <div key={index} className="flex justify-between">
          {editing ? (
            <div className="flex gap-2">
              <input
                type="text"
                value={editedOption.size}
                onChange={(e) => handleSizeChange(index, e.target.value)}
                placeholder="Size"
                className="outline-none ring-1 focus:ring-1 focus:ring-sky-500 px-1 py-2 resize-none"
              />
              <input
                type="text"
                value={editedOption.price}
                onChange={(e) => handlePriceChange(index, e.target.value)}
                placeholder="Price"
                className="outline-none ring-1 focus:ring-1 focus:ring-sky-500 px-1 py-2 resize-none"
              />
              <button type="button" onClick={() => handleRemoveOption(index)}>
                Remove
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <p className="font-medium">{editedOption.size}</p>
              <p>{editedOption.price}</p>
            </div>
          )}
        </div>
      ))}
      {editing && (
        <button type="button" onClick={handleAddOption}>
          Add Option
        </button>
      )}
    </div>
  );
};

export default EditableMeal;
