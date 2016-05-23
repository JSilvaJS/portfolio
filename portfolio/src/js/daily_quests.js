import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';

export default class DailyQuests extends Component {
	render() {
		return (

			<div className="dq_page_wrapper">

				<div className="dq_wrapper">
					<div className="dq_hero_img"></div>
					<div className="dq-textarea">
						<h4 className="dq-title">Daily Quests</h4>
						<span className="dq-text">This solo project is a “choose your own adventure” style game, about a superhero programmer walking home from work. Built with JavaScript, jQuery, and in less than twenty-four hours, this game can be considered a model as to how to make online comic books more interactive.</span><br/><br/>
						<a className="deployed-text" href="http://dailyquests.surge.sh" target="_blank">Deployed Application</a><br/><br/>
						<a href="https://github.com/JSilvaJS/daily_quests" target="_blank">Source Code</a>
					</div>
				</div>

			</div>

		)
	}
}