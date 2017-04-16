import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends Component {

    render() {
        return(
         <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Time App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
                        </li>
                        <li>
                            <Link to="/countdown" activeClassName="active-link">Countdown</Link>
                        </li>
                       
                    </ul>
                </div>

                <div className="top-bar-right">
                <form onSubmit={this.onSearch}>
                <ul className="menu">
                    <li className="menu-text">
                        Created by <a href="#">Someone</a>
                    </li>
                 </ul>
                </form>
                </div>
            </div>
    )
    }
} 

export default Nav;