import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

// Import Relevant Data from Database
import { MongoCollection_Tasks } from '../api/mongoTasks.js';

// Import Relevant React Components
import Task from './Task.js';
import AccountsUIWrapper from './AccountsUIWrapper.js';
 
// App component - represents the whole app
class App extends React.Component {

	constructor( props ) {
		super( props );
		this.state = {
			hideCompleted: false
		};
	}

	handleSubmit( event ) {
		event.preventDefault();
 
		// Find the text field via the React ref
		const text = ReactDOM.findDOMNode( this.refs.textInput ).value.trim();
 
		Meteor.call( 'mongoCollection_Tasks.insert', text );
 
		// Clear form
		ReactDOM.findDOMNode( this.refs.textInput ).value = '';
	}

	toggleHideCompleted() {
		this.setState({
			hideCompleted: !this.state.hideCompleted
		});
	}
 
	renderTasks() {

		console.log( this.props.mongoCollection_Tasks );

		let filteredTasks = this.props.mongoCollection_Tasks;

		if ( this.state.hideCompleted ) {
			filteredTasks = filteredTasks.filter( task => !task.checked );
		}

		return filteredTasks.map( ( task ) => (
			<Task key={ task._id } task={ task } />
			));

	}
 
	render() {
		return (
			<div className='container'>
				<header>

					<h1>Todo List ( { this.props.incompleteCount } ) </h1>

					<label className='hide-completed'>
						<input
							type='checkbox'
							readOnly
							checked={ this.state.hideCompleted }
							onClick={ this.toggleHideCompleted.bind( this ) }
						/>
						Hide Completed Tasks
					</label>

					<AccountsUIWrapper />

					{ ( this.props.currentUser != undefined ) ?
            <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
              <input
                type="text"
                ref="textInput"
                placeholder="Type to add new tasks"
              />
            </form>
            : 
            ''
          }

				</header>
 
				<ul>
					{ this.renderTasks() }
				</ul>
			</div>
		);
	}

}

export default withTracker( () => {
	return {

		// This becomes a member of props of App component?
		mongoCollection_Tasks: MongoCollection_Tasks.find( {}, { sort: { createdAt: -1 } } ).fetch(),

		// This becomes a member of props of App component?
		incompleteCount: MongoCollection_Tasks.find( { checked: { $ne: true } } ).count(),

		currentUser: Meteor.user()

	};
})( App );