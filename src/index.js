// import React from "react";
// import ReactDOM from "react-dom";
// // import "./index.css";
// import Heading from "./Heading";
// import add , {sub,mul,div} from "./calc";

// ReactDOM.render(
//   <>
//     <ol>
//       <li>Sum of two numbers is {add(4,3)}</li>
//       <li>Sub of two numbers is {sub(3,4)}</li>
//       <li>mul of two numbers is {mul(4,3)}</li>
//       <li>divison of two numbers is {div(4,3)}</li>
//     </ol>
//   </>,
//   document.getElementById('root')
// );
import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
import Sdata from "./Sdata";

ReactDOM.render(
  <>
  <h1 className="Heading-style">List of top 5 netflix web series</h1>
    <Heading
      imgsrc={Sdata[0].imgscr}
      tittle={Sdata[0].tittle}
      link={Sdata[0].link}
      sname={Sdata[0].sname}
    />
    <Heading
      imgsrc={Sdata[1].imgscr}
      tittle={Sdata[1].tittle}
      link={Sdata[1].link}
      sname={Sdata[1].sname}
    />
    <Heading
      imgsrc={Sdata[2].imgscr}
      tittle={Sdata[2].tittle}
      link={Sdata[2].link}
      sname={Sdata[2].sname}
    />
    <Heading
      imgsrc={Sdata[3].imgscr}
      tittle={Sdata[3].tittle}
      link={Sdata[3].link}
      sname={Sdata[3].sname}
    />
    <Heading
      imgsrc={Sdata[4].imgscr}
      tittle={Sdata[4].tittle}
      link={Sdata[4].link}
      sname={Sdata[4].sname}
    />
  </>,
  document.getElementById('root')
);