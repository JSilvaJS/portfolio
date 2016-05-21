import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';

export default class Header extends Component {
	render() {
		return (

			<div className="heading_wrapper">

				<div className="logo_wrapper">
					<div className="heading_logo"></div>
				</div>

				<div className="menu_wrapper1">
				<div className="menu_wrapper2">
					<div className="squig_left"></div>
					<div className="aboutme_title"></div>
					<div className="resume_title"></div>
					<div className="projects_title"></div>
					<div className="film_video_title"></div>
					<div className="squig_right"></div>
				</div>
				</div>

			</div>

		)
	}
}