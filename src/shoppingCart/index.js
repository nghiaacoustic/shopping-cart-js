import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from "./data.json"

export default class LiftingStateUpCart extends Component {

  constructor(props){
    super(props);
    this.state = {
      listProduct : data,
      productDetails : data[0],
      listCart : [],
    };
  };


  bidingDetails = (product) => {
    this.setState({
      productDetails: product,
    });
  };
  _findIndex = (maSP) => {
    return this.state.listCart.findIndex((item)=>{
      return item.maSP === maSP;
    });
  };

  addCart = (product) => {
    const index = this._findIndex(product.maSP);
    let listCart = [...this.state.listCart];
    if(index!==-1){
      listCart[index].soLuong+=1;
    }else{
      const productNew = {
        maSP: product.maSP,
        tenSP: product.tenSP,
        hinhAnh:product.hinhAnh,
        soLuong:1,
        giaBan : product.giaBan,
      };
      listCart = [...this.state.listCart, productNew]
    }

    this.setState({
      listCart, 
    })
  }
  deleteProduct = (product) => {
    let listCart = [...this.state.listCart];
    let index= listCart.indexOf(product);
    if (index !== -1) {
      listCart.splice(index,1);
      this.setState({
        listCart,
      })
    }
  };


  increaseBtn = (product) =>{
    let listCart = [...this.state.listCart];
    let index= listCart.indexOf(product);
    if (index !== -1) {
      listCart[index].soLuong+=1;
      this.setState({
        listCart,
      })
    }
  };

  decreaseBtn = (product) =>{
    let listCart = [...this.state.listCart];
    let index= listCart.indexOf(product);
    if (index !== -1) {
      listCart[index].soLuong-=1;
      if(listCart[index].soLuong==0){
        listCart.splice(index,1);
        this.setState({
          listCart,
      })
      }
      this.setState({
        listCart,
      })
    }
  }

  render() {
    const { productDetails} = this.state;
    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng (0)
          </button>
        </div>
        <DanhSachSanPham 
            listProduct = {this.state.listProduct}
            bidingDetails = {this.bidingDetails}
            addCart = {this.addCart}
            />
        <Modal
         listCart = {this.state.listCart}
          deleteProduct={this.deleteProduct}
          increaseBtn = {this.increaseBtn}
          decreaseBtn = {this.decreaseBtn}
         />
        <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src={productDetails.hinhAnh} alt="" />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{productDetails.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{productDetails.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{productDetails.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{productDetails.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{productDetails.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{productDetails.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
