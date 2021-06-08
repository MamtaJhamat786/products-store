import React, { Component } from "react";
import axios from 'axios'
class CreateProduct extends Component {
  constructor() {
    super();
    this.state = {
      objId: "",
      title: "",
      description: "",
      price:"",
      quantity: 1,

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    let newState = {...this.state};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  };
  incrementValue = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };
  decrementValue = () => {
    this.setState({ quantity: this.state.quantity - 1 });
    if (this.state.quantity === 1) {
      this.setState({ value: 1 });
    }
  };
  
  handleSubmit= async()=>{
     const  obj = {
            title: this.state.title,
            description: this.state.description,
            price : this.state.price,
            quantity :this.state.quantity,

      }
   
    await axios.post("http://192.168.1.117:9000/product/new-product",  obj )
      .then(response => {
          console.log(response);
          console.log(response.data);
      })
      .catch (error =>{
          console.log(error.error)
      })

  }

  render() {
    
    return (
      <div className="container">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Onion"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            type="number"
            name="description"
            value={this.state.description}
            id="description"
            placeholder="This is very good product"
            onChange={this.handleChange}
          ></textarea>
        </div>
        <div className="d-flex">
        <label htmlFor="price" className="form-label pricefield">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={this.state.price}
            pattern="\d+((\.|,)\d+)?"
            className="form-control"
            id="price"
            onChange={this.handleChange}
            
          />

        </div>
       
        <div>
          <label htmlFor="quantity" className="form-label quantityfield">
            Quantity
          </label>
        </div>
        <div className="d-flex">
          <button
            type="button"
            className="btn btn-secondary rounded-0 rounded-start"
            onClick={this.decrementValue}
          >
            -
          </button>
          <input
            id="quantity"
            name="quantity"
            className="form-control rounded-0 write-number"
            type="number"
            style={{ width: 80 }}
            value={this.state.quantity}
          />
          <button
            type="button"
            className="btn btn-secondary rounded-0 rounded-end"
            onClick={this.incrementValue}
          >
            +
          </button>
        </div>
        
        <div  className="d-flex mt-3">
        <label htmlFor="totalPrice" className="form-label">
            Total Price
          </label>
          <p > : {this.state.price * this.state.quantity}</p>
        </div>
        <div>
            <button type="button"  className="btn btn-info mt-3" onClick={this.handleSubmit}>save</button>
        </div>
      </div>
      
    );
  }
}

export default CreateProduct;
