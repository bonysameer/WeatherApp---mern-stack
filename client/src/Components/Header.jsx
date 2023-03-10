import React, {Component} from "react";

class Header extends Component {
    render() {
        return (
            <section className="header">
                <h1>Search Weather here <span role="img" aria-label={"umbrella"}>☂️</span></h1>
                <span className="annotation"></span>
            </section>
        );
    }
}

export default Header;