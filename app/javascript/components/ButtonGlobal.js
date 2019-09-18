import React from "react"
import PropTypes from "prop-types"
class ButtonGlobal extends React.Component {
  handleOnClick() {
    if (this.props.with_action) {
      this.props.onClickButton();
    }
  }

  render() {
    return (
      <input type={this.props.type}
        name="commit"
        value={this.props.value}
        className={"btn btn-outline-" + this.props.class_btn}
        data-disable-with={this.props.value}
        onClick={this.handleOnClick.bind(this)} />
    );
  }
}

export default ButtonGlobal
