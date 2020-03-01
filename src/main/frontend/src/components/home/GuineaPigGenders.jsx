import React, { Component } from "react";
import PropTypes from "prop-types";

class GuineaPigGenders extends Component {
  numGender = gender => {
    return this.props.guineaPigs.filter(males => males.gender === gender)
      .length;
  };

  render() {
    const numMales = this.numGender("MALE");
    const numFemales = this.numGender("FEMALE");
    return (
      <React.Fragment>
        {numMales > 0 ? numMales + " males" : ""}
        {numMales > 0 && numFemales > 0 ? ", " : ""}
        {numFemales > 0 ? numFemales + " females" : ""}
      </React.Fragment>
    );
  }
}

GuineaPigGenders.propTypes = {
  guineaPigs: PropTypes.object.isRequired
};

export default GuineaPigGenders;
