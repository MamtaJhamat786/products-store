import "./App.css";
import React, { Component } from "react";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import CreateProduct from "./components/CreateProduct";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main  className="container">
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About} />
            <Route path="/createproduct" component={CreateProduct} />
            <Route path="/products" component={Products} />
            <Redirect to="/not-found"></Redirect>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
