import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';

export default class AboutMe extends Component {
	render() {
		return (

			<div className="aboutme_wrapper">

				<div className="aboutme_picture_wrapper">

					<div className="jon_picture"></div>

					<div className="aboutme_textbox">
						<span className="text1">Hey There!</span><br/>
						<span className="text2">My name is Jonathan Silva and I am a Front End Developer living in Atlanta, Georgia. I take pride in creating simple and fun design. On my spare time you can find me working on projects with friends or going out and enjoying the city's delicious nosh spots and local drinkeries. <br/> Thanks for stopping by, and feel free to check out my work / contact me anytime. </span>
					</div>

				</div>
				
			</div>

		)
	}
}