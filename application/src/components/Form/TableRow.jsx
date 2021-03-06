import { useState, useEffect } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Modal from "../Modal/Modal";
import { useQuery, gql } from "@apollo/client";
import "./Forms";

const QUERY_DIRECTORS = gql`
  query {
    directors {
      name
      age
    }
  }
`;

const Movies = () => {
  const { data } = useQuery(QUERY_DIRECTORS);

  useEffect(() => {
    if (data) {
      console.log(data);
    } else {
      console.log("no ");
    }
  }, [data]);

  // return data.map(({ id, movie }) => (
  //   <div key={id}>
  //     <>
  //       <p className="tableRow-name">{movie.name}</p>
  //       <p className="tableRow-name">{movie.genre}</p>
  //       <p className="tableRow-name">rate 1</p>
  //       <p className="tableRow-name">{movie.director}</p>
  //       <p className="tableRow-name">watched</p>
  //       <div className="btn-container">
  //         {/* <button className="icon" onClick={() => handleEdit()}>
  //           <AiFillEdit />
  //         </button>
  //         <button className="icon" onClick={() => handleDelete()}>
  //           <AiFillDelete />
  //         </button> */}
  //       </div>
  //     </>
  //   </div>
  // ));
  return (
    <>
      {/* {data.directors.map((el, index) => {
        return (
          <div key={index}>
            <p>{el.name}</p>
            <p>{el.age}</p>
          </div>
        );
      })} */}
    </>
  );
};

const TableRow = ({ selected }) => {
  const [edit, setEdit] = useState(false);

  const handleDelete = () => {
    alert("deleted");
  };

  const handleEdit = () => {
    setEdit(!edit);
  };

  return (
    <>
      {edit ? (
        <Modal />
      ) : (
        <>
          <div className="tableRow">
            {selected === "movies" ? (
              // <>
              //   <p className="tableRow-name">movie1</p>
              //   <p className="tableRow-name">genre1</p>
              //   <p className="tableRow-name">rate 1</p>
              //   <p className="tableRow-name">director1</p>
              //   <p className="tableRow-name">watched</p>
              //   <div className="btn-container">
              //     <button className="icon" onClick={() => handleEdit()}>
              //       <AiFillEdit />
              //     </button>
              //     <button className="icon" onClick={() => handleDelete()}>
              //       <AiFillDelete />
              //     </button>
              //   </div>
              //
              // </>
              <Movies />
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
        </>
      )}
    </>
  );
};

export default TableRow;
