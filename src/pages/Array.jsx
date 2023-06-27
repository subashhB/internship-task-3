import { useState } from "react";

const Array = () => {
  const [arrayData, setArrayData] = useState([]);
  const [insertData, setInsertData] = useState("");
  const [insertIndex, setInsertIndex] = useState(0);
  const [insertAtIndexData, setInsertAtIndexData] = useState("");
  const [itemToRemove, setItemToRemove] = useState("");
  console.log(arrayData);

  const handleInsertStart = () => {
    let insertedArray = [...arrayData];
    insertedArray.unshift(insertData);
    setInsertData("");
    setArrayData(insertedArray);
  };
  const handleInsertEnd = () => {
    let insertedArray = [...arrayData];
    insertedArray.push(insertData);
    setInsertData("");
    setArrayData(insertedArray);
  };
  const handleInsertAtIndex =() =>{
    let insertedArray = [];
    insertedArray = arrayData.splice(insertIndex, 0, insertAtIndexData);
    setInsertAtIndexData("");
    setInsertIndex(0);
    setArrayData(insertedArray);
  }
  const handleRemove = ()=>{
    let filteredArray = [...arrayData];
    filteredArray = arrayData.filter(data => data !== itemToRemove);
    setItemToRemove("");
    setArrayData(filteredArray);
  }
  return (
    <div className="array">
      <h3>Array = [{arrayData.toString()}]</h3>
      <div style={{ display: "block", gap: "10px" }}>
        <button onClick={handleInsertStart}>Insert Item at Start</button>
        <input
          placeholder="Item to Insert"
          type="text"
          value={insertData}
          onChange={(e) => {
            setInsertData(e.target.value);
          }}
        />
        <button onClick={handleInsertEnd}>Insert Item at End</button>
      </div>
      <div style={{display:'inline-block'}}>
          <button onClick={ handleInsertAtIndex }>Insert Item</button>
          <input type="text" placeholder="Data" value={insertAtIndexData} onChange={(e)=>{setInsertAtIndexData(e.target.value)}} />
          at
          <input style={{width: '25%'}} type="number" value={insertIndex} onChange={(e)=>{setInsertIndex(e.target.value)}} />
      </div>
      <div style={{display: 'inline-block'}}>
        <button onClick={ handleRemove }>Remove</button>
        <input type="text" value={itemToRemove} onChange={(e)=>{setItemToRemove(e.target.value)}}  />
      </div>
    </div>
  );
};

export default Array;
