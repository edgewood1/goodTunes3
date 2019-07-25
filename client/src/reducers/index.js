import {combineReducers} from 'redux';
import postReducer from './postReducer';
// import stateReducer from './index3';
import scrapeReducer from './scrapeReducer'

export default combineReducers({
  posts: postReducer, 
  // scrapes: scrapeReducer, 
  // scrape: scrape,
})