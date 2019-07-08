
import initState from './initState'
// this is a db tune
export default(state = initState, action) => {
  switch (action.type) {
    case 'SCRAPE': 
    // the payload is all the tunes returned from db
    // it could also have state2 here, add action.payload to it, and return.
      var state2 = Object.assign({}, state);
      var newScrapes = []
      state2.scrapes = []
      state2.scrapes = action.payload.filter(e => {
        console.log(e)
        if (e.song == undefined) { e.song=e.title.trim()}
        e.artist = e.artist.trim()
        console.log(e.song.trim())
        console.log(state2.allTunes)
          state2.allTunes.forEach(main => {
            // if ((main.artist !== e.artist) && (main.song !== e.song)) {
              console.log(`comparing ${main.artist} with ${e.artist}`)
              if (main.artist !== e.artist) {
              newScrapes.push(e)
            }
            return newScrapes;
          })
       
      });
      console.log(state2.scrapes)
      return state2
      

      
    default:
      return state;
  }
}