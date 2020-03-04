import React, { Component } from "react";
import PropTypes from "prop-types";

// can be used in place of number or text entries
class FormGroup extends Component {
  render() {
    const redStar = <span style={{ color: "red" }}>*</span>;
    const id = "input" + (this.props.id ? this.props.id : this.props.name);
    return (
      <div className={"form-group " + this.props.groupClass}>
        <label htmlFor={id}>
          {this.props.label} {this.props.isRequired ? redStar : ""}
        </label>
        <input
          type={this.props.type}
          className="form-control"
          placeholder={this.props.placeholder}
          id={id}
          name={this.props.name}
          onChange={this.props.onChange}
          value={this.props.value}
        />
      </div>
    );
  }
}

FormGroup.propTypes = {
  groupClass: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired
};

export default FormGroup;
