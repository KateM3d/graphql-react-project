import "./MoviesForm.scss";
import MoviesTableRow from "./MoviesTableRow";

const MoviesForm = () => {
  return (
    <>
      <h2 className="header">Movies</h2>
      <div className="tableHead">
        <p className="header-name">Name</p>
        <p className="header-name"> Genre</p>
        <p className="header-name">Rate</p>
        <p className="header-name">Director</p>
        <p className="header-name">Watched</p>
        <p className="header-name">Actions</p>
      </div>
      <div>
        <MoviesTableRow />
      </div>
    </>
  );
};

export default MoviesForm;
