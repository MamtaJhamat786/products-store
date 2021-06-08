import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            Learn Everyday
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <NavLink className="nav-link" aria-current="page" to="/home">
              Home
            </NavLink>

            <NavLink className="nav-link" to="/products">
              Products
            </NavLink>
            <NavLink className="nav-link" to="/createproduct">
              Create Product
            </NavLink>

            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
