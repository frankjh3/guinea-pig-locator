import React, { Component } from "react";
import axios from "axios";

import GuineaPigsSubmission from "../components/submission/GuineaPigsSubmission";
import ListingSubmission from "../components/submission/ListingSubmission";
import SubmissionModal from "../components/submission/SubmissionModal";

class Submission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numGuineaPigs: "",
      mustAdoptTogether: false,
      listingType: "HOME",
      description: "",
      city: "",
      state: "",
      zip: "",
      email: "",
      phone: "",
      guineaPigs: [],
      title: "",
      price: "",
      listingStep: true,
      required: [
        "numGuineaPigs",
        "mustAdoptTogether",
        "listingType",
        "city",
        "state",
        "zip",
        "email",
        "title"
      ],
      errorText: "",
      confirmationMode: 0
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const isMissingRequirements = this.validateGuineaPigs();
    console.log(isMissingRequirements);
    if (isMissingRequirements) {
      this.setState({
        errorText: "Please fill out all required fields before submitting"
      });
    } else {
      this.setState({
        errorText: ""
      });
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
          this.setState({ confirmationMode: 1 });
        })
        .catch(error => {
          console.log(error);
          this.setState({ confirmationMode: 2 });
        });

      // ROUTE TO PAGE SAYING IF SUBMISSION WAS SUCCESSFUL
    }
  };

  handleModalClose = () => {
    this.setState({ confirmationMode: 0 });
  };

  handleListingChange = e => {
    const { name } = e.target;
    let val = this.convertValueToCorrectType(e.target);

    this.setState({ [name]: val });
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

  validateListing = () => {
    // return any empty required fields
    return this.state.required.filter(
      requirement => this.state[requirement] === ""
    );
  };

  validateGuineaPigs = () => {
    for (const guineaPig of this.state.guineaPigs) {
      if (guineaPig.age === "" || guineaPig.name === "") {
        return true;
      }
    }
    return false;
  };

  changeNumGuineaPigs = () => {
    const curLength = this.state.guineaPigs.length;
    if (this.state.numGuineaPigs !== curLength) {
      let guineaPigs = this.state.guineaPigs;
      // increased number of guinea pigs - add empty guinea pig objects to state
      if (this.state.numGuineaPigs > curLength) {
        for (let i = curLength; i < this.state.numGuineaPigs; i++) {
          guineaPigs.push({
            id: i,
            name: "",
            gender: "UNKNOWN",
            breed: "UNKNOWN",
            age: "",
            isNeutered: false,
            required: ["gender", "age", "isNeutered", "name"]
          });
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

  changePage = () => {
    // if advancing from listing to guinea pig entry, update number of guinea pigs
    const missingRequirements = this.validateListing();
    if (missingRequirements.length > 0 || this.state.numGuineaPigs < 1) {
      let errorText = "Error, ";
      const conversion = {
        numGuineaPigs: "number of guinea pigs",
        mustAdoptTogether: "must be adopted together",
        listingType: "type of listing",
        city: "city",
        state: "state",
        zip: "zip",
        email: "email",
        title: "listing title"
      };
      if (missingRequirements.length > 0) {
        errorText +=
          "please enter: " +
          missingRequirements
            .map(requirement => {
              return conversion[requirement];
            })
            .join(", ");
      }
      if (missingRequirements.length > 0 && this.state.numGuineaPigs < 1) {
        errorText += " and ";
      }
      if (this.state.numGuineaPigs < 1) {
        errorText += "number of guinea pigs must be at least 1";
      }
      this.setState({
        errorText: errorText
      });
    } else {
      if (this.state.listingStep) {
        this.changeNumGuineaPigs();
      }
      this.setState({ errorText: "" });
      this.setState({ listingStep: !this.state.listingStep });
    }
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
          required={this.state.required}
          errorText={this.state.errorText}
          onChangePage={this.changePage}
        />
      );
    } else {
      element = (
        <GuineaPigsSubmission
          onChange={this.handleGuineaPigChange}
          guineaPigs={this.state.guineaPigs}
          errorText={this.state.errorText}
          onChangePage={this.changePage}
        />
      );
    }

    return (
      <div className="container mt-4">
        <form onSubmit={this.handleSubmit}>{element}</form>
        <SubmissionModal
          confirmationMode={this.state.confirmationMode}
          handleClose={this.handleModalClose}
        />
      </div>
    );
  }
}

export default Submission;
