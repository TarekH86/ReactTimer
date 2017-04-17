import React, { Component } from 'react';
import Clock from 'Clock';
import CountDownForm from 'CountDownForm';

class CountDown extends Component {
state ={
    count: 0
}
handleSetCountdown = (seconds) =>{
this.setState({
    count: seconds
});
}
render(){
    const {count} = this.state;
    return (
        <div>
            <Clock totalSeconds = {count}/>
            <CountDownForm onSetCountdown={this.handleSetCountdown}/>
        </div>
    );
}
}

export default CountDown;
