import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import Main from 'Main';

require('foundation-sites/dist/css/foundation.min.css');
import scss from 'apllicationStyle';
import CSS from 'CSS'

ReactDOM.render(

    <Router history={hashHistory}>
        <Route path="/" component={Main}>
        </Route>
    </Router>
    ,
    document.getElementById('app')
    
);