import React from "react";
import "./index.css";
const Loader = () => {
  return (
    <>
    <div className="loaderrcontaier">

      <div className="loaderr">
        <div className="load-inner load-one"></div>
        <div className="load-inner load-two"></div>
        <div className="load-inner load-three"></div>
        <span className="textt">Loading...</span>
      </div>
    </div>
    </>
  );
};

export default Loader;
