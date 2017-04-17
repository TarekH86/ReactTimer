import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import CountDown from 'CountDown';


describe('CountDown', () =>{
    it('should existe', () =>{
    const countDown = expect(CountDown).toExist();
});

describe('handleSetCountdown', ()=>{

    
    it('should set state to started and countdown', (done) => {
    const countdown = TestUtils.renderIntoDocument(<CountDown />);
    countdown.handleSetCountdown(10);

    expect(countdown.state.count).toBe(10);
    expect(countdown.state.countdownStatus).toBe('started');


     setTimeout(() => {
    expect(countdown.state.count).toBe(9);
    done(); // wait to done() is called to stop the test becaus mocha dose not support acyncronus function
    }, 1001)

});


 it('should never set count less than zero', (done) => {
    
    const countdown = TestUtils.renderIntoDocument(<CountDown />);
    countdown.handleSetCountdown(0);
   setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done(); 
    }, 1001);

    });

});

});