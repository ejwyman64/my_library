import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <div className="userProfile">
        <img className="userImage" src="https://cdn1.thr.com/sites/default/files/imagecache/nfe_square_383x383/2013/12/Stack_of_Books_a_p.jpg" alt="stack of books" />
        <span>
          <h3>Username: iHEARTbooks58</h3>
          <h4>Name: Dewey Bibliophile</h4>
          <h4>Email: example@email.com</h4>
          <h4>Libraries: 1</h4>
        </span>
        {/* <EditUser /> */}
      </div>

    );
  }
}

// class EditUser extends Component {
//   render() {
//     return (
//       <button className="editUser">Edit</button>
//     );
//   }
// }


export default User;