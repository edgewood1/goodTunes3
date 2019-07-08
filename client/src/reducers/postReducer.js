import initState from './initState'

// this is a db tune
export default(state = initState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS': 
    // the payload is all the tunes returned from db
    // it could also have state2 here, add action.payload to it, and return.
      var state2 = Object.assign({}, state);
      
      state2.allTunes = action.payload;
      return state2
    case 'SCRAPE': 
    // the payload is all the tunes returned from db
    // it could also have state2 here, add action.payload to it, and return.
      var state2 = Object.assign({}, state);
      var newScrapes = []
      state2.scrapes=[]
      
      state2.scrapes = action.payload.map(e => {
        //e is the first scrape - make titles consistent
        if (e.song == undefined) { e.song=e.title.replace(/(\r\n|\n|\r)/gm, "").trim()}
        // remove white space and returns from both
        e.artist = e.artist.replace(/(\r\n|\n|\r)/gm, "").trim()
        e.title = e.title.replace(/(\r\n|\n|\r)/gm, "").trim()
        return e
      })


        // loop through all saved Tunes
        var nogood = []
        var good =[]

        state2.scrapes.forEach(es => {
          console.log(es)
          state2.allTunes.forEach(e => {
            e.artist = e.artist.replace(/(\r\n|\n|\r)/gm, "").trim()
            e.title = e.title.replace(/(\r\n|\n|\r)/gm, "").trim()
            console.log(e)
            if((e.artist == es.artist)&&(e.title == es.title)) {
              nogood.push(es)
            }
          })
        })
        console.log(nogood)

        nogood.forEach(main =>   
          state2.scrapes = state2.scrapes.filter(e=> e.artist!=main.artist)  
        )
        console.log(good)
 
      state2.message = `You scraped ${state2.scrapes.length} new songs`
      console.log(state2.scrapes)

      return state2
    default:
      return state;
  }
}