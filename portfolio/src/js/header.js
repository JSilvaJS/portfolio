import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import Footer from './footer';

export default class Header extends Component {
	render() {
		return (

			<div>

				<div className="heading_wrapper">

					<div className="logo_wrapper">
						<Link to="/"><div className="heading_logo"></div></Link>
					</div>

					<div className="menu_wrapper1">
					<div className="menu_wrapper2">
						<div className="squig_left"></div>
						<Link to="/"><div className="aboutme_title"></div></Link>
						<Link to="/resume"><div className="resume_title"></div></Link>
						<Link to="/projects"><div className="projects_title"></div></Link>
						<Link to="/Film&Video"><div className="film_video_title"></div></Link>
						<div className="squig_right"></div>
					</div>
					</div>

				</div>

				{this.props.children}

				<Footer/>

			</div>

		)
	}
}