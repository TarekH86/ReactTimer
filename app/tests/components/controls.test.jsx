import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Controls from 'Controls';


describe('Controls', ()=>{
    it('should existe', () =>{
        expect(Controls).toExist();
    });

describe('render', () => {

it('should render Pause when started', () =>{
    const controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" />);
    const $el = $(ReactDOM.findDOMNode(controls));
    const $pauseButton = $el.find('button:contains(Pause)');
    expect($pauseButton.length).toBe(1); // 1 DOM Ellemnt 
});

it('should render Start when paused', () => {
    const controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" />);
    const $el = $(ReactDOM.findDOMNode(controls));
    const $startButton = $el.find('button:contains(Start)');
    expect($startButton.length).toBe(1);
});

});

});