import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const MongoCollection_Tasks = new Mongo.Collection( 'mongoCollection_Tasks' );

Meteor.methods({
	
	'mongoCollection_Tasks.insert'( text ) {
		check( text, String );

		// Make sure the user is logged in before inserting a task
		if ( this.userId === undefined ) {
			throw new Meteor.Error( 'not-authorized' );
		}

		MongoCollection_Tasks.insert({
			text,
			createdAt: new Date(),
			owner: this.userId,
			username: Meteor.users.findOne( this.userId ).username
		});
	},

	'mongoCollection_Tasks.remove'( taskId ) {
		check( taskId, String );
		MongoCollection_Tasks.remove( taskId );
	},

	'mongoCollection_Tasks.setChecked'( taskId, setChecked ) {
		check( taskId, String );
		check( setChecked, Boolean);
		MongoCollection_Tasks.update( 
			taskId,
			{ $set: { 
				checked: setChecked 
			} }
		);
	}

})