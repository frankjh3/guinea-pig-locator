import React, { Component } from "react";
import ListingPreview from "../components/home/ListingPreview";

class Home extends Component {
  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md mb-4">
            <div className="card">
              <img
                className="card-img-top"
                src="logo192.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn-sm btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md mb-4">
            <div className="card">
              <img
                className="card-img-top"
                src="logo192.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn-sm btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md mb-4">
            <div className="card">
              <img
                className="card-img-top"
                src="logo192.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn-sm btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
