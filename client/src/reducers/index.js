import {combineReducers} from 'redux';
import postReducer from './postReducer';
// import stateReducer from './index3';
import scrape from './scrapeReducer'

export default combineReducers({
  posts: postReducer, 
  // state2: stateReducer, 
  // scrape: scrape,
})