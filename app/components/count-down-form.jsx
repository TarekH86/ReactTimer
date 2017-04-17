import React, { Component } from 'react';

class CountDownForm extends Component {
    onSubmit = (e) => {
        e.preventDefault();
        const strSeconds = this.refs.seconds.value;

        if (strSeconds.match(/^[0-9]*$/)  && strSeconds !== ''){
            this.refs.seconds.value = '';
            this.props.onSetCountdown(parseInt(strSeconds, 10));
        }
    }
    render() {
        return (
            <div>
                <form ref="form" onSubmit={this.onSubmit} className="countdown-from">
                    <input type="text" ref="seconds" placeholder="Enter time in seconds" />
                    <button className="button expanded">Start</button>
                </form>
            </div>
        );
    }


}

export default CountDownForm;