import { useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import "./Forms";

const TableRow = ({ selected }) => {
  const [edit, setEdit] = useState(false);

  const handleDelete = () => {
    alert("deleted");
  };

  const handleEdit = () => {
    alert("Edited");
  };

  return (
    <div className="tableRow">
      {selected === "movies" ? (
        <>
          <p className="tableRow-name">movie1</p>
          <p className="tableRow-name">genre1</p>
          <p className="tableRow-name">rate 1</p>
          <p className="tableRow-name">director1</p>
          <p className="tableRow-name">watched</p>
          <div className="btn-container">
            <button className="icon" onClick={() => handleEdit()}>
              <AiFillEdit />
            </button>
            <button className="icon" onClick={() => handleDelete()}>
              <AiFillDelete />
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="tableRow-name">name1</p>
          <p className="tableRow-name">age1</p>
          <p className="tableRow-name">movies</p>
          <div className="btn-container">
            <button className="icon" onClick={() => handleEdit()}>
              <AiFillEdit />
            </button>
            <button className="icon" onClick={() => handleDelete()}>
              <AiFillDelete />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TableRow;
