import React from 'react';

class TemplateReactComponent extends React.Component {

	constructor( props ) {
		super( props ); // required to pass props from parent to this class

	}

	/*
	 *	Use this function to build the component html
	 */
	buildTemplateReactcomponent = () => {
		// Arrow functions do not have their own 'this' and 'this' of parent scope is passed automatically.
	}

	render() {
		return (
			<div className="TemplateReactComponent">
				{ this.buildTemplateReactcomponent() }
			</div>
		)
	}
}

export default TemplateReactComponent;