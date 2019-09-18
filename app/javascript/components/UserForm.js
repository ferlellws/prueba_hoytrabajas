import React from "react"
import PropTypes from "prop-types"
import update from "immutability-helper"

import FieldUserForm from "./FieldUserForm"
import ButtonGlobal from "./ButtonGlobal"
import LinkButton from "./LinkButton"
import Alert from "./Alert"

class UserForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: this.props.users,
      errors: null,
      id: this.props.user.id,
      first_name: this.props.user.first_name !== null ? this.props.user.first_name : '',
      last_name: this.props.user.last_name !== null ? this.props.user.last_name : '',
      phone_number: this.props.user.phone_number !== null ? this.props.user.phone_number : ''
    }
  }

  addNewUser(user) {
    if (this.state.users == null) {
      return false;
    }

    var users = update(this.state.users, {
      $push: [user]
    });

    // var users = this.state.users;
    // users.push(user);

    this.setState({
      users: users.sort((a, b) => {
        return a.first_name.toLowerCase() - b.first_name.toLowerCase()
      })
    })
  }

  handleUserTypeInput(obj) {
    $.each(obj, (key, value) => {
      if (Object.keys(obj).length > 0) {
        $("#" + key).removeClass("is-invalid").addClass("is-valid");
      }
    });

    if ($(".is-invalid").length == 0) {
      $(".actions input").prop('disabled','');
      $(".alert").addClass("d-none");
    }
    this.setState(obj);
  }

  handleSubmit(e) {
    var user = {
      id: this.state.id,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      phone_number: this.state.phone_number,
    }
    var states = this.state;
    e.preventDefault();
    if (this.props.action == 'new') {
      $.post('/users', { user: user })
        .done(function(data) {
          this.addNewUser(data);
        }.bind(this))
        .fail((errors) => {
          $.each(errors.responseJSON, (key, value) => {
            errors = [];
            $("#" + key).addClass("is-invalid");
            errors.push(value);
            this.setState({
              errors: errors
            });

            $(".alert").removeClass("d-none");
          })
        });
    } else {
      console.log(user);
      $.ajax({
        url: `/users/${user.id}`,
        type: 'PUT',
        data: { user: user },
        success: () => {
            console.log('you did it!!!');
            //this.updateItems(item);
            // callback to swap objects
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
      // $.post('/users/' + user.id, { user: user })
      //   .done(function(data) {
      //     this.addNewUser(data);
      //   }.bind(this))
      //   .fail((errors) => {
      //     $.each(errors.responseJSON, (key, value) => {
      //       errors = [];
      //       $("#" + key).addClass("is-invalid");
      //       errors.push(value);
      //       this.setState({
      //         errors: errors
      //       });

      //       $(".alert").removeClass("d-none");
      //     })
      //   });
    }
  }

  handleCleanForm() {
    var user = {
      first_name: '',
      last_name: '',
      phone_number: ''
    }
    this.setState(user);
  }

  render () {
    return (
      <React.Fragment>
        <div className="row mb-4">
          <div className="col-sm">
            <Alert/>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-sm">
            <LinkButton class_btn="info"
                href="/users"
                value="Atr&aacute;s"/>
          </div>
        </div>
        <hr />

        <form onSubmit={this.handleSubmit.bind(this) }>
          <FieldUserForm field="first_name"
            field_name="Nombres"
            value={this.state.first_name}
            onUserInput={this.handleUserTypeInput.bind(this)}
            errors={this.state.errors}/>

          <FieldUserForm field="last_name"
            field_name="Apellidos"
            value={this.state.last_name}
            onUserInput={this.handleUserTypeInput.bind(this)}
            errors={this.state.errors}/>

          <FieldUserForm field="phone_number"
            field_name="Teléfono"
            value={this.state.phone_number}
            onUserInput={this.handleUserTypeInput.bind(this)}
            errors={this.state.errors}/>

          <div className="actions mt-3">
            <ButtonGlobal type="submit"
              value="Guardar"
              class_btn="primary"
              with_action={false}/>

            <ButtonGlobal type="button"
              value="Limpiar"
              class_btn="warning ml-2"
              with_action={true}
              onClickButton={this.handleCleanForm.bind(this)} />
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default UserForm
