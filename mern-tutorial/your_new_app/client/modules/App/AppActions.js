// Export Constants
export const TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
export const GOTO_TASKS = 'GOTO_TASKS';

// Export Actions
export function toggleAddPost() {
  return {
    type: TOGGLE_ADD_POST
  };
}

export function gotoTasks() {
	return {
		type: GOTO_TASKS
	};
}