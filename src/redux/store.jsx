import { createStore } from 'redux';
import { controlReducer } from './redures/redusers';

const store = createStore(
     controlReducer,
     window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
