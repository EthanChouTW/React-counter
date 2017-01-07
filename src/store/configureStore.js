import { createStore, combineReducers } from 'redux';

import counterReducer from '../reducers/counterReducer';

const rootReducer = combineReducers({
    counterReducer
})

const configureStore = createStore(rootReducer);

export default configureStore;