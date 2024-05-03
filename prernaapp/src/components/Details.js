import React from "react";
import roundprofile2 from "./image/roundprofile2.png";
import visa from "./image/visa.png";
export default function Details() {
  return (
    <div className="container-fluid mt-4 mb-4 bg-body rounded h-70 w-70">
      <div className="d-flex flex-row">
        <div className="p-0 m-0">
          <img
            src={roundprofile2}
            className="image-fluid rounded-circle"
            style={{ width: "60%", height: "auto" }}
            alt="profile"
          ></img>
        </div>

        <div className="container-fluid">
          <div>
            <div className="container mt-3">
              <div className="row">
                <div className="col-sm-4">
                  <label for="firstname" className="text-secondary">FirstName</label>
                  <input
                    type="text"
                    id="firstname"
                    className="form-control"
                    placeholder="yourname"
                  />
                </div>
                <div className="col-sm-4">
                  <div class="input-group-prepend">
                    <label for="inputGroupSelect01" className="text-secondary">Country</label>
                  </div>
                  <select class="custom-select" id="inputGroupSelect01">
                    <option selected>Choose...</option>
                    <option value="1">India</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>

                <div className="col-sm-4">
                  <div class="input-group-prepend">
                    <label for="inputGroupSelect02" className="text-secondary">Gender</label>
                  </div>
                  <select class="custom-select" id="inputGroupSelect02">
                    <option selected>Choose...</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-3">
            <div className="row">
              <div className="col-sm-4">
                <label for="lastname" className="text-secondary">LastName</label>
                <input
                  type="text"
                  id="lastname"
                  className="form-control"
                  placeholder="lastname"
                />
              </div>
              <div className="col-sm-4">
                <label for="dob" className="text-secondary">DateofBirth</label>
                <input
                  type="date"
                  id="dob"
                  class="form-control"
                  name="dob"
                ></input>
              </div>

              <div className="col-sm-4">
                <div class="input-group-prepend">
                  <label for="inputGroupSelect02" className="text-secondary">Language</label>
                </div>
                <select class="custom-select" id="inputGroupSelect02">
                  <option selected>Choose...</option>
                  <option value="1">Hindi</option>
                  <option value="2">English</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container mt-3">
          <div className="row">
            <div className="col-sm-6">
              <label for="email" className="text-secondary">Email</label>
              <input
                type="text"
                id="email"
                className="form-control"
                placeholder="yours@gmail.com"
                
              />
              <div class="input-group-append">
                <span class="input-group text-success">Verify</span>
              </div>
            </div>
            <div className="col-sm-3">
              <label for="linkedin" className="text-secondary">Linkedin</label>
              <input type="text" id="linkedin" className="form-control" />
            </div>

            <div className="col-sm-3">
              <label for="twitter" className="text-secondary">Twitter</label>
              <input type="text" id="twitter" className="form-control" />
            </div>
          </div>
        </div>

        <div className="container mt-3">
          <div className="row">
            <div className="col-sm-6">
              <label for="password" className="text-secondary">Password</label>
              <input type="password" id="password" className="form-control" />
              <div class="input-group-append">
                <span class="input-group text-success">Change Password</span>
              </div>
            </div>
            <div className="col-sm-3">
              <label for="facebook" className="text-secondary">Facebook</label>
              <input type="text" id="facebook" className="form-control" />
            </div>

            <div className="col-sm-3">
              <label for="instagram" className="text-secondary">Instagram</label>
              <input type="text" id="instagram" className="form-control" />
            </div>
          </div>
        </div>

        <div className="container mt-3">
          <div className="row">
            <div className="col-sm-6">
              <label for="phone"className="text-secondary">Phone-Number</label>
              <input type="number" id="phone" className="form-control" />
            </div>
            <div className="col-sm-6">
              <label for="payment-method" className="text-secondary">Payment Method</label>
              <div className="d-flex flex-row justify-content-around">
              <div>
              <input  className="form-control input-sm visaimage" type="text"/>
              <i class="bi bi-trash"></i>
              {/* <img src={visa}
              className="image-fluid"
              style={{ width: "20%", height: "auto" }}
              alt="profile"></img> */}
              </div>
              
              <div>
              <input className="form-control input-sm mastercardimage" type="text"/>
              <i className="fas fa-trash-alt"></i>
              
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-3 mb-3">
          <div className="row">
            <div className="col-sm-6">
              <label for="address" className="text-secondary">Address</label>
              {/* <input type="number" id="address" className="form-control" /> */}
              <textarea type="text" id="address" className="form-control" rows={2}></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
