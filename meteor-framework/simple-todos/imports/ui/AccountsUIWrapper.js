import React from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

export default class AccountsUIWrapper extends React.Component {

	componentDidMount() {
		// Use Meteor Blaze to render Login buttons
		this.view = Blaze.render(
			Template.loginButtons,
			ReactDOM.findDOMNode( this.refs.container )
		);
	}

	componentWillUnmount() {
		// Clean up Blaze view
		Blze.remove( this.view );
	}

	render() {
		// Just render a placeholder container that will be filled in
		return <span ref='container' />;
	}

}