import React, { Component } from "react";
import axios from "axios";
import USState from "../components/submission/USState";

class Submission extends Component {
  state = {
    numGuineaPigs: "",
    mustAdoptTogether: false,
    listingType: "HOME",
    description: "",
    location: {
      city: "",
      state: "empty",
      zip: ""
    },
    email: "",
    phone: "",
    guineaPigs: ""
  };

  changeGuineaPigs = () => {};

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post("/api/v1/listing", this.state)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });

    // ROUTE TO PAGE SAYING IF SUBMISSION WAS SUCCESSFUL
  };

  handleChange = e => {
    let val;
    if (e.target.type === "number") {
      val = parseInt(e.target.value, 10);
    } else if (e.target.type === "checkbox") {
      val = e.target.checked;
    } else {
      val = e.target.value;
    }

    this.setState({
      [e.target.name]: val
    });

    if (e.target.name === "numGuineaPigs") {
      this.changeGuineaPigs();
    }
  };

  // change a value in location
  handleLocationChange = e => {
    let newLocation = this.state.location;
    newLocation[e.target.name] = e.target.value;
    this.setState({ location: newLocation });
  };

  render() {
    const redStar = <span style={{ color: "red" }}>*</span>;
    return (
      <div className="container mt-4">
        <h1>Create new listing</h1>
        <p>{redStar} = required</p>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-sm">
              <label htmlFor="inputNumPigs">
                Number of guinea pigs {redStar}
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter number of guinea pigs"
                id="inputNumPigs"
                name="numGuineaPigs"
                onChange={this.handleChange}
                value={this.state.numGuineaPigs}
              />
            </div>
            <div className="form-group col-sm align-self-end">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="mustAdoptTogether"
                  id="inputMustAdoptTogether"
                  checked={this.state.mustAdoptTogether}
                  onChange={this.handleChange}
                />
                <label
                  htmlFor="inputMustAdoptTogether"
                  className="form-check-label"
                >
                  Must be adopted together {redStar}
                </label>
              </div>
            </div>
            <div className="form-group col-sm">
              <label htmlFor="inputListingType">
                Type of listing {redStar}
              </label>
              <select
                className="form-control"
                name="listingType"
                id="inputListingType"
                onChange={this.handleChange}
                value={this.state.listingType}
              >
                <option value="HOME">Home</option>
                <option value="PETSTORE">Pet store</option>
                <option value="RESCUE">Rescue</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">City {redStar}</label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                name="city"
                placeholder="Enter city"
                onChange={this.handleLocationChange}
                value={this.state.location.city}
              />
            </div>
            <USState
              location={this.state.location}
              onChange={this.handleLocationChange}
            />
            <div className="form-group col-md-2">
              <label htmlFor="inputZip">Zip {redStar}</label>
              <input
                type="text"
                className="form-control"
                id="inputZip"
                name="zip"
                placeholder="Enter zip code"
                onChange={this.handleLocationChange}
                value={this.state.location.zip}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-7">
              <label htmlFor="inputEmail">Email {redStar}</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                name="email"
                placeholder="Enter email"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </div>
            <div className="form-group col-md-5">
              <label htmlFor="inputPhone">Phone number {redStar}</label>
              <input
                type="tel"
                className="form-control"
                id="inputPhone"
                name="phone"
                placeholder="Enter phone number"
                onChange={this.handleChange}
                value={this.state.phone}
              />
            </div>
          </div>

          {/* {this.state.guineaPigs.map(guineaPig => (
            <GuineaPigSubmission />
          ))} */}

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Submission;
