import { useState } from "react";
import "./Form.scss";
import TableRow from "./TableRow";
import TableHeaders from "../../data";
import Modal from "../Modal/Modal";

const Forms = ({ selected }) => {
  const [modalTrue, setModalTrue] = useState(true);

  return (
    <>
      {modalTrue ? (
        <>
          <div className="tableHead">
            {TableHeaders.map((el, index) =>
              selected === "movies"
                ? el.movies && (
                    <p key={index} className="header-name">
                      {el.field}
                    </p>
                  )
                : el.directors && (
                    <p key={index} className="header-name">
                      {el.field}
                    </p>
                  )
            )}
          </div>
          <div>
            <TableRow selected={selected} />
          </div>
          <div className="container">
            <button
              className="btn btn-add"
              onClick={() => setModalTrue(!modalTrue)}
            >
              +
            </button>
          </div>
        </>
      ) : (
        <>
          <Modal
            modalTrue={modalTrue}
            setModalTrue={setModalTrue}
            selected={selected}
          />
        </>
      )}
    </>
  );
};

export default Forms;
