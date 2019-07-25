
import React, {Fragment} from "react";
 
import {
  Container,
  Header,
  Names,
  Buttons,
  LargeFont,
  MedFont,
  RateDiv
} from "../assets_css/playList_css";

import {connect } from 'react-redux'; 
import {playTunes} from '../actions'

const random = () => {
  var random = Math.floor(Math.random() * 100000);
  return random;
};

 

const PlayButton = (props) => {
 
  
  return(
              <button
                onClick={() => props.playTunes(props.e)}
                style={{
                  margin: "3%",
                  backgroundColor: "#f5d21f",
                  width: "75%",
                  justifyContent: "center",
                  marginLeft: "15%"
                }}
              >
                Play
              </button>
       
    
  )
  
}
 

const mapStateToProps = (state) => {
 // this comes from the reducers // as in return posts or return posts
  return {posts: state.posts  }
}
export default connect(mapStateToProps, {playTunes})(PlayButton);