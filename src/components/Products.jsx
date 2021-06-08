import React, { Component } from "react";
import axios from "axios";
class Products extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    axios.get(`http://192.168.1.117:9000/product/get-all`)
    .then((res) => {
      const products = res.data.products;
      this.setState({ products: products });
    });
  }

  render() {
    return (
      <div>
        <h1>All Products to shop</h1>
        <ul>
          {this.state.products.map((product) => (
            <li>{product.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Products;
