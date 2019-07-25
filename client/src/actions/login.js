import axios from 'axios'
 


export default function login(response) {
  return new Promise(async function(resolve, reject) {

  
  if (response.data.user._id) {
    let id = response.data.user._id
    let tunes = await axios.get("/savedTunes/" + id);
    console.log("tunes")
    console.log(tunes)
    if (tunes.data) {
      let message;
      tunes.data.message
      ? (message = tunes.data.message)
      : (message = "You have " + tunes.data.length + " saved tunes.");

      let action = {
        type: 'LOGIN2', 
        payload: {
          message2: response.data.message,
          message: message,
          login: true,
          id: id,
          logInShow: 0,
          allTunesShow: 0,
          userTunes: tunes.data, 
          showThis: tunes.data
        }
      }
      resolve(action)
    } else {
      let action = {
        type: 'LOGIN3',
        payload: {
          message: "No playlist yet"
        }
      }
      resolve(action)
    }
    
    
  } else {
    let action = {
      type: 'LOGIN3', 
      payload: {
        message: response.data.message,
        login: false
      }
    }
    resolve(action)
  }
})
}