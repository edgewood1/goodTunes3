import initState from './initState'
import ScrapeReducer from './scrapeReducer'



// this is a db tune
export default(state = initState, action) => {
  switch (action.type) {

    case 'GET_USERTUNES': 
      var state2 = Object.assign({}, state); 
      state2.showThis = state2.userTunes 
      state2.message2 = `You have ${state2.userTunes.length} saved Tunes`
      return state2
    case 'SAVETUNES': 
      var state2 = Object.assign({}, state); 
      state2.userTunes.push(action.payload.userTunes)
      state2.message = action.payload.message;
      return state2
      
    case 'REGISTER': 
      var state2 = Object.assign({}, state);
      console.log(action.payload)
        state2.message2 = action.payload.message2;
        state2.login = true;
        state2.id= action.payload.id;
        state2.logInShow =  0;
        state2.allTunesShow=  0;
        return state2

    case 'LOGIN2': 
      var state2 = Object.assign({}, state);
      console.log(state2)
      console.log(action.payload)
      state2.message2 = action.payload.message2;
      state2.message = action.payload.message
      state2.login = true;
      state2.id= action.payload.id;
      state2.logInShow =  0;
      state2.allTunesShow=  0;
      state2.userTunes = action.payload.userTunes;
      state2.showThis = action.payload.userTunes;
      return state2

    case 'LOGIN3':
      var state2 = Object.assign({}, state);
      state2.message =  action.payload.message
      state2.login =  false
      return state2

    case 'LOGIN': 
      var state2 = Object.assign({}, state);
      if (state2.logInShow) { 
        state2.logInShow = 0
      } else {
        state2.logInShow = 1
      }
      return state2

    case 'FETCH_POSTS': 
    // the payload is all the tunes returned from db
    // it could also have state2 here, add action.payload to it, and return.
      var state2 = Object.assign({}, state);
      state2.allTunes = action.payload;
      state2.message = `There are ${state2.allTunes.length} tunes in the database`
      state2.message2 = state.login == true ? 'You are logged in' : 'You are logged out'
      state2.showThis = action.payload;
      return state2

    case "GET_SCRAPE": 
      var state2 = Object.assign({}, state);
      state2.showThis = state2.scrapes;
      state2.allTunesShow = 1
      return state2

    case "GET_PLAYLIST": 
      var state2 = Object.assign({}, state);
      state2.message = `There are ${state2.allTunes.length} tunes in the database`
      state2.message2 = state.login == true ? 'You are logged in' : 'You are logged out'
      state2.logInShow = 0;
      state2.showThis = state2.allTunes;
      state2.allTunesShow = 1
      return state2

    case 'SCRAPE': 
    // the payload is all the tunes returned from db
    // it could also have state2 here, add action.payload to it, and return.
      var state2 = Object.assign({}, state);
      var newScrapes = []
      state2.scrapes=[]
      // clean the scrapes
      return state2 = ScrapeReducer(state2, action)
 
    case "PLAY":
      var state2 = Object.assign({}, state);
      if (action.payload ==="#") {
        state2.message = "Track not available for play - try another!";
        state2.playerID = action.payload
        state2.play = 0 
      } else if (action.payload) {
        state2.playerID = action.payload
        state2.message = "Press Play!";
        
        state2.play = 1
      } else  {
        state2.message = "something's wrong!";
        state2.playerID = action.payload
        state2.play = 0
      }
      return state2
        
        
    default:
      return state;
  }
}