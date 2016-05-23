import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';

export default class AboutMe extends Component {
	render() {
		return (

			<div className="aboutme_wrapper">

				<div className="aboutme_picture_wrapper">
					<div className="jon_picture"></div>
					<div className="aboutme_textbox"><span>Hi, Hello There</span></div>
				</div>
				
			</div>

		)
	}
}