// Import Actions
import { TOGGLE_ADD_POST } from './AppActions';
import { GOTO_TASKS } from './AppActions';

// Initial State
const initialState = {
  showAddPost: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost
			};
		case GOTO_TASKS:
			return {
				showTasks: !state.showTasks
			} 

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.app.showAddPost;

// Get showTasks
export const getShowTasks = state => state.app.showTasks;

// Export Reducer
export default AppReducer;
