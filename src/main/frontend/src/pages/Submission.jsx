import React, { Component } from "react";
import axios from "axios";

import GuineaPigsSubmission from "../components/submission/GuineaPigsSubmission";
import ListingSubmission from "../components/submission/ListingSubmission";

class Submission extends Component {
  state = {
    numGuineaPigs: "",
    mustAdoptTogether: false,
    listingType: "HOME",
    description: "",
    city: "",
    state: "empty",
    zip: "",
    email: "",
    phone: "",
    guineaPigs: [],
    title: "",
    price: "",
    listingStep: true
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post("/api/v1/listing", {
        numGuineaPigs: this.state.numGuineaPigs,
        mustAdoptTogether: this.state.mustAdoptTogether,
        listingType: this.state.listingType,
        description: this.state.description,
        location: {
          city: this.state.city,
          state: this.state.state,
          zip: this.state.zip
        },
        email: this.state.email,
        phone: this.state.phone,
        guineaPigs: this.state.guineaPigs,
        title: this.state.title,
        price: this.state.price
      })
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

    this.setState({ [name]: val });
  };

  changeNumGuineaPigs = () => {
    const curLength = this.state.guineaPigs.length;
    if (this.state.numGuineaPigs !== curLength) {
      let guineaPigs = this.state.guineaPigs;
      // increased number of guinea pigs - add empty guinea pig objects to state
      if (this.state.numGuineaPigs > curLength) {
        for (let i = curLength; i < this.state.numGuineaPigs; i++) {
          guineaPigs = [
            ...guineaPigs,
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
        for (let i = this.state.numGuineaPigs; i < curLength; i++) {
          guineaPigs.pop();
        }
      }

      this.setState({
        guineaPigs: guineaPigs
      });
    }
  };

  handleGuineaPigChange = (id, e) => {
    const { name } = e.target;
    let val = this.convertValueToCorrectType(e.target);

    this.setState({
      guineaPigs: this.state.guineaPigs.map(guineaPig => {
        if (guineaPig.id === id) {
          guineaPig[name] = val;
        }
        return guineaPig;
      })
    });
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
          mustAdoptTogether={this.state.mustAdoptTogether}
          numGuineaPigs={this.state.numGuineaPigs}
          listingType={this.state.listingType}
          description={this.state.description}
          city={this.state.city}
          state={this.state.state}
          zip={this.state.zip}
          email={this.state.email}
          phone={this.state.phone}
          title={this.state.title}
          price={this.state.price}
          onChangePage={this.changePage}
        />
      );
    } else {
      element = (
        <GuineaPigsSubmission
          onChange={this.handleGuineaPigChange}
          guineaPigs={this.state.guineaPigs}
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
