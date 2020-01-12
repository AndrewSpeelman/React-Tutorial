import React, { Component } from "react";

//using class method (original), but since we do not have states or any helper functions, this class can be
//restructured as a function
/*
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}
*/
//Stateless Functional Component
const NavBar = ({ totalCounters }) => {
  //notice we have to pass props as a parameter since 'this.props' is given within classes
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
