import React, { useState } from "react";
import Forms from "../Form/Forms";

import "./Tabs.scss";

function Tabs() {
  const [selected, setSelected] = useState("movies");
  return (
    <>
      <h2 className="header">My Movies Collection</h2>
      <div className="headers">
        <h2 className="header" onClick={() => setSelected("movies")}>
          Movies
        </h2>
        <h2 className="header" onClick={() => setSelected("directors")}>
          Directors
        </h2>
      </div>
      <Forms selected={selected} />
    </>
  );
}

export default Tabs;
