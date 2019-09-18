import React from "react"
import PropTypes from "prop-types"
class Alert extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="alert alert-danger d-none" role="alert">
          <h4 className="alert-heading">Errores</h4>
          <p>Por favor, corrija los campos</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Alert
