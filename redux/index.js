import { createStore } from 'redux';
import todoApp from './reducers';

const store = createStore( todoApp, window.STATE_FROM_SERVER );
