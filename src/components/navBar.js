import React, { Component } from "react";

class NavBar extends Component {
    // state = {}; doesnt needed

    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <a href="google.com" className="navbar-brand">
                    Add to cart
                </a>
                <span className="badge badge-pill badge-secondary">
                    {this.props.totalCounters}
                </span>
            </nav>
        );
    }
}

export default NavBar;
