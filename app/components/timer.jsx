import React, { Component } from 'react';

import Clock from 'Clock';
import Controls from 'Controls';
class Timer extends Component {
    constructor(props){
        super(props);
    this.state = {
             count: 0,
            timerStatus: 'paused'
        }
    }

     componentWillUnmount = () => { // will fired onDestroy
        console.log('componentDidUnmount');
        clearInterval(this.timer);
        this.timer = undefined;
    }
   

    handleSetCountdown = (seconds) => {
        this.setState({
            count: seconds,
            timerStatus: 'started'
        });
    }

 componentDidUpdate = (prevProps, prevState) => { // called when the props or state is updating;
        if (this.state.timerStatus !== prevState.timerStatus) {
            switch (this.state.timerStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({ count: 0, timerStatus: 'paused'});
                case 'paused':
                   clearInterval(this.timer)
                    this.timer = undefined;
                    break;
            }
        }
    }




 renderContolArea = () => {
        const timerStatus = this.state.timerStatus;
            return <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} />
        
    }


    handleStatusChange = (newStatus) => {
        this.setState({
            timerStatus: newStatus
        });
    }

 startTimer = () => {
        this.timer = setInterval(() => {
            let newCount = this.state.count + 1;
            this.setState({
                count: newCount 
            });
        }, 1000)
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <h1 className="page-title">Timer</h1>
              <Clock totalSeconds={count} />
                {this.renderContolArea()}
            </div>
        );
    }
}

export default Timer;