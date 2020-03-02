import React, { Component } from "react";
import PropTypes from "prop-types";

import USState from "./USState";

class ListingSubmission extends Component {
  render() {
    const {
      mustAdoptTogether,
      numGuineaPigs,
      listingType,
      description,
      email,
      phone,
      title,
      price,
      state,
      city,
      zip
    } = this.props;
    const redStar = <span style={{ color: "red" }}>*</span>;
    return (
      <React.Fragment>
        <h1>Create new listing</h1>
        <p>{redStar} = required</p>
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
              onChange={this.props.onChange}
              value={numGuineaPigs}
            />
          </div>
          <div className="form-group col-sm align-self-end">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="mustAdoptTogether"
                id="inputMustAdoptTogether"
                checked={mustAdoptTogether}
                onChange={this.props.onChange}
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
            <label htmlFor="inputPrice">Total asking price (in dollars)</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter asking price"
              id="inputPrice"
              name="price"
              onChange={this.props.onChange}
              value={price}
            />
          </div>
          <div className="form-group col-sm">
            <label htmlFor="inputListingType">Type of listing {redStar}</label>
            <select
              className="form-control"
              name="listingType"
              id="inputListingType"
              onChange={this.props.onChange}
              value={listingType}
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
              onChange={this.props.onChange}
              value={city}
            />
          </div>
          <USState state={state} onChange={this.props.onChange} />
          <div className="form-group col-md-2">
            <label htmlFor="inputZip">Zip {redStar}</label>
            <input
              type="text"
              className="form-control"
              id="inputZip"
              name="zip"
              placeholder="Enter zip code"
              onChange={this.props.onChange}
              value={zip}
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
              onChange={this.props.onChange}
              value={email}
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
              onChange={this.props.onChange}
              value={phone}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md">
            <label htmlFor="inputTitle">Listing title {redStar}</label>
            <input
              type="text"
              className="form-control"
              id="inputTitle"
              name="title"
              placeholder="Enter title to be displayed for this listing"
              onChange={this.props.onChange}
              value={title}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-lg">
            <label htmlFor="inputDescription">Listing description</label>
            <textarea
              className="form-control"
              id="inputDescription"
              rows="4"
              name="description"
              onChange={this.props.onChange}
              value={description}
            ></textarea>
          </div>
        </div>
        <button
          type="button"
          style={{ marginBottom: "20px" }}
          className="btn-lg btn-primary 
          float-right"
          onClick={this.props.onChangePage}
        >
          Enter guinea pig information
        </button>
        <p />
      </React.Fragment>
    );
  }
}

ListingSubmission.propTypes = {
  onChange: PropTypes.func.isRequired,
  onChangePage: PropTypes.func.isRequired
};

export default ListingSubmission;
