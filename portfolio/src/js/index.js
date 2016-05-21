// Javascript Entry Point
import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ReactDOM from 'react-dom';
import Header from "./header";
import AboutMe from "./about_me";
import Resume from "./resume";
import FilmVideo from "./film_video";
import Projects from "./projects";

ReactDOM.render ((
	<Router history={hashHistory}>
		<Route path="/" component={Header}>
			<IndexRoute component={AboutMe}/>
			<Route path="/resume" component={Resume}/>
			<Route path="/projects" component={Projects}/>
			<Route path="/Film&Video" component={FilmVideo}/>
		</Route>
	</Router>
	), document.querySelector('.app'));