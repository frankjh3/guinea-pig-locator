import React, { Component } from "react";
import PropTypes from "prop-types";

import ListingPreview from "../components/home/ListingPreview";

class Home extends Component {
  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          {this.props.listings.map(listing => (
            <ListingPreview key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  listings: PropTypes.array.isRequired
};

export default Home;
