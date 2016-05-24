import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';

export default class FilmVideo extends Component {
	render() {
		return (

			<div className="film_page_wrapper">

				<div className="sxsw">
					<a href="https://vimeo.com/89339017" target="_blank">Title: Suitcase - SXSW Bumper<br/>Role: Photoshop Editor</a>
				</div>			

				<div className="dp_reel">
					<a href="https://vimeo.com/91560955" target="_blank">Title: Jonathan Silva DP Reel<br/>Role: Cinematographer </a>
				</div>

				<div className="euphonia">
					<a href="https://vimeo.com/64493407" target="_blank">Title: Euphonia<br/> Role: Cinematographer & Soundscape Artist</a>
				</div>

				<div className="confusion">
					<a href="https://vimeo.com/117249231" target="_blank">Title: Confusion Through Sand<br/> Role: Foley Artist </a>
				</div>

				<div className="notes_on_bio">
					<a href="https://vimeo.com/21119709" target="_blank">Title: Notes On Biology<br/> Role: Cinematographer </a>
				</div>

				<div className="the_flamingo">
					<a href="https://vimeo.com/55386149" target="_blank">Title: The Flamingo<br/> Role: Cinematographer</a>
				</div>
				
			</div>

		)
	}
}