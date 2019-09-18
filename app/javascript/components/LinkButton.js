import React from "react"
import PropTypes from "prop-types"
class LinkButton extends React.Component {
  render () {
    return (
      <a className={"btn btn-outline-" + this.props.class_btn}
        href={this.props.href}
        data-confirm={this.props.data_confirm !== null ? this.props.data_confirm : ""}
        data-method={this.props.method !== null ? this.props.method : ""}>{this.props.value}</a>
    );
  }
}

export default LinkButton
