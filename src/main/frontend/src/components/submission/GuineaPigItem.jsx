import React, { Component } from "react";
import PropTypes from "prop-types";

class GuineaPigItem extends Component {
  render() {
    const { id, name, gender, isNeutered, age, breed } = this.props.guineaPig;
    const redStar = <span style={{ color: "red" }}>*</span>;
    return (
      <React.Fragment>
        <h3>Guinea pig {id + 1}</h3>
        <div className="form-row">
          <div className="form-group col-sm">
            <label htmlFor={"inputName" + id}>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name of guinea pig"
              id={"inputName" + id}
              name="name"
              onChange={this.props.onChange.bind(this, id)}
              value={name}
            />
          </div>
          <div className="form-group col-sm">
            <label htmlFor={"inputGender" + id}>Gender {redStar}</label>
            <select
              className="form-control"
              name="gender"
              id={"inputGender" + id}
              onChange={this.props.onChange.bind(this, id)}
              value={gender}
            >
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="UNKNOWN">Not sure</option>
            </select>
          </div>

          <div className="form-group col-sm align-self-end">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="isNeutered"
                id={"inputIsNeutered" + id}
                checked={isNeutered}
                onChange={this.props.onChange.bind(this, id)}
              />
              <label
                htmlFor={"inputIsNeutered" + id}
                className="form-check-label"
              >
                Neutered {redStar}
              </label>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-sm">
            <label htmlFor={"inputAge" + id}>
              Approximate age (specify weeks/months/years) {redStar}
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter approxmiate age"
              id={"inputAge" + id}
              name="age"
              onChange={this.props.onChange.bind(this, id)}
              value={age}
            />
          </div>
          <div className="form-group col-sm">
            <label htmlFor={"inputBreed" + id}>Breed</label>
            <select
              className="form-control"
              name="breed"
              id={"inputBreed" + id}
              onChange={this.props.onChange.bind(this, id)}
              value={breed}
            >
              <option value="ABYSSINIAN">Abyssinian</option>
              <option value="ALPACA">Alpaca</option>
              <option value="AMERICAN">American</option>
              <option value="BALDWIN">Baldwin</option>
              <option value="CORONET">Coronet</option>
              <option value="HIMALAYAN">Himalayan</option>
              <option value="LUNKARYA">Lunkarya</option>
              <option value="MERINO">Merino</option>
              <option value="PERUVIAN">Peruvian</option>
              <option value="REX">Rex</option>
              <option value="SHEBA">Sheba</option>
              <option value="SILKIE">Silkie</option>
              <option value="SKINNY">Skinny</option>
              <option value="TEDDY">Teddy</option>
              <option value="TEXEL">Texel</option>
              <option value="WHITECRESTED">Whitecrested</option>
              <option value="UNKNOWN">Not sure</option>
            </select>
          </div>
        </div>
        <br />
        <br />
      </React.Fragment>
    );
  }
}

GuineaPigItem.propTypes = {
  guineaPig: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default GuineaPigItem;
