import React, { useState } from "react";
import DirectorsForm from "../DirectorsForm/DirectorsForm";
import MoviesForm from "../MoviesForm/MoviesForms";

function Tabs() {
  const [selected, setSelected] = useState("movies");
  return (
    <>
      <h2 className="header">My Movies Collection</h2>
      <div>{selected ? <MoviesForm /> : <DirectorsForm />}</div>
    </>
  );
}

export default Tabs;
