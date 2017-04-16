import React, { Component } from 'react';
import Clock from 'Clock';

class CountDown extends Component {

render(){
    return (
        <div>
            <Clock totalSeconds = {129}/>
        </div>
    );
}
}

export default CountDown;
