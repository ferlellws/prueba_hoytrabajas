import React from "react"
import PropTypes from "prop-types"
import User from "./User"
import LinkButton from "./LinkButton"
class Index extends React.Component {
  // constructor(props){
  //   super(props);
  // }
  render () {
    return (
      <React.Fragment>
        <div className="row mb-3">
          <div className="col-sm">
            <LinkButton class_btn="success"
              href="/users/new"
              value="Nueva persona"/>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm">
            <table className="table mt-5">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellido</th>
                  <th scope="col">Teléfono</th>
                  <th scope="col" colSpan={2}></th>
                </tr>
              </thead>

              <tbody>
                {
                  this.props.users.map((user) => {
                    return (
                      <User user={user} key={user.id}/>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Index
