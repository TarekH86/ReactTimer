import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import  CountDownForm from 'CountDownForm';

describe('CountDownForm', () =>{
    it('should existe', () =>{
        expect(CountDownForm).toExist();
    });

    it('should call onSetCountdown if valid seconds enterd', ()=> {
    const spy = expect.createSpy();
    const countdownForm = TestUtils.renderIntoDocument(<CountDownForm onSetCountdown={spy}/>);
    const $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
});


it('should not call onSetCountdown if invalid seconds enterd', () =>{
    const spy = expect.createSpy();
    const countdownForm = TestUtils.renderIntoDocument(<CountDownForm onSetCountdown={spy} />);
    const $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
});

});