import { useEffect, useState } from "react";

const ObjectList = ({ array, handleAddNewProperty, handleEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>New Property</th>
          <th>Add new Property</th>
        </tr>
      </thead>
      {array && (
        <tbody>
          {array.map((object) => (
            <tr key={object.id}>
              <td>{object.id}</td>
              <td>{object.name}</td>
              <td>{object.newProperty ? "New Property" : "N/A"}</td>
              <td>
                <button onClick={() => handleAddNewProperty(object.id)}>
                  Add a New Property
                </button>
                <button onClick={() => handleEdit(object)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
};

const Form = ({ itemToUpdate, handleUpdate, handleSave }) => {
  const initialObject = {
    id: "",
    name: "",
  };
  const [object, setObject] = useState(initialObject);
  const handleFormSave = () => {
    if (itemToUpdate) {
      handleUpdate(object);
    } else {
      handleSave(object);
    }
    setObject(initialObject);
  };
  useEffect(()=>{
    if(itemToUpdate){
      setObject(itemToUpdate);
    }
  },[itemToUpdate])
  return (
    <div>
      <input
        placeholder="Name"
        type="text"
        value={object.name}
        onChange={(e) => {  
             setObject({ ...object, name: e.target.value });
        }}
      />
      <div style={{ display: "block" }}>
        <button onClick={() => handleFormSave()}>Save</button>
      </div>
    </div>
  );
};

const ArrayOfObject = () => {
  const [objectArray, setObjectArray] = useState([]);
  const [objectToEdit, setObjectToEdit] = useState(null);

  const handleSave = (object) => {
    object.id = crypto.randomUUID();
    setObjectArray((prev) => [...prev, object]);
  };

  const handleAddNewProperty = (objectId) => {
    const newArray = objectArray.map((item) =>
      item.id === objectId ? { ...item, newProperty: "New Property" } : item
    );
    setObjectArray(newArray);
  };
  const handleEdit = (object) => {
    setObjectToEdit(object);
  };

  const handleUpdate = (object)=>{
    const newArray = objectArray.map(item => item.id === object.id ? object: item)
    setObjectArray(newArray);
    setObjectToEdit(null);
  }
  useEffect(() => {
    console.log(objectArray);
  }, [objectArray]);

  return (
    <div className="array">
      <div className="form">
        <Form
          itemToUpdate={objectToEdit}
          handleSave={handleSave}
          handleEdit={handleEdit}
          handleUpdate={handleUpdate}
        />
        <ObjectList
          array={objectArray}
          handleAddNewProperty={handleAddNewProperty}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
};

export default ArrayOfObject;
