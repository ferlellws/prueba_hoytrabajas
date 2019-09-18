import React from "react"
import PropTypes from "prop-types"
import LinkButton from "./LinkButton"

class User extends React.Component {
  render () {
    return (
      <tr>
        <td>{this.props.user.first_name}</td>
        <td>{this.props.user.last_name}</td>
        <td>{this.props.user.phone_number}</td>
        <td colSpan={2}>
          <LinkButton class_btn="primary"
              href={ "/users/" + this.props.user.id + "/edit" }
              value="Editar"/>
          <LinkButton class_btn="danger ml-3"
              href={ "/users/" + this.props.user.id }
              value="Eliminar"
              data_confirm="Est&aacute; segur@?"
              method="delete"/>
        </td>
      </tr>
    );
  }
}

export default User
