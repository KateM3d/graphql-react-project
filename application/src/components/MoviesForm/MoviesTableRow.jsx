import "./MoviesForms";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
const MoviesTableRow = () => {
  return (
    <div className="tableRow">
      <p className="tableRow-name">movie1</p>
      <p className="tableRow-name">genre1</p>
      <p className="tableRow-name">rate 1</p>
      <p className="tableRow-name">director1</p>
      <p className="tableRow-name">watched</p>
      <div className="btn-container">
        <button className="btn edit">
          <AiFillEdit />
        </button>
        <button className="btn delete">
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default MoviesTableRow;
