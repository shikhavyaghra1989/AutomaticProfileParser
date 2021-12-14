import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {ApplicantProfilePage, AdminPage } from './App';

ReactDOM.render(
    <Router>
       <Switch>
		      <Route exact path="/" component={ApplicantProfilePage}/>
				<Route exact path="/admin" component={AdminPage }/>
	    </Switch>
    </Router>,
    document.getElementById('root')
);

