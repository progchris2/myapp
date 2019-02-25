import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from "./App";
import Poster from "./Poster";

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={App}/>
				<Route exact path="/:id" component={Poster}/>
			</Switch>
		</Router>
	);
};

export default Routes;