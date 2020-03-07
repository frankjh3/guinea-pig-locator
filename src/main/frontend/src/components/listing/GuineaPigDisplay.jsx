import React, { Component } from "react";
import axios from "axios";

class GuineaPigDisplay extends Component {
  handleAdopt = () => {
    axios
      .post("/api/v1/guineapig/" + this.props.guineaPig.id)
      .then(res => {
        console.log(res);
        this.props.onGuineaPigAdopted(this.props.guineaPig.id);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div
        className="row row-cols-2"
        style={{ marginLeft: "0", marginRight: "0", marginBottom: "20px" }}
      >
        <h3
          className="border border-bottom-0 col-12"
          style={{ marginBottom: "0", padding: "5px" }}
        >
          {this.props.guineaPig.name
            ? this.props.guineaPig.name
            : "Guinea pig " + this.props.guineaPig.id}
        </h3>
        <div className="border col" style={{ padding: "10px" }}>
          {this.props.guineaPig.adopted ? (
            <span>{this.props.guineaPig.name} has been adopted</span>
          ) : (
            <span>{this.props.guineaPig.name} is available!</span>
          )}
        </div>
        <div className="border border-left-0 col" style={{ padding: "10px" }}>
          {this.props.guineaPig.name +
            "'s age is " +
            (this.props.guineaPig.age
              ? this.props.guineaPig.age
              : "is not known")}
        </div>
        <div className="border border-top-0 col" style={{ padding: "10px" }}>
          <span>
            {this.props.guineaPig.gender !== "UNKNOWN"
              ? this.props.guineaPig.gender === "MALE"
                ? "Male"
                : "Female"
              : "Gender is unknown"}
          </span>
        </div>
        <div
          className="border border-top-0 border-left-0 col"
          style={{ padding: "10px" }}
        >
          {this.props.guineaPig.name +
            (this.props.guineaPig.isNeutered
              ? " is neutered"
              : " is not neutered")}
        </div>
        <div className="border border-top-0 col" style={{ padding: "10px" }}>
          {this.props.guineaPig.name +
            "'s breed is " +
            this.props.guineaPig.breed.toLowerCase()}
        </div>
        {this.props.mustAdoptTogether ? (
          ""
        ) : (
          <div
            className="col-6"
            style={{ paddingLeft: "0", paddingRight: "0", textAlign: "left" }}
          >
            <button
              type="button"
              className="btn btn-lg btn-primary btn-block
          "
              onClick={this.handleAdopt.bind(this)}
            >
              Click here if you have adopted this guinea pig!
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default GuineaPigDisplay;
