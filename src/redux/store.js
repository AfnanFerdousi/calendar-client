import { createStore, combineReducers } from 'redux';
// import eventsReducer from './reducers/events';

const rootReducer = combineReducers({
    // events: eventsReducer,
});

const store = createStore(rootReducer);

export default store;
