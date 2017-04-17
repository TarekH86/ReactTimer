import React, { Component } from 'react';

class Controls extends Component {
   static propTypes = {
        countdownStatus: React.PropTypes.string.isRequired
    }

    renderStartStopButton = () =>{
        if (this.props.countdownStatus === 'started'){
            return <button className="button secondary">Pause</button>
        }else if( this.props.countdownStatus === 'paused'){
             return <button className="button primary">Start</button>
        }
    }

    render(){
        const { countdownStatus } = this.props;
        return (
            <div>
                 {this.renderStartStopButton()}
                <button className="button alert hollow">Clear</button>
            </div>
        );
    }
} 

export default Controls