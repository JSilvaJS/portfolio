import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import Clipboard from 'clipboard';
import Icon from './icon';

export default class Footer extends Component {

	render() {

		return (

			<div className="footer_page_wrapper">

			<a href="https://github.com/jsilvajs" target="_blank" alt="Jon Silva's Github Account"><Icon type="github"/></a>
			<a href="mailto:silva.jon86@gmail.com?subject=I saw your site and wanted to get in touch!" alt="Jon Silva's Email Account"> <Icon type="envelope-o"/></a>
			<a href="https://twitter.com/JonSilvaJS" target="_blank" alt="Jon Silva's Twitter Account"><Icon type="twitter"/></a>

			</div>

		)
	}
}
