import React, { Component } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:"",
      username: "",
      name: "",
      email: "",
      phoneNumber: "",
      type: "User"
    }
    /**
     * constructor chạy 1 lần duy nhất trong vòng đời của nó .!
     */
  }
  UNSAFE_componentWillReceiveProps(nextProps){
    /**
     *Chạy lại nhiều lần -->mỗi KHi nhận props từ component cha truyền vào
     */
    console.log("UNSAFE_componentWillReceiveProps",nextProps);
    if(nextProps && nextProps.userEdit){
      this.setState({
        id:nextProps.userEdit.id,
        username: nextProps.userEdit.username,
        name: nextProps.userEdit.name,
        email: nextProps.userEdit.email,
        phoneNumber: nextProps.userEdit.phoneNumber,
        type: nextProps.userEdit.type
      })
    }else{
      this.setState({
        id: "",
        username: "",
        name: "",
        email: "",
        phoneNumber: "",
        type: "User"
      })
    }
  }

  handleOnChange = (e) => {
    // console.log(e.target.name,e.target.value);
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (e) => {
    // -> preventDefault ko load lại trang
    e.preventDefault();
    // console.log(e)
    this.props.onSubmit(this.state);
  };

  render() {
    const { userEdit } = this.props;
    return (
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{userEdit ? "EDIT USER" : "ADD USER"}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" name="username" onChange={this.handleOnChange} value={this.state.username}/>
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" name="name" onChange={this.handleOnChange} value={this.state.name}/>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" name="email" onChange={this.handleOnChange} value={this.state.email}/>
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" className="form-control" name="phoneNumber" onChange={this.handleOnChange} value={this.state.phoneNumber}/>
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select className="form-control" name="type" onChange={this.handleOnChange} value={this.state.type}>
                    <option>USER</option>
                    <option>VIP</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
