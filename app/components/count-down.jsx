import React, { Component } from 'react';
import Clock from 'Clock';
import CountDownForm from 'CountDownForm';
import Controls from 'Controls';

class CountDown extends Component {

    constructor(props){
        super(props);
    this.state = {
             count: 0,
            countdownStatus: 'stopped'
        }
    }

    handleSetCountdown = (seconds) => {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    }

// Life Cycle:
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

    // componentWillUpdate = (nextProps, nextState) => {
        
    // }

    // componentWillMount = () => { // will fierd before get render
    //     console.log('componentWillMount')
    // }
    // componentDidMount = () => { // will fired just the component get renderd
    //     console.log('componentDidMount')
    // }

    componentWillUnmount = () => { // will fired onDestroy
        console.log('componentDidUnmount');
        clearInterval(this.timer);
        this.timer = undefined;
    }
// ----------------------------
     startTimer = () => {
        this.timer = setInterval(() => {
            let newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });
            if(newCount === 0){
            this.setState({countdownStatus: 'stopped'}) ;
            }
        }, 1000)
    }
    
    handleStatusChange = (newStatus) => {
        this.setState({
            countdownStatus: newStatus
        });
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
                <h1 className="page-title">Countdown App</h1>
              <Clock totalSeconds={count} />
                {this.renderContolArea()}
            </div>
        );
    }
}

export default CountDown;
