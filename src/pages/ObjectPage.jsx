import { useEffect, useState } from "react";

const Form = ({ handleUpdate, handleAdd, propertyToChange, object }) => {
  // Inorder to store the value of old property to new property and then delete it later
  const [oldProperty, setOldProperty] = useState("");
  const [property, setProperty] = useState("");
  const [value, setValue] = useState("");

  const handleFormSave = () => {
    if (propertyToChange) {
      handleUpdate(oldProperty, property);
    } else {
      handleAdd(property, value);
    }
    setOldProperty("");
    setProperty("");
    setValue("");
  };

  // Setting the property as property to change which will load the property to the input field
  useEffect(() => {
    if (propertyToChange) {
      setOldProperty(propertyToChange);
      setProperty(propertyToChange);
      setValue(object[propertyToChange]);
    } else {
      setProperty("");
      setValue("");
    }
  }, [object, propertyToChange]);
  return (
    <div>
      <input
        placeholder="Property"
        type="text"
        value={property}
        onChange={(e) => setProperty(e.target.value)}
      />
      <input
        placeholder="Value"
        type="text"
        value={value}
        // Changing the value of the key is prevented in this case to properly observe the change of property, For changing value we can pass different Value for the same key and simply add
        disabled={propertyToChange}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleFormSave}>Save</button>
    </div>
  );
};

const ObjectPage = () => {
  const [object, setObject] = useState({});
  //If there is propertyToChange then the Form will perform Edit Operation otherwise Add Operation
  const [propertyToChange, setPropertyToChange] = useState(null);

  const handleAdd = (property, value) => {
    const obj = { ...object, [property]: value };
    setObject(obj);
  };
  const handleRemove = (property) => {
    const obj = { ...object };
    delete obj[property];
    setObject(obj);
  };
  // This will set if there was a call for a property to change
  const handleEdit = (property) => {
    setPropertyToChange(property);
  };

  const handleUpdate = (oldProperty, newProperty) => {
    const obj = {...object, [newProperty]: object[oldProperty]};
    delete obj[oldProperty];
    setPropertyToChange(null)
    setObject(obj);
  };
  // To observe the change in the object itself
  useEffect(() => {
    console.log(object);
  }, [object]);

  return (
    <div className="array">
      <Form
        handleAdd={handleAdd}
        object={object}
        propertyToChange={propertyToChange}
        handleUpdate={handleUpdate}
      />
      <div>
        <h3>Object:</h3>
        {Object.entries(object).map(([property, value]) => (
          <div key={property}>
            <li style={{ display: "inline-block" }}>
              {property}: {value}
            </li>
            <button onClick={() => handleRemove(property)}>Remove</button>
            <button onClick={() => handleEdit(property)}>Edit</button>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ObjectPage;
