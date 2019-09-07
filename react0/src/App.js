//npm run dev

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import Results from './Results';
import Details from './Details';
import { shuffle } from "lodash";

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Adopt Me!</h1>
				<Router>
					<Results path="/" />
					<Details path="/details/:id"/>
				</Router>
			</div>
		);
	}
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));



var arr = ["a", "b", "c", "d"];


console.log(shuffle(arr));