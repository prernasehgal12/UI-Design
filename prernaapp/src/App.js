import logo from "./logo.svg";
import "./App.css";

import Slidebar from "./components/Slidebar";
import Details from "./components/Details";
import arrowicon from "./components/image/arrowicon.png";
import Navbar from "./components/Navbar";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className="container-fluid d-flex flex-row">
        <div>
          <Slidebar />
        </div>
        

        <div>
          <div className="">
            <Navbar/>
          </div>
          {/* <hr/> */}
        <div className="container-fluid bg-light ">
          <div className="d-flex flex-row">
            <div>
              
                <h2 className="text-secondary ">My Profile</h2>
            
            </div>
            <div className="ml-5 mt-2 mr-0 pr-0 d-inline">
              <img
                src={arrowicon}
                // className="img-fluid justify-content-center"
                // style={{ maxWidth: "auto", maxHeight: "40%" }}
                style={{ width: "15%", height: "auto" }}
                alt="arrow"
              ></img>
            </div>
            <div className="mr-0 pr-0">
              <h2 className="text-secondary ">Edit Profile</h2>
            </div>
          </div>
          <div className="container bg-white rounded border border-white mt-4 mb-4 h-60 w-70">
            <Details />
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
