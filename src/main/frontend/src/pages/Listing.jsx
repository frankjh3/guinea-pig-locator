import React, { Component } from "react";
import axios from "axios";

import ListingInfoElement from "../components/listing/ListingInfoElement";
import GuineaPigDisplay from "../components/listing/GuineaPigDisplay";

class Listing extends Component {
  state = {
    listing: { location: {}, guineaPigs: [], active: true },
    found: true
  };

  componentDidMount() {
    axios
      .get("/api/v1/listing/" + this.props.match.params.id)
      .then(res => this.setState({ listing: res.data }))
      .catch(error => {
        console.log(error);
        this.setState({ found: false });
      });
  }

  setListingToInactive() {
    const listing = this.state.listing;
    listing.active = false;
    listing.guineaPigs.map(gp => {
      gp.adopted = true;
      return gp;
    });
    this.setState({ listing: listing });
  }

  handleListingAdopted() {
    axios
      .post("/api/v1/listing/" + this.props.match.params.id)
      .then(res => {
        console.log(res);
        this.setListingToInactive();
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleGuineaPigAdopted = id => {
    const guineaPigs = this.state.listing.guineaPigs.map(gp => {
      if (gp.id === id) {
        gp.adopted = true;
      }
      return gp;
    });
    const listing = this.state.listing;
    listing.guineaPigs = guineaPigs;
    this.setState({ listing: listing });
    if (listing.guineaPigs.filter(gp => !gp.adopted).length === 0) {
      this.setListingToInactive();
    }
  };

  render() {
    const containerPadding = { marginBottom: "10px", padding: "10px" };
    const date = new Date(this.state.listing.timeListed + "Z");
    if (!this.state.found) {
      return <h1>Error: listing could not be found</h1>;
    } else {
      return (
        <div className="container">
          {this.state.listing.active ? (
            ""
          ) : (
            <h1 style={{ color: "#800000" }}>
              This listing is no longer active
            </h1>
          )}
          <h1 className="text-center" style={containerPadding}>
            {this.state.listing.title}
          </h1>
          <img
            className="img-fluid"
            // {for now, just use random picture of guinea pig. In future, add storing pictures on s3}
            src={
              "../guinea_pig_pictures/guinea_pig_" +
              this.state.listing.pictureNum +
              ".jpg"
            }
            alt="guinea pig image"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
              width: "40%"
            }}
          />
          <br />
          <h5>Info:</h5>
          <div
            className="row row-cols-2"
            style={{ marginLeft: "0", marginRight: "0" }}
          >
            <div className="border col" style={{ padding: "10px" }}>
              {this.state.listing.mustAdoptTogether
                ? "Must adopt the guinea pigs together"
                : "Can adopt the guinea pigs separate"}
            </div>
            <div
              className="border border-left-0 col"
              style={{ padding: "10px" }}
            >
              {this.state.listing.listingType === "HOME"
                ? "This is a home listing"
                : ""}
              {this.state.listing.listingType === "RESCUE"
                ? "This was listed by a rescue"
                : ""}
              {this.state.listing.listingType === "PETSTORE"
                ? "This was listed for a pet store"
                : ""}
            </div>
            <div className="border border-top-0 col" style={containerPadding}>
              Listed on {date.toLocaleDateString()}
            </div>
            <div
              className="border border-top-0 border-left-0 col"
              style={containerPadding}
            >
              Asking price:{" "}
              {this.state.listing.price === 0 || this.state.listing.price === ""
                ? "free"
                : "$" + this.state.listing.price}
            </div>
          </div>

          <ListingInfoElement
            header="Description:"
            body={this.state.listing.description}
          />

          <div
            className="row row-cols-2"
            style={{ marginLeft: "0", marginRight: "0" }}
          >
            <ListingInfoElement
              header="Location:"
              body={
                this.state.listing.location.city +
                ", " +
                this.state.listing.location.state +
                " " +
                this.state.listing.location.zip
              }
            />

            <div className="border border-left-0" style={containerPadding}>
              <h5>Contact info:</h5>
              <span>Phone number: {this.state.listing.phone}</span>
              <br />
              <span>Email: {this.state.listing.email}</span>
            </div>
          </div>

          <h2
            className="text-left"
            style={{ marginBottom: "20px", marginTop: "5px" }}
          >
            Guinea Pigs:
          </h2>

          {this.state.listing.guineaPigs.map(guineaPig => (
            <GuineaPigDisplay
              key={guineaPig.id}
              guineaPig={guineaPig}
              onGuineaPigAdopted={this.handleGuineaPigAdopted}
              mustAdoptTogether={this.state.listing.mustAdoptTogether}
            />
          ))}
          <button
            type="button"
            className="btn-md btn-primary btn-md float-left
          "
            style={{ marginBottom: "50px", marginTop: "20px" }}
            onClick={this.handleListingAdopted.bind(this)}
          >
            Click here if you have adopted every guinea pig in this listing!
          </button>
          <br />
        </div>
      );
    }
  }
}

export default Listing;
