import React, { Component } from "react";
import axios from "axios";

import GuineaPigsSubmission from "../components/submission/GuineaPigsSubmission";
import ListingSubmission from "../components/submission/ListingSubmission";

class Submission extends Component {
  state = {
    listing: {
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
      guineaPigs: [],
      title: "",
      price: ""
    },
    listingStep: true
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post("/api/v1/listing", this.state.listing)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });

    // ROUTE TO PAGE SAYING IF SUBMISSION WAS SUCCESSFUL
  };

  convertValueToCorrectType = target => {
    const { checked, type, value } = target;

    let val;
    if (type === "number") {
      val = parseInt(value, 10);
    } else if (type === "checkbox") {
      val = checked;
    } else {
      val = value;
    }
    return val;
  };

  handleListingChange = e => {
    const { name } = e.target;

    let val = this.convertValueToCorrectType(e.target);

    let listing = { ...this.state.listing };
    listing[name] = val;
    this.setState({ listing });

    // if (name === "numGuineaPigs") {
    //   this.changeNumGuineaPigs(val);
    // }
  };

  changeNumGuineaPigs = () => {
    const curLength = this.state.listing.guineaPigs.length;
    if (this.state.listing.numGuineaPigs !== curLength) {
      let listing = { ...this.state.listing };

      // increased number of guinea pigs - add empty guinea pig objects to state
      if (this.state.listing.numGuineaPigs > curLength) {
        for (let i = curLength; i < this.state.listing.numGuineaPigs; i++) {
          listing.guineaPigs = [
            ...listing.guineaPigs,
            {
              id: i,
              name: "",
              gender: "UNKNOWN",
              breed: "UNKNOWN",
              age: "",
              isNeutered: false
            }
          ];
        }
      }
      // decreased number of guinea pigs - remove from end
      else {
        for (let i = this.state.listing.numGuineaPigs; i < curLength; i++) {
          listing.guineaPigs.pop();
        }
      }

      this.setState({
        listing: listing
      });
    }
  };

  handleGuineaPigChange = (id, e) => {
    const { name } = e.target;
    let val = this.convertValueToCorrectType(e.target);

    let listing = { ...this.state.listing };
    listing.guineaPigs[id][name] = val;
    this.setState({ listing });
  };

  // change a value in location
  handleLocationChange = e => {
    let listing = { ...this.state.listing };
    listing.location[e.target.name] = e.target.value;
    this.setState({ listing });
  };

  changePage = () => {
    // if advancing from listing to guinea pig entry, update number of guinea pigs
    if (this.state.listingStep) {
      this.changeNumGuineaPigs();
    }
    this.setState({ listingStep: !this.state.listingStep });
  };

  render() {
    let element;
    if (this.state.listingStep) {
      element = (
        <ListingSubmission
          onChange={this.handleListingChange}
          onLocationChange={this.handleLocationChange}
          listing={this.state.listing}
          onChangePage={this.changePage}
        />
      );
    } else {
      element = (
        <GuineaPigsSubmission
          onChange={this.handleGuineaPigChange}
          guineaPigs={this.state.listing.guineaPigs}
          onChangePage={this.changePage}
        />
      );
    }

    return (
      <div className="container mt-4">
        <form onSubmit={this.handleSubmit}>{element}</form>
      </div>
    );
  }
}

export default Submission;
