import { combineReducers } from 'redux';
import { 
	ADD_TODO,
	TOGGLE_TODO,
	SET_VISIBILITY_FILTER,
	VisibilityFilters
} from './actions';

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter( state = SHOW_ALL, action ) {
	switch ( action.type ) {
		case SET_VISIBILITY_FILTER:
			return action.filter;
		default:
			return state;
	}
}

			 // parameter = defaultValue
function todos( state = [], action ) {
  switch ( action.type ) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map( ( todo, index ) => {
        if (index === action.index) {
          return Object.assign( {}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

const todoApp = combineReducers({
	visibilityFilter,
	todos
});

export default todoApp;

/*
 *	( previousState, action ) => newState
 */

/*  In a reducer, never:
 *		- Mutate its arguments
 *		- Perfom side effects like API calls and routing transitions
 *		- Call non-pure functions, e.g., Date.now(), Math.random(), etc.
 */