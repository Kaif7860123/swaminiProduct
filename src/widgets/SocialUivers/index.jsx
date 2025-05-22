import React from "react";
import "./index.css";
const Socialuivers = ({data}) => {
  return (
    <>
      <ul className="wrapper">
        {data.map(it=>{
            return  <li key={it.id} className={it.clname}>
            <span className="tooltip">{it.name}</span>
            <i >{it.icon}</i>
          </li>
        })}
       
      </ul>
    </>
  );
};

export default Socialuivers;
