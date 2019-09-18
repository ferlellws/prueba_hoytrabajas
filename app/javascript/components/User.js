import React from "react"
import PropTypes from "prop-types"
import LinkButton from "./LinkButton"

class User extends React.Component {
  deleteUser(user) {
    this.sendDataToController(user, 'DELETE', `/users/${user.id}`, "Persona eliminada correctamente");
  }

  sendDataToController(user, method, url, msg) {
    $.ajax({
      url: url,
      type: method,
      data: { user: user },
      success: () => {
        // alert(msg);
      },
      error: (errors) => {
        $.each(errors.responseJSON, (key, value) => {
          errors = [];
          $("#" + key).addClass("is-invalid");
          errors.push(value);
          this.setState({
            errors: errors
          });

          $(".alert").removeClass("d-none");
        })
      }
    })
  }

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
              // href={ "/users/" + this.props.user.id }
              href="#"
              value="Eliminar"
              // data_confirm="Est&aacute; segur@?"
              with_action={true}
              // method="delete"
              onClickButton={this.deleteUser.bind(this, this.props.user)}/>
        </td>
      </tr>
    );
  }
}

export default User
