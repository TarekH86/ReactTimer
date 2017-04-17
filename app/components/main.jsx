import React, { Component } from 'react';

import Nav from 'Nav';


class Main extends Component {

    render() {
        return (
            <div>
                <Nav />
                <div className="row">
                    <div className="column small-centerd medium-6-centerd larg-4-centerd">  
                        {this.props.children}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Main;