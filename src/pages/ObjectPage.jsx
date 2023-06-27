import { useEffect, useState } from "react";

const Form = ({ handleUpdate, handleAdd, propertyToChange, object }) => {
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
        disabled={propertyToChange}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleFormSave}>Add</button>
    </div>
  );
};

const ObjectPage = () => {
  const [object, setObject] = useState({});
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
  const handleEdit = (property) => {
    setPropertyToChange(property);
  };
  const handleUpdate = (oldProperty, newProperty) => {
    const obj = {...object, [newProperty]: object[oldProperty]};
    delete obj[oldProperty];
    setPropertyToChange(null)
    setObject(obj);
  };
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
