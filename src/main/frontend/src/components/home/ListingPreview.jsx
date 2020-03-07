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
      guineaPigs,
      title,
      pictureNum
    } = this.props.listing;
    return (
      <div className="col-md-4 mb-4">
        <div className="card bg-light">
          <div className="card-header mb-2">
            <img
              className="card-img-top"
              // {for now, just use random picture of guinea pig. In future, add storing pictures on s3}
              src={"guinea_pig_pictures/guinea_pig_" + pictureNum + ".jpg"}
              alt="Card image cap"
            />
          </div>
          <div className="card-body text-center">
            <h5 className="card-title mb-3">{title}</h5>
            <h6 className="card-subtitle mb-2">
              {location.city}, {location.state}
            </h6>
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
