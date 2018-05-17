import React from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

// Import Relevant Data from Database
import { MongoCollection_Tasks } from '../api/mongoTasks.js';
 
// Task component - represents a single todo item
export default class Task extends React.Component {

	toggleChecked() {
		// Set the checked property to the opposite of its current value
		Meteor.call( 'mongoCollection_Tasks.setChecked' , this.props.task._id, !this.props.task.checked );
	}

	remove() {
		Meteor.call( 'mongoCollection_Tasks.remove', this.props.task._id );
	}

	togglePrivate() {
    Meteor.call('mongoCollection_Tasks.setPrivate', this.props.task._id, ! this.props.task.private);
  }
	
	render() {
		// Give tasks a different className when they are checked off,
		// so that we can style them nicely in CSS
		const taskClassName = classnames({
      checked: this.props.task.checked,
      private: this.props.task.private,
    });

		return (
			<li className={ taskClassName }>
				<button className='delete' onClick={ this.remove.bind( this ) }>
					&times;
				</button>
				<input
					type='checkbox'
					readOnly
					checked={ !!this.props.task.checked }
					onClick={ this.toggleChecked.bind( this ) }
				/>

				 { this.props.showPrivateButton ? (
          <button className="toggle-private" onClick={this.togglePrivate.bind(this)}>
            { this.props.task.private ? 'Private' : 'Public' }
          </button>
        ) : ''}

				<span className='text'>
					<strong>{ this.props.task.username }</strong>: { this.props.task.text }
				</span>
			</li>
		);

	}

}