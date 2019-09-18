import React from "react"
import PropTypes from "prop-types"
class LinkButton extends React.Component {
  handleOnClick() {
    if (this.props.with_action) {
      this.props.onClickButton();
    }
  }

  render () {
    return (
      <a className={"btn btn-outline-" + this.props.class_btn}
        href={this.props.href}
        data-confirm={this.props.data_confirm !== null ? this.props.data_confirm : ""}
        data-method={this.props.method !== null ? this.props.method : ""}
        onClick={this.handleOnClick.bind(this)}>{this.props.value}</a>
    );
  }
}

export default LinkButton
