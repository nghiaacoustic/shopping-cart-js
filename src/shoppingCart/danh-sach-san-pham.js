import React, { Component } from "react";
import SanPham from "./san-pham";

export default class DanhSachSanPham extends Component {

  renderHTML=()=>{
    return this.props.listProduct.map((item)=>{
      return <SanPham
                 key={item.maSP}
                 product={item}
                 bidingDetails = {this.props.bidingDetails}
                />
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderHTML()}
        </div>
      </div>
    );
  }
}
