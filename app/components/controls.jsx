import React, { Component, PropTypes } from 'react';

class Controls extends Component {
   static propTypes = {
        countdownStatus: PropTypes.string.isRequired,
        onStatusChange: PropTypes.func.isRequired
    }
onStatusChange = (newStatus) => {
return () => {
    this.props.onStatusChange(newStatus);
}
    }
    renderStartStopButton = () =>{
        if (this.props.countdownStatus === 'started'){
            return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
        }else if( this.props.countdownStatus === 'paused'){
             return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
        }
    }

    

    render(){
        const { countdownStatus } = this.props;
        return (
            <div className="controls">
                 {this.renderStartStopButton()}
                <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
            </div>
        );
    }
} 

export default Controls