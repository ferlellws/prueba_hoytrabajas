import React from "react"
import PropTypes from "prop-types"
class FieldUserForm extends React.Component {

  handleChange(e) {
    var name = e.target.name;
    var obj = {};
    obj[name] = e.target.value;
    // console.log(props);
    this.props.onUserInput(obj);
  }

  render () {
    return (
      <div className="field">
        <label htmlFor={this.props.field}>{this.props.field_name}</label>
        <input className="form-control" type="text" name={this.props.field} id={this.props.field} value={this.props.value} onChange={this.handleChange.bind(this)}/>
        <div className="invalid-feedback">
          {this.props.errors}
        </div>
      </div>
    );
  }
}

export default FieldUserForm
