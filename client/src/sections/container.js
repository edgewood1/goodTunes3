import React from "react";
import { Wrapper, Col1, Col2 } from "../assets_css/container_css";
import PlayList from "./playList";
import Login from "./login";
import Player from "./player";
import {connect } from 'react-redux'; 

class Container extends React.Component {


  render() {
 
    return (
      <Wrapper>
        <Col1>
          <Player   />
        </Col1>
        <Col2>
          {this.props.posts.logInShow ? (
            <Login
  
            />
          ) : (
            <PlayList
 
            />
          )}
        </Col2>
      </Wrapper>
    );
  }
}


const mapStateToProps = (state) => {
  console.log(state)
  return {posts: state.posts }
}
export default connect(mapStateToProps )(Container);