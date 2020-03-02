import React, { Component } from "react";
import PropTypes from "prop-types";

import GuineaPigItem from "./GuineaPigItem";

class GuineaPigSubmission extends Component {
  render() {
    const redStar = <span style={{ color: "red" }}>*</span>;
    return (
      <React.Fragment>
        <h1>Submit available guinea pigs</h1>
        <p>{redStar} = required</p>
        {this.props.guineaPigs.map(guineaPig => (
          <GuineaPigItem
            key={guineaPig.id}
            guineaPig={guineaPig}
            onChange={this.props.onChange}
          />
        ))}
        <div className="form-row justify-content-between">
          <button
            type="button"
            className="btn-lg btn-secondary 
          pb-20"
            style={{ marginBottom: "20px" }}
            onClick={this.props.onChangePage}
          >
            Previous
          </button>

          <input
            type="submit"
            value="Submit"
            className="btn-lg btn-primary
          pb-20"
            style={{ marginBottom: "20px" }}
          ></input>
        </div>
      </React.Fragment>
    );
  }
}

GuineaPigSubmission.propTypes = {
  guineaPigs: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onChangePage: PropTypes.func.isRequired
};

export default GuineaPigSubmission;
