import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import DatePosted from "./DatePosted";
import GuineaPigGenders from "./GuineaPigGenders";

class ListingPreview extends Component {
  render() {
    const {
      location,
      id,
      mustAdoptTogether,
      numGuineaPigs,
      timeListed,
      guineaPigs
    } = this.props.listing;
    return (
      <div className="col-md-4 mb-4">
        <div className="card bg-light">
          <div className="card-header mb-2">
            <img
              className="card-img-top"
              src="pigPicture.jpg"
              alt="Card image cap"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title mb-2">
              {location.city}, {location.state}
            </h5>
            <p className="card-text mb-2">
              {numGuineaPigs} guinea pigs,{" "}
              {mustAdoptTogether ? "Must adopt together" : "Can adopt separate"}
            </p>
            <p className="card-text mb-2">
              <GuineaPigGenders guineaPigs={guineaPigs} />
            </p>
            <p className="card-text mb-2">
              Listed: <DatePosted timeListed={timeListed} />
            </p>

            <Link className="btn-sm btn-primary" to={"/listing/" + id}>
              View this listing
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

ListingPreview.propTypes = {
  listing: PropTypes.object.isRequired
};

export default ListingPreview;
