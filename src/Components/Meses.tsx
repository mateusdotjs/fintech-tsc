import React from "react";
import Mesbtn from "./Mesbtn";

const Meses = () => {
  return (
    <div className="flex">
      <Mesbtn n={-2} />
      <Mesbtn n={-1}/>
      <Mesbtn n={0}/>
    </div>
  );
};

export default Meses;
