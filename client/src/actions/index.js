// import jsonPlaceholder from '../api/jsonPlaceholder';
import axios from 'axios'

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

export const saveTunes = (data) => 
async dispatch=> {
  console.log(data)
  const response = await axios.post("/addScrape", data)
  console.log(response)
  dispatch({type: 'SCRAPE', payload: response.data})
}


 