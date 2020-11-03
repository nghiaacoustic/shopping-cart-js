import React, { Component } from "react";

export default class SanPham extends Component {

  render() {
    return (
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src={this.props.product.hinhAnh} alt="" />
          <div className="card-body">
            <h4 className="card-title">VinSmart Live</h4>
            <button className="btn btn-success" onClick={()=> {this.props.bidingDetails(this.props.product)}}>Chi tiết</button>
            <button className="btn btn-danger">Thêm giỏ hàng</button>
          </div>
        </div>
      </div>
    );
  }
}
