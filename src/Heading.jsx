// import React from 'react';



// function Heading() {
//     const heading = {
//         textAlign : 'center',
//       };
    
//     let curDate = new Date();
//     curDate = curDate.getHours();
//     let greeting = " ";
//     if(curDate>=1 && curDate<12){
//       greeting = "Good Morning";
//       heading.color = "green";
//     }
//     else if(curDate>12&&curDate<19){
//       greeting = "Good Evening";
//       heading.color = "yellow";
//     }
//     else{
//       greeting = "Good Night"
//       heading.color = "red";
//     }
//   return (
//     <>
//         <div>
//             <h1>Hello sir, <span style={heading}>{greeting}</span></h1>
//         </div>
//     </>
//   )
// }

// export default Heading;

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
        <a href={props.link} target="_blank">
          <button >Watch Now</button>
        </a>
        </div>  
      </div>
    </div>
  </>
  );
}

export default heading;