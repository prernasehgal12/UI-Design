// import React from 'react'
// import refresh2 from './image/refresh2.png'
// import bell from './image/bell.png'
// import search from './image/search.png'
// import setting from './image/setting.png'

// export default function Navbar() {
//   return (
//     <div>
//         <div>
//             <img src={refresh2}
//             className='img-fluid'
//             style={{ width: "20%", height: "auto" }}></img>

//         </div>
//         <div>
//         <img src={search}
//             className='img-fluid'
//             style={{ width: "20%", height: "auto" }}></img>

//         </div>
//         <div>
//         <img src={setting}
//             className='img-fluid'
//             style={{ width: "20%", height: "auto" }}></img>

//         </div>
//         <div>
//         <img src={bell}
//             className='img-fluid'
//             style={{ width: "20%", height: "auto" }}></img>

//         </div>
//         <div>
//         <p className='font-weight-bold'>Prerna</p>

//         </div>

//     </div>
//   )
// }

import React from "react";
import refresh2 from "./image/refresh2.png";
import bell from "./image/bell.png";
import search from "./image/search.png";
import setting from "./image/setting.png";
import roundprofile2 from "./image/roundprofile2.png";
import downarrow2 from "./image/downarrow2.png";
import arrowdown from "./image/arrowdown.png";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
export default function Navbar() {
  return (
    // <nav className="navbar navbar-expand navbar-dark bg-transparent h-5 mt-0">
      <div className="container-fluid border-secondary border-bottom ">
        
          <div className="d-flex flex-row">
            <div className=" border-secondary border-right d-flex justify-content-center ">
              <img
                src={refresh2}
                className="img-fluid mr-4 mb-2 mt-3  "
                style={{ width: "18%", height: "40%" }}
              />
            </div>
            <div className="border-secondary border-right d-flex flex-row justify-content-start">
            
              <img
                src={search}
                className="img-fluid ml-3 mt-3 mb-3"
                style={{ width: "3%", height: "35%" }}
              />
              <p className="text-secondary pl-4 ml-2 mt-3 mb-2">Search any keyword....</p>
            </div>
            <div className="border-secondary border-right d-flex justify-content-center ">
              <img
                src={setting}
                className="img-fluid mr-4 mb-2 mt-3 "
                style={{ width: "25%", height: "50%" }}
              />
            </div>
            <div className="border-secondary border-right d-flex justify-content-center " style={{ width: "15%", height: "auto" }}>
              <img
                src={bell}
                className="img-fluid mr-3 mb-2 mt-3 ml-2 "
                style={{ width: "40%", height: "50%" }}
              />
            </div>
            <div className="d-flex flex-row justify-content-start ">
                <img
                src={roundprofile2}
                className="img-fluid rounded-circle ml-2 pl-0 mb-2 mt-2 "
                style={{ width: "10%", height: "60%" }}
                ></img>
              <p className="font-weight-bold ml-2 mt-3">Prerna Sehgal</p>
              <img
              src={downarrow2}
              className="img-fluid mt-3 ml-3"
              style={{ width: "4%", height: "25%" }}
              ></img>
            </div>
          </div>
       
      </div>
    // </nav>
  );
}
