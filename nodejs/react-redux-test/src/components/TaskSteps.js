import React from 'react';

class TaskSteps extends React.Component {

	constructor( props ) {
		super( props );
		//console.log( props );
	}

	buildTaskSteps = () => {
		console.log( this.props );
		for 
	}

	render() {
		return (
			<div className="TaskSteps">
				{ this.buildTaskSteps() }
			</div>
		);
	}
}

export default TaskSteps;