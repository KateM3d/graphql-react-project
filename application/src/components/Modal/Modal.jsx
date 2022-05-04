import "./Modal.scss";
import TableHeaders from "../../data";

const Modal = ({ modalTrue, setModalTrue, selected }) => {
  return (
    <div className="modal-container">
      <form className="modal" action="">
        <h3>Add New {selected === "movies" ? "Movie" : "Director"}</h3>

        {TableHeaders.map((el, index) =>
          selected === "movies"
            ? el.movies && (
                <span key={index}>
                  <label htmlFor={el.field}>{el.field}</label>
                  <input className="modal-input" type="text" />
                </span>
              )
            : el.directors && (
                <span key={index}>
                  <label htmlFor={el.field}>{el.field}</label>
                  <input className="modal-input" type="text" />
                </span>
              )
        )}

        <button className="btn">
          Add New {selected === "movies" ? "Movie" : "Director"}
        </button>
        <button className="btn" onClick={() => setModalTrue(!modalTrue)}>
          cancel
        </button>
      </form>
    </div>
  );
};

export default Modal;
