import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';

export default class Votr extends Component {
	render() {
		return (

			<div className="votr_page_wrapper">

				<div className="votr_wrapper">
					<div className="votr_hero_img"></div>
					<div className="votr-textarea">
						<h4 className="votr-title">VOTR</h4>
						<span className="votr-text">A web application that allows users to view a live polling feed of votes going on locally or nationally. Built on a two day deadline, and with a team of two Front End Developers and two Back-Enders, VOTR was mostly constructed using React, Material-UI, Ajax jQuery methods, and Ruby on Rails.   </span><br/><br/>
						<a className="deployed-text" href="http://votr.surge.sh" target="_blank">Deployed Application</a><br/><br/>
						<a href="https://github.com/TeamFacepalm/js-react" target="_blank">Source Code</a>
					</div>
				</div>

			</div>

		)
	}
}