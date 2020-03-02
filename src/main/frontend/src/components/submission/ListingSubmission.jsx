import React, { Component } from "react";
import PropTypes from "prop-types";

import USState from "./USState";
import FormGroupText from "./FormGroupText";

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
          <FormGroupText
            groupClass="col-sm"
            label="Number of guinea pigs"
            isRequired={true}
            type="number"
            placeholder="Enter number of guinea pigs"
            name="numGuineaPigs"
            onChange={this.props.onChange}
            value={numGuineaPigs}
          />
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
          <FormGroupText
            groupClass="col-sm"
            label="Total asking price (in dollars)"
            isRequired={false}
            type="number"
            placeholder="Enter asking price"
            name="price"
            onChange={this.props.onChange}
            value={price}
          />
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
          <FormGroupText
            groupClass="col-md-6"
            label="City"
            isRequired={true}
            type="text"
            placeholder="Enter city"
            name="city"
            onChange={this.props.onChange}
            value={city}
          />
          <USState state={state} onChange={this.props.onChange} />
          <FormGroupText
            groupClass="col-md-2"
            label="Zip"
            isRequired={true}
            type="text"
            placeholder="Enter zip code"
            name="zip"
            onChange={this.props.onChange}
            value={zip}
          />
        </div>
        <div className="form-row">
          <FormGroupText
            groupClass="col-md-7"
            label="Email"
            isRequired={true}
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={this.props.onChange}
            value={email}
          />
          <FormGroupText
            groupClass="col-md-5"
            label="Phone number"
            isRequired={false}
            type="tel"
            placeholder="Enter phone number"
            name="phone"
            onChange={this.props.onChange}
            value={phone}
          />
        </div>
        <div className="form-row">
          <FormGroupText
            groupClass="col-md"
            label="Listing title"
            isRequired={true}
            type="text"
            placeholder="Enter title to be displayed for this listing"
            name="title"
            onChange={this.props.onChange}
            value={title}
          />
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
