import React, { Component } from 'react';
import Clock from 'Clock';
import CountDownForm from 'CountDownForm';
import Controls from 'Controls';

class CountDown extends Component {
    state = {
        count: 0,
        countdownStatus: 'stopped'
    }

    handleSetCountdown = (seconds) => {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    }

    componentDidUpdate = (prevProps, prevState) => { // called when the props or state is updating;
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({ count: 0 });
                case 'paused':
                   clearInterval(this.timer)
                    this.timer = undefined;
                    break;
            }
        }
    }

    startTimer = () => {
        this.timer = setInterval(() => {
            let newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });
        }, 1000)
    }
    
    handleStatusChange = (newStatus) => {
        this.setState({
            countdownStatus: newStatus
        })
    }

    renderContolArea = () => {
        const countdownStatus = this.state.countdownStatus;

        if (countdownStatus !== 'stopped') {
            return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
        } else {
            return <CountDownForm onSetCountdown={this.handleSetCountdown} />
        }
    }


    render() {
        const { count } = this.state;
        return (
            <div>
                <Clock totalSeconds={count} />
                {this.renderContolArea()}
            </div>
        );
    }
}

export default CountDown;
