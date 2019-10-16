import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Navbar</span>
        <span className="badge badge-pill badge-secondary">
          total items: {this.props.totalCounters}
        </span>
        <button onClick={this.checkProps} />
      </nav>
    );
  }
}

export default NavBar;
