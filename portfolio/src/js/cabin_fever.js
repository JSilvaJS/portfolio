import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';

export default class CabinFever extends Component {
	render() {
		return (

			<div className="cabin_page_wrapper">

				<div className="cabin_fever_wrapper">
					<div className="cf_hero_img"></div>
					<div className="cf-textarea">
						<h4 className="cf-title">Cabin Fever</h4>
						<span className="cf-text">Basically Kayak for cabins, this web application seeks to make finding that perfect cabin easier. Built on a three week deadline, and with a team of two Front-End Developers and two Back-Enders, Cabin Fever was mostly constructed using React, Ajax jQuery methods, and Ruby on Rails. </span><br/><br/>
						<a className="deployed-text" href="http://cabinfever.surge.sh" target="_blank">Deployed Application</a><br/><br/>
						<a href="https://github.com/GetCabinFever/frontend" target="_blank">Source Code</a>
					</div>
				</div>

			</div>

		)
	}
}