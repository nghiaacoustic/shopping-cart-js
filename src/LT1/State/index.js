import React, { Component } from 'react'

export default class ChangeCar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: "./img/imgBlackCar.jpg",
        }
    }

    btnChangeColor = (url) =>{
        this.setState ({
            url,
        })
    }

    render() {
        const { url } = this.state;
        return (
            <div className="container">
                <h3>*ChangeCar</h3>
                <div className="row">
                    <div className="col-sm-8">
                        <img className="img-fluid" src={url}></img>
                    </div>
                    <div className="col-sm-4">
                        <button className="btn btn-dark mr-4" onClick={() => { this.btnChangeColor("./img/imgBlackCar.jpg")}}>Black Car</button>
                        <button className="btn btn-danger mr-4" onClick={() => { this.btnChangeColor("./img/imgRedCar.jpg") }}>Red Car</button>
                        <button className="btn btn-light" onClick={() => { this.btnChangeColor("./img/imgSilverCar.jpg") }}>Silver Car</button>
                    </div>
                </div>
            </div>
        )
    }
}
