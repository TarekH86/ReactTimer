import React, { Component } from 'react';
import Clock from 'Clock';
import CountDownForm from 'CountDownForm';

class CountDown extends Component {
state ={
    count: 0,
    countdownStatus: 'stopped'
}
handleSetCountdown = (seconds) =>{
this.setState({
    count: seconds,
    countdownStatus: 'started'
});
}
componentDidUpdate = (prevProps, prevState) =>{ // called when the props or state is updating;
if(this.state.countdownStatus !== prevState.countdownStatus){
    switch (this.state.countdownStatus) {
        case 'started': 
        this.startTimer();
        break;
    }
}
}
startTimer = () =>{
    this.timer = setInterval(() =>{
let newCount = this.state.count -1;
this.setState({
    count: newCount >= 0 ? newCount : 0
});
    }, 1000)
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
