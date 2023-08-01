
import React from 'react'
import "./index.css";

function heading(props) {
  return (
    <>
    <div className="cards">
      <div className="card">
        <img src={props.imgsrc} className ="card_image" width="269" height="269" alt="mypic"></img>
      <div className="card_info">
        <span className="card_category">{props.tittle}</span>
        <h3 className="card_tittle">{props.sname}</h3>
        <a href={props.link} target="blank">
          <button >Watch Now</button>
        </a>
        </div>  
      </div>
    </div>
  </>
  );
}

export default heading;