// import jsonPlaceholder from '../api/jsonPlaceholder';
import axios from 'axios'
import loginM from './login';

export const fetchPosts = () => 
async dispatch => {
  const response = await axios.get("/getPlaylist")
  
  dispatch({type: 'FETCH_POSTS', payload: response.data})
}

export const fetchScrape = () => 
async dispatch => {
  const response = await axios.get("/scrape")
  
  dispatch({type: 'SCRAPE', payload: response.data})
}

export const addScrape = (data) => 
async dispatch=> {
  console.log(data)
  const response = await axios.post("/addScrape", data)
  console.log(response)
  dispatch({type: 'SCRAPE', payload: response.data})
}

// returns a function
export const playTunes = (data) => 
async dispatch => {
  data.title.replace(/['"]+/g, '')
  data.artist.replace(/['"]+/g, '')
  var url = `/spotify2/ ${data.title}/${data.artist}`
  const response = await axios.get(url)
  console.log(response)
  dispatch({type: 'PLAY', payload: response.data})
}

export const login = () => dispatch => dispatch({type: 'LOGIN' })


export const getScrapes = () => {return {type: 'GET_SCRAPE'}}

export const getPlaylist = () => {return {type: 'GET_PLAYLIST'}}

export const getUserTunes = () => {return {type: 'GET_USERTUNES'}}

export const login2 = (data) => 
    
  async dispatch => {
  var req = {username: data.username, password: data.password}
  console.log(req)
  if (data.event ==="Register") {

    // register
    let response = await axios.post("/register", req);
    // change state
     console.log(response)
    let action = {
      type: "REGISTER",
      payload: {
        message2: response.data.message,
        id: response.data.user._id ,
        login: true,
        db: false
      }
      
    }

    dispatch(action)
    
  } else if (data.event ==="Login") {
    console.log("login")
    var response = await axios.post("/login", req);
    console.log(response)

    let setup =  loginM(response)
    setup.then(function(action) {
      dispatch(action)
    })
    

  }
  // var action = {type: data.event, payload: {username: data.username, password: data.password}} 
  // dispatch(action)
}

//// save tunes


export const saveTunes = (e) => 

  async dispatch => {
    const response = await axios.post("/add", e);
    if (response.data == "already saved") {
      dispatch({ type: 'CANTSAVE', 
      payload: {
        message: response.data }
      });
    } else if (response.data.tune) {
      // userTunes will get pushed to states userTunes... 
      dispatch({type: 'SAVETUNES',
      payload: {
        message: response.data.message, userTunes: e}
      })
    } else {
      dispatch({
        message: "you'll need to login and try again",
        logInShow: 1
      });
    }
    
    
  }

  
  
  
 