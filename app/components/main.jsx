import React, { Component } from 'react';

import Nav from 'Nav';


class Main extends Component {

    render() {
        return (
            <div>
                <div  >
                    <Nav />
                    <div>
                        <p>Main.jsx Renderd</p>
                        {this.props.children}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Main;