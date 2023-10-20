import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import counterReducers from "./reducers/counterReducers"
import todoReducers from "./reducers/todoReducers"

const rootReducers = combineReducers({
    counter: counterReducers,
    todo: todoReducers
});

const store = createStore(
    rootReducers,
    applyMiddleware(thunk)
);

export default store