import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import data from "./data.json"
class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listUser: data,
      userEdit: null,
      keyword: "",
    }
  }
  _findItem = (user) => {
    let listUser = [...this.state.listUser];
    return listUser.indexOf(user);
  }
  _findIndex = (id) => {
    let listUser = [...this.state.listUser];
    return listUser.findIndex((item) => {
      return item.id === id;
    })
  }
  deleteUser = (user) => {
    let listUser = [...this.state.listUser];
    let index = this._findItem(user);
    if (index !== -1) {
      listUser.splice(index, 1);
    }
    this.setState({
      listUser,
    })
  };

  onSubmit = (user) => {
    let listUser = [...this.state.listUser];
    if (user.id) {
      //nếu có id thì update
      const index = this._findIndex(user.id);
      if (index !== -1) listUser[index] = user;
    } else {
      const userNew = { ...user, id: Math.random() };
      listUser = [...this.state.listUser, userNew];
    }
    //tránh trùng id

    this.setState({
      listUser,
    })
  }

  handleGetUserEdit = (user) => {
    // console.log(user)
    this.setState({
      userEdit: user,
    })

  }

  handleGetKeyword = (keyword) => {
    this.setState({
      keyword,
    });
  }

  render() {
    let {listUser,keyword}=this.state;
    listUser = listUser.filter((user) => {
      return user.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
    });
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search getKeyWord={this.handleGetKeyword} />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              this.setState({
                userEdit: null,
              })
            }}
          >
            Add User
          </button>
        </div>
        <Users
          listUser={listUser}
          deleteUser={this.deleteUser}
          getUserEdit={this.handleGetUserEdit}
        />
        <Modal
          onSubmit={this.onSubmit}
          userEdit={this.state.userEdit}
        />
      </div>
    );
  }
}

export default Home;
