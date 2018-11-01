import React, { Component } from 'react';


class User extends Component {
  render() {
    return (
      <div className="userProfile">
        <h3>Username</h3>
        <h4>First Last</h4>
        <span>An image will be here.</span>
        <EditUser />
      </div>

    );
  }
}

class EditUser extends Component {
  render() {
    return (
      <button className="editUser">Edit</button>
    );
  }
}


export default User;