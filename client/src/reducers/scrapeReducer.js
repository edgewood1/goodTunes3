export default function cleanScrape(state2, action) {
  state2.scrapes = action.payload.map(e => {
    //e is the first scrape - make titles consistent
    if (e.song == undefined) { e.song=e.title.replace(/(\r\n|\n|\r)/gm, "").trim()}
    // remove white space and returns from both
    e.artist = e.artist.replace(/(\r\n|\n|\r)/gm, "").trim()
    e.title = e.title.replace(/(\r\n|\n|\r)/gm, "").trim()
    return e
  })

    // old - all tunes
    // scrapes - scrapes


    // loop through all saved Tunes
    var nogood = []
    var good =[]

    state2.scrapes.forEach(es => {
      console.log(es)
      state2.allTunes.forEach(e => {
        //clean all items in allTunes
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

    console.log(state2.scrapes)
    state2.showThis = state2.scrapes;
    state2.message = `You scraped ${state2.scrapes.length} new songs`
    console.log(state2.scrapes)

    return state2

}

