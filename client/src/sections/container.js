import React from "react";
import { Wrapper, Col1, Col2 } from "../assets_css/container_css";
import PlayList from "./playList";
import Login from "./login";
import Player from "./player";

const logInShow = 0

class Container extends React.Component {


  render() {
 
    return (
      <Wrapper>
        <Col1>
          <Player   />
        </Col1>
        <Col2>
          {logInShow ? (
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

export default Container;
