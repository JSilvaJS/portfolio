import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';

export default class Projects extends Component {
	render() {
		return (
			<div className="projects_page_wrapper">

				<div className="projects_wrapper">

				<Link to="/cabin_fever"><div className="cabin_fever"></div></Link>
				<Link to="/votr"><div className="votr"></div></Link>
				<Link to="/daily_quests"><div className="daily_quests"></div></Link>

				</div>
				
			</div>
		);
	}
}